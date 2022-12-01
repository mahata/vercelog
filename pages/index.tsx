import Head from 'next/head'
import Link from "next/link";

import '@acab/reset.css';
import Layout, {siteTitle} from "../components/layout";
import utilStyles from '../styles/utils.module.scss'
import {getSortedPostsData, PostData} from "../lib/posts";
import Date from '../components/date'

type Props = {
  allPostsData: PostData[];
}

export default function Home({ allPostsData }: Props) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>自己紹介をここに書くんだって。</p>
        <p>
          このブログは Next.js のチュートリアルを終えた後、割と動きそうなものになっていたので、それを TypeScript と Sass に直してホストしているものです。
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Posts</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>

    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
