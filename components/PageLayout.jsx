import { useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function PageLayout({ children }) {
  useEffect(() => {
    document.getElementsByTagName("html")[0].dataset.theme = "light";
  }, []);

  return (
    <>
      <Head>
        <title>News App</title>
        <meta name="description" content="New's website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="py-2 bg-slate-700 text-white">
        <div className={styles.container}>
          <div className="flex justify-between">
            <p className="text-white mb-0">
              📰{" "}
              <Link href="/" className="text-white">
                news app
              </Link>{" "}
              by cesaralvarod
            </p>
            <Link href="/about">About</Link>
          </div>
        </div>
      </header>

      <div className={styles.container}>
        <main className="pt-5">{children}</main>
      </div>
    </>
  );
}
