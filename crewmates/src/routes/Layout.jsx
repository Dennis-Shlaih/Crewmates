import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../App.css";

const Layout = () => {
  return (
    <div className="app-container">
      <nav className="sidebar">
        <h2>Crewmate Creator</h2>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/create">Create</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
        </ul>
      </nav>

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
