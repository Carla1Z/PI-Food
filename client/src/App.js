import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Detail from "./view/Detail";
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
          <Route path="/detail/:id" component={Detail} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
