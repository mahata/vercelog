import Head from "next/head";
import Link from "next/link";

import Layout, { siteTitle } from "@/components/layout";
import utilStyles from "@/styles/utils.module.scss";

export default function Welcome() {
  return (
    <Layout>
      <Head>
        <title>ようこそ - {siteTitle}</title>
        <meta name="description" content="スプーキーズ見習いのブログへようこそ。ソフトウェア開発や技術に関する記事を投稿しています。" />
        <style jsx>{`
          .japanese-content {
            font-family: "Noto Sans CJK JP", "Noto Sans JP", "Hiragino Kaku Gothic ProN", "Hiragino Sans", "YuGothic", "Yu Gothic", "Meiryo", sans-serif;
            font-feature-settings: "palt";
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
        `}</style>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} japanese-content`}>
        <h1 className={utilStyles.heading2Xl}>ようこそ</h1>
        <div className={utilStyles.headingMd}>
          <p>
            <strong>スプーキーズ見習いのブログ</strong>へようこそ！
          </p>
          <p>
            このブログでは、ソフトウェア開発、プログラミング、技術に関する話題を中心に、
            日々の学びや経験を共有しています。
          </p>
          <p>
            React、TypeScript、Java、Kotlin、Spring Boot、AWS など、
            様々な技術スタックについての記事を投稿しています。
          </p>
          <p>
            また、技術書の読書感想や、開発に役立つツールの紹介、
            プログラマとしての成長についても書いています。
          </p>
          <div style={{ marginTop: "2rem" }}>
            <h2 className={utilStyles.headingLg}>サイトの使い方</h2>
            <ul style={{ marginLeft: "1.5rem" }}>
              <li>最新の記事一覧は<Link href="/pages/1">こちら</Link>からご覧いただけます</li>
              <li>記事はページネーションで整理されています</li>
              <li>各記事のタイトルをクリックすると詳細をご覧いただけます</li>
            </ul>
          </div>
          <div style={{ marginTop: "2rem" }}>
            <h2 className={utilStyles.headingLg}>最近の話題</h2>
            <p>
              TypeScript、React、Spring Boot を使ったフルスタック開発、
              ドメイン駆動設計、テスト駆動開発などについて書いています。
            </p>
          </div>
          <div style={{ marginTop: "2rem", textAlign: "center" }}>
            <Link href="/pages/1" className={utilStyles.colorInherit}>
              <button style={{
                padding: "0.75rem 1.5rem",
                backgroundColor: "#0070f3",
                color: "white",
                border: "none",
                borderRadius: "0.5rem",
                fontSize: "1rem",
                cursor: "pointer",
                textDecoration: "none"
              }}>
                記事一覧を見る
              </button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}