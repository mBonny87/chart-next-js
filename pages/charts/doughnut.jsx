import { Doughnut } from "react-chartjs-2";
import Layout from "../../components/layout";

import faker from "faker";
const labels = [
  "Kick Off Meeting",
  "Analysis",
  "Design",
  "Code",
  "Test",
  "Release",
];

export default function DoughnutChart() {
  return (
    <Layout title="Doughnut Chart">
      <Doughnut
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
                "rgb(245, 243, 245)",
              ],
              borderWidth: 0,
            },
          ],
        }}
      />
    </Layout>
  );
}
