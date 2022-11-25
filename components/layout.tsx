import Head from "next/head";
import Image from 'next/image'
import Link from "next/link";
import {ReactNode} from "react";

import styles from '@/components/layout.module.scss'
import utilStyles from '@/styles/utils.module.scss'

export const siteTitle = '存在証明 - Next.js 習作バージョン'

type Props = {
  children?: ReactNode
  home?: Boolean
}

export default function Layout({children, home}: Props) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico"/>
        <meta
          name="description"
          content="Next.js 習作"
        />
        <meta name="og:title" content={siteTitle}/>
      </Head>
      <header className={styles.header}>
        {home ?(
          <>
            <Image
              priority
              src="/images/profile.png"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt="Profile Icon"
            />
            <h1 className={utilStyles.heading2Xl}>こんにちは!</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.png"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt="Profile Icon"
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                こんにちは!
              </Link>
            </h2>
          </>
        )}
      </header>

      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
