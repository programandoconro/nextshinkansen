import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>次の新幹線</title>
        <meta
          name="description"
          content="Get time until the next bullet trains"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <b>次の新幹線へようこそ！</b>!
        </h1>
        <Image src={"/favicon.ico"} height={100} width={100} />
      </main>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          paddingBottom: "10px",
          height: "100px",
        }}
      >
        <Link href={"/api/hakata-hakataminami"}>
          <button>
            <h2>博多駅から博多南まで</h2>
          </button>
        </Link>
        <Link href={"/api/hakataminami-hakata"}>
          <button>
            <h2>博多駅から博多南まで</h2>
          </button>
        </Link>
      </div>
      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
