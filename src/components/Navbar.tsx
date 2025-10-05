import React, { JSX } from "react";
import { Link } from "react-router-dom";

export default function NavBar(): JSX.Element {
  return (
    <header className="app-navbar">
      <nav className="nav-container">
        <h1 className="brand">To-Do</h1>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/favoritos">Favoritos</Link></li>
        </ul>
      </nav>
    </header>
  );
}
