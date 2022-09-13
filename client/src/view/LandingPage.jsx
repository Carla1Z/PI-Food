import { Link } from "react-router-dom";
import styles from "./css/LandingPage.module.css";

export default function LandingPage() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.henry}>Henry</div>
        <div className={styles.food}>Food</div>
        <Link to="/home">
          <button>Ir a la superhome</button>
        </Link>
      </div>
    </div>
  );
}
