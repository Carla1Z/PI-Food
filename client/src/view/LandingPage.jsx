import { Link } from "react-router-dom";
import styles from "./css/LandingPage.module.css";
import food from '../assets/food.gif'

export default function LandingPage() {
  return (
    <div className={styles.container}>
      <div className={styles.gif}>
      </div>
      <div className={styles.henryFood}>
        <div className={styles.henry}>Henry</div>
        <div className={styles.food}>Food</div>
        <Link to="/home">
          <button className={styles.button}>Cocinar</button>
        </Link>
      </div>
    </div>
  );
}
