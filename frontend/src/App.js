import "bulma/css/bulma.css";
import "@fortawesome/fontawesome-free/js/all";

import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import HomeViev from "./views/homeView/homeView";
import SummonerView from "./views/summonerView/summonerView";
import {LogoButton} from './components/logoButton/logoButton';

function App() {
  return (
    <BrowserRouter>
      <LogoButton/>
      <Switch>
        <Route path="/" exact={true} component={HomeViev} />
        <Route path="/summoner" exact={true} component={SummonerView} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
