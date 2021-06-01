import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Form } from "../components/smarts/Form";
import { Tab } from "../components/dummies/Tab";
import { Home } from "../components/dummies/Home";
import { Table } from "../components/smarts/Table";


export const AppRouter = () => {
  return (
    <Router>
      <div>
        <h2 className="text-center my-5 titulo">
          Administrador de Pacientes de Veterinaria
        </h2>
        <Tab />

        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/agregar" component={Form} />
            <Route exact path="/listar" component={Table} />
            {/* <Route exact path="/login" component={LoginScreen} /> */}
          </Switch>
        </div>
      </div>
    </Router>
  );
};
