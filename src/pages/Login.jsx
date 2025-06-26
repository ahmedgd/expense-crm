import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.username === "admin" && form.password === "123") {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="container-fluid min-vh-100 p-0">
      <div className="row g-0 h-100">
     
        <div className="col-md-6 bg-primary text-white d-flex align-items-center justify-content-center">
          <div className="text-center px-4">
            <h1 className="display-5 fw-bold">Welcome to CRM</h1>
            <p className="lead">Manage your leads and properties efficiently.</p>
          </div>
        </div>

        <div className="col-md-6 d-flex align-items-center justify-content-center bg-light">
          <div className="bg-white p-5 rounded shadow w-100 mx-3" style={{ maxWidth: "500px" }}>
            <div className="text-center mb-4">
              <h3 className="text-primary">CRM Login</h3>
              <p className="text-muted">Enter your admin credentials</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  placeholder="admin"
                  value={form.username}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group mb-4">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="123456"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
