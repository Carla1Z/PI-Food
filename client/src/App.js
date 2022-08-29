import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Form from "./view/Form";
import Home from "./view/Home";
import LandingPage from "./view/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/home" component={Home} />
          <Route path="/form" component={Form} />
          <Route path="/carla">
            <h2>Soy una ruta random</h2>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
