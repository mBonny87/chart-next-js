import { Radar } from "react-chartjs-2";
import Layout from "../../components/layout";

import faker from "faker";
const labels = [
  "Language acquisition",
  "Innovative thinking",
  "Analytical skills",
  "Attention to detail",
  "Patience",
  "Communication",
];

export default function RadarChart() {
  return (
    <Layout title="RadarChart">
      <Radar
        width="700px"
        height="700px"
        color="#fff"
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: "top",
              labels: {
                color: "#fff",
              },
            },
          },
          scales: {
            r: {
              pointLabels: {
                //properties of every label listed above in the array
                color: "#fff",
              },
              suggestedMin: 0,
              suggestedMax: 100,
              ticks: {
                //the values from 0 to 100 properties
                backdropColor: "transparent",
                color: "#fff",
              },
              grid: {
                //grid properties
                color: "#fff",
                lineWidth: 0.5,
              },
            },
          },
          elements: {
            line: {
              borderWidth: 3,
            },
          },
        }}
        data={{
          labels,
          datasets: [
            {
              label: "Radial 1",
              data: labels.map(() =>
                faker.datatype.number({ min: 0, max: 100 })
              ),
              fill: true,
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgb(255, 99, 132)",
              pointBackgroundColor: "rgb(255, 99, 132)",
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "rgb(255, 99, 132)",
            },
            {
              label: "Radial 2",
              data: labels.map(() =>
                faker.datatype.number({ min: 0, max: 100 })
              ),
              fill: true,
              backgroundColor: "rgba(54, 162, 235, 0.2)",
              borderColor: "rgb(54, 162, 235)",
              pointBackgroundColor: "rgb(54, 162, 235)",
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "rgb(54, 162, 235)",
            },
          ],
        }}
      />
    </Layout>
  );
}
