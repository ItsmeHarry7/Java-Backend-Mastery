import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import DatabaseDashboard from "./pages/Auth/DatabaseDashboard"; 
import "./App.css";

export default function App() {
  return (
    <Router>
      {/* Simple Navigation Bar to click through your endpoints */}
      <nav style={{ padding: "15px", background: "#222", marginBottom: "20px", borderRadius: "8px" }}>
        <Link to="/login" style={{ margin: "0 15px", color: "#646cff", textDecoration: "none" }}>Login</Link>
        <Link to="/register" style={{ margin: "0 15px", color: "#646cff", textDecoration: "none" }}>Sign Up</Link>
        <Link to="/dashboard" style={{ margin: "0 15px", color: "#646cff", textDecoration: "none" }}>💾 Dashboard</Link>
      </nav>

      <div className="container">
        <Routes>
          {/* Default view routes to Login */}
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<DatabaseDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}