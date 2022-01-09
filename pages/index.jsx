import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>ChartsNext-JS</title>
      </Head>
      <Link href="/charts/linechart">
        <a>Line Chart</a>
      </Link>
      <Link href="/charts/barchart">
        <a>Bar Chart</a>
      </Link>
      <Link href="/charts/doughnut">
        <a>Doughtnut Chart</a>
      </Link>
      <Link href="/charts/polararea">
        <a>Polar Area Chart</a>
      </Link>
      <Link href="/charts/radarchart">
        <a>Radar Chart</a>
      </Link>
    </>
  );
}

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
