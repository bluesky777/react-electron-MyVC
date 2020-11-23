import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./componentes/login/Login";
import Panel from "./componentes/panel/Panel";
import SelectColegio from "./componentes/select-colegio/SelectColegio";
import NavigatorBar from "./componentes/navegator-bar/NavigatorBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigatorBar></NavigatorBar>

        <Switch>
          <Route path="/" exact={true} component={SelectColegio} />

          <Route path="/panel" component={Panel} />
          <Route path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
