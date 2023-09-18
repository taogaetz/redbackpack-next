import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>redbackpack</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello World!
        </h1>

        <p className={styles.description}>
          This place is gunna be awesome someday.
        </p>
      </main>

      <footer className={styles.footer}>
          <p>
          Powered by Swag.
          </p>
      </footer>
    </div>
  )
}
