import Head from "next/head";
import Image from 'next/image'

import styles from './layout.module.scss'
import utilStyles from '../styles/utils.module.scss'

export const siteTitle = '存在証明 - Next.js 習作バージョン'

export default function Layout({children}: any) {
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
        <Image
          priority
          src="/images/profile.png"
          className={utilStyles.borderCircle}
          height={144}
          width={144}
          alt="Profile Icon"
        />
        <h1 className={utilStyles.heading2Xl}>こんにちは!</h1>
      </header>

      <main>{children}</main>
    </div>
  );
}
