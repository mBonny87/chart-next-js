import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useHover } from "../hooks/useHover";

export default function Home() {
  const basePathCharts = "/charts/";
  const routesCharts = [
    {
      path: "linechart",
      title: "Line Chart",
      hover: useHover(),
    },
    {
      path: "barchart",
      title: "Bar Chart",
      hover: useHover(),
    },
    {
      path: "doughnut",
      title: "Doughnut Chart",
      hover: useHover(),
    },
    {
      path: "polararea",
      title: "Polar Area Chart",
      hover: useHover(),
    },
    {
      path: "radarchart",
      title: "Radar Chart",
      hover: useHover(),
    },
  ];

  return (
    <div className="grid grid-rows-6 h-screen">
      <div className="row-span-1 text-center self-center font-medium text-2xl">
        Select one of these charts
      </div>
      <div className="row-span-5 grid grid-cols-6 mx-8 mt-8 gap-6">
        <Head>
          <title>ChartsNext-JS</title>
        </Head>
        {routesCharts.map((x) => (
          <div
            key={x.path}
            className="col-span-2 flex items-center justify-center"
          >
            <Link href={`${basePathCharts + x.path}`}>
              <a
                ref={x.hover[0]}
                className={
                  x.hover[1] ? "transition ease-in-out scale-150 z-10" : ""
                }
              >
                <div className="flex flex-col justify-center items-center">
                  <Image
                    src={`/${x.path}.png`} // Route of the image file
                    height={200} // Desired size with correct aspect ratio
                    width={200} // Desired size with correct aspect ratio
                    alt={x.title}
                  />
                  {x.title}
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
