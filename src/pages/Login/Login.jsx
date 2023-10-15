import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./login.scss";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleLogin = () => {
    login(user);
    navigate("/profile", {
      replace: true,
    });
  };

  return (
    <div className="login">
      <div className="container">
        <div className="input-1 input">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
        </div>
        <div className="input-2 input">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            name="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>
        <button onClick={handleLogin} className="btn btn-primary w-100 mt-4">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
