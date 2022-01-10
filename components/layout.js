import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
} from "chart.js";

import styles from "./layout.module.css";
import Link from "next/link";

ChartJS.register(
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export default function Layout({ children, title }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link href="/">
          <a className={styles.backHome}>Back to home</a>
        </Link>
        <div className={styles.title}>{title}</div>
      </div>

      <div className={styles.chart}>
        <div className="relative">{children}</div>
      </div>
    </div>
  );
}
