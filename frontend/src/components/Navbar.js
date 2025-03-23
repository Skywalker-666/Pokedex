import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", background: "#333", color: "white" }}>
      <Link to="/" style={{ margin: "10px", color: "white", textDecoration: "none" }}>Home</Link>
      <Link to="/pokedex" style={{ margin: "10px", color: "white", textDecoration: "none" }}>Pokedex</Link>
      <Link to="/login" style={{ margin: "10px", color: "white", textDecoration: "none" }}>Login</Link>
      <Link to="/signup" style={{ margin: "10px", color: "white", textDecoration: "none" }}>Signup</Link>
    </nav>
  );
};

export default Navbar;
