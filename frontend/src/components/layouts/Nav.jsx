import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
export default function Nav() {
  return (
    <nav className="nav">
      Nav
      {/* <Link to="/admin">Admin</Link> */}
      {/* <Link to="/">Home</Link> */}
      <Router>
        <Link to="/legals">Admin</Link>
        </Router>
    </nav>
  );
}
