import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4 mb-4">
      <span className="navbar-brand">Expense CRM</span>
      <div className="ms-auto">
        <button onClick={handleLogout} className="btn btn-light">
           Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
