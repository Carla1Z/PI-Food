import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div>
      <h1>Hola!! Soy la landingpage 🤗</h1>
      <Link to="/home">
      <button>Ir a la superhome</button>
      </Link>
    </div>
  );
}
