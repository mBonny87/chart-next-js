import { Bar } from "react-chartjs-2";
import Layout from "../../components/layout";

import faker from "faker";
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

export default function BarChart() {
  return (
    <Layout title="BarChart">
      <Bar
        width="1700px"
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
                faker.datatype.number({ min: 0, max: 1000 })
              ),
              borderColor: "#53FF45",
              backgroundColor: "rgba(83, 255, 69, 0.5)",
              tension: 0.4,
            },
            {
              label: "Bar 2",
              data: labels.map(() =>
                faker.datatype.number({ min: 0, max: 1000 })
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
