import Head from 'next/head'
import '@acab/reset.css';
import Layout, {siteTitle} from "@/components/layout";
import utilStyles from '@/styles/utils.module.scss'

export default function Home() {
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
    </Layout>
  );
}
