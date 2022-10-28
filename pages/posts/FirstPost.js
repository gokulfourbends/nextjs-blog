import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/Layout";
export default function FirstPost() {
  return (
    <>
      <Layout>
        {" "}
        <Head>
          <title>First Post</title>
        </Head>
        <Script
          src="https://connect.facebook.net/en_US/sdk.js"
          strategy="lazyOnload"
          onLoad={() =>
            console.log(`script loaded correctly, window.FB has been populated`)
          }
        />
        <div>
          <h1>Ford Mustang</h1>
          <Link href="/">Super Snake</Link>
        </div>
      </Layout>
    </>
  );
}
