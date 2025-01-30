import Head from "next/head";
import Link from "next/link";

import "@acab/reset.css";
import DateComponent from "@/components/date";
import Layout, { siteTitle } from "@/components/layout";
import { type PostData, getSortedPostsData } from "@/lib/posts";
import utilStyles from "@/styles/utils.module.scss";

type Props = {
  allPostsData: PostData[];
  currentPage: number;
  totalPages: number;
};

export default function Home({ allPostsData, currentPage, totalPages }: Props) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>投稿記事</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <DateComponent dateString={date} />
              </small>
            </li>
          ))}
        </ul>
        <div className={utilStyles.pagination}>
          {currentPage > 1 && (
            <Link href={`/?page=${currentPage - 1}`}>前のページ</Link>
          )}
          <span>
            {currentPage} / {totalPages}
          </span>
          {currentPage < totalPages && (
            <Link href={`/?page=${currentPage + 1}`}>次のページ</Link>
          )}
        </div>
      </section>
    </Layout>
  );
}

export async function getServerSideProps({ query }: { query: { page?: string } }) {
  const POSTS_PER_PAGE = 10;
  const currentPage = query.page ? Number.parseInt(query.page) : 1;

  const allPosts = await getSortedPostsData();
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const allPostsData = allPosts.slice(startIndex, endIndex);

  return {
    props: {
      allPostsData,
      currentPage,
      totalPages,
    },
  };
}
