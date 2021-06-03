import React from "react";
import {NavLink } from "react-router-dom";
export const Tab = () => {
  return (
    <div>
      <ul className="nav nav-tabs" role="tablist">
        <li className="nav-item">
          <NavLink
            exact
            activeClassName=" nav-link active"
            data-toggle="tab"
            to="/"
            className="nav-item nav-link"
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            exact
            activeClassName=" nav-link active"
            data-toggle="tab"
            to="/agregar"
            className="nav-item nav-link"
          >
            Formulario para agregar
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            exact
            activeClassName=" nav-link active"
            data-toggle="tab"
            to="/listar"
            className="nav-item nav-link"
          >
           Listar
          </NavLink>
        </li>
        <li className="nav-item"></li>
      </ul>
    </div>
  );
};
