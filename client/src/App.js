import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { getRecipes } from "./redux/actions";
import Detail from "./view/Detail";
import Form from "./view/Form";
import Home from "./view/Home";
import LandingPage from "./view/LandingPage";

function App() {

  const dispatch = useDispatch();
  //El useEffect se va a encargar de despachar la accion getRecipes, haciendo uso del dispatch
  // Despachamos con el useEffect, se llena allRecipes y lo traemos en una constante
  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/home" component={Home} />
          <Route path="/form" component={Form} />
          <Route path="/detail" component={Detail} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;