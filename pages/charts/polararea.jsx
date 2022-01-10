import { PolarArea } from "react-chartjs-2";
import Layout from "../../components/layout";

import faker from "faker";
import Head from "next/head";
const labels = [
  "Kick Off Meeting",
  "Analysis",
  "Design",
  "Code",
  "Test",
  "Release",
];

export default function PolarAreaChart() {
  return (
    <Layout title="PolarArea Chart">
      <Head>
        <title>PolarArea Chart</title>
      </Head>
      <PolarArea
        width="700px"
        height="700px"
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
          },
          scales: {
            r: {
              ticks: {
                //the values from 0 to 100 properties
                backdropColor: "transparent",
                color: "#fff",
                z: 999999,
              },
            },
          },
        }}
        data={{
          labels,
          datasets: [
            {
              label: "Bar 1",
              data: labels.map(() =>
                faker.datatype.number({ min: 0, max: 365 })
              ),
              backgroundColor: [
                "rgb(239, 71, 111)",
                "rgb(255, 209, 102)",
                "rgb(6, 214, 160)",
                "rgb(17, 138, 178)",
                "rgb(7, 59, 76)",
                "rgb(73, 190, 170)",
              ],
              borderWidth: 0,
            },
          ],
        }}
      />
    </Layout>
  );
}
