import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Plant Owners | Home</title>
        <meta name="keywords" content="plants " />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ab quod numquam consequatur iste suscipit, doloribus sunt ut ipsam, harum, laborum eius voluptatibus fugiat. Laboriosam eaque qui nihil at exercitationem!</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ab quod numquam consequatur iste suscipit, doloribus sunt ut ipsam, harum, laborum eius voluptatibus fugiat. Laboriosam eaque qui nihil at exercitationem!</p>
        <Link href="/plants">
          <a className={styles.btn}>See all plant owners</a>
        </Link>
      </div>
    </>
  )
}
