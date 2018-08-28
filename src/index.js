import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, NavLink, Router } from "react-router-dom";
import "./index.css";

class NavMenu extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="Menu">
          <NavLink
            exact
            to="/"
            activeClassName="selected"
            className="navlink-home"
          >
            Home
          </NavLink>
          <div className="menu-services">
            <NavLink
              exact
              to="/Services/"
              activeClassName="selected"
              className="navlink-services"
            >
              Services
              <div className="sous-menu">
                <a href="#"> For entreprenneur </a>
                <a href="#"> For entreprenneur </a>
                <a href="#"> For entreprenneur </a>
              </div>
            </NavLink>
          </div>
          <NavLink
            exact
            to="/contact/"
            activeClassName="selected"
            className="navlink-contact"
          >
            Contact
          </NavLink>
        </div>
      </BrowserRouter>
    );
  }
}
ReactDOM.render(
  <BrowserRouter>
    <NavMenu />
  </BrowserRouter>,
  document.body
);
