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
        <Image src={"/favicon.ico"} height={100} width={100} priority={true} />
      </main>
      <footer className={styles.footer}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            gap: "10px",
            paddingBottom: "10px",
            width: "100%",
          }}
        >
          <button>
            <Link href={"/api/hakata-hakataminami"}>
              <a>博多駅から博多南まで</a>
            </Link>
          </button>
          <button>
            <Link href={"/api/hakataminami-hakata"}>
              <a>博多駅から博多南まで</a>
            </Link>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Home;
