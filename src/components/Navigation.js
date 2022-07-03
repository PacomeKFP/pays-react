import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink
        exact
        to="/"
        className={({ isActive }) => (isActive ? "nav-active" : undefined)}>
        Acceuil
      </NavLink>
      <NavLink
      exact
        to="/news"
        className={({ isActive }) => (isActive ? "nav-active" : undefined)}
      >
        
        News
      </NavLink>

      <NavLink
      exact
        to="/about"
        className={({ isActive }) => (isActive ? "nav-active" : undefined)}
      >
        
        À propos
      </NavLink>
    </div>
  );
};

export default Navigation;
