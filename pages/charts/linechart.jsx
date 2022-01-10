import { Line } from "react-chartjs-2";
import Layout from "../../components/layout";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import faker from "faker";
import Head from "next/head";
import Link from "next/link";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = [
  "00:00",
  "01:00",
  "02:00",
  "03:00",
  "04:00",
  "05:00",
  "06:00",
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
];

export default function LineChart() {
  return (
    <Layout title="LineChart">
      <Head>
        <title>Line Chart</title>
      </Head>
      <Line
        width="1700px"
        height="700px"
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
            // title: {
            //   display: true,
            //   text: "Chart.js Line Chart",
            // },
          },
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
            y: {
              grid: {
                display: false,
              },
            },
          },
        }}
        data={{
          labels,
          datasets: [
            {
              label: "Line 1",
              data: labels.map(() =>
                faker.datatype.number({ min: -1000, max: 1000 })
              ),
              borderColor: "#53FF45",
              backgroundColor: "rgba(83, 255, 69, 0.5)",
              tension: 0.4,
            },
            {
              label: "Line 2",
              data: labels.map(() =>
                faker.datatype.number({ min: -1000, max: 1000 })
              ),
              borderColor: "#247BA0",
              backgroundColor: "rgba(36, 123, 160, 0.5)",
              tension: 0.4,
            },
          ],
        }}
      />
    </Layout>
  );
}
