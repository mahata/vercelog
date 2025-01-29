import Head from "next/head";
import DateComponent from "../../components/date";
import Layout from "../../components/layout";
import { type PostData, getAllPostIds, getPostData } from "../../lib/posts";
import utilStyles from "../../styles/utils.module.scss";

type Props = {
  postData: PostData;
};

function stripTags(html: string): string {
  return html.replace(/<[^>]*>/g, "");
}

export default function Post({ postData }: Props) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
        <meta name="description" content={stripTags(postData.contentHtml).replaceAll("&quot;", "").slice(0, 512)} />
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <DateComponent dateString={postData.date} />
        </div>
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: contentHtml is by author (not from a random user) */}
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

type PostParams = {
  params: {
    id: string;
  };
};

export async function getStaticProps({ params }: PostParams) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
