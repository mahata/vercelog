import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import styles from "@/components/layout.module.scss";
import utilStyles from "@/styles/utils.module.scss";

export const siteTitle = "スプーキーズ見習いのブログ";
export const baseUrl = "https://mahata.vercel.app";

type Props = {
  children?: ReactNode;
  home?: boolean;
};

export default function Layout({ children, home }: Props) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="alternate" href="https://vercelog.mahata.org/feed" type="application/rss+xml" title={siteTitle} />
        <meta name="description" content="ソフトウェアに関する話だったり、そうでなかったり。" />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header className={styles.header}>
        <Link href="/">
          <Image
            priority
            src="/images/profile.png"
            className={utilStyles.borderCircle}
            height={home ? 96 : 72}
            width={home ? 96 : 72}
            alt="Profile Icon"
          />
        </Link>
      </header>

      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← 記事一覧に戻る</Link>
        </div>
      )}
    </div>
  );
}
