import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./header.scss";
const Header = () => {
  const navigate = useNavigate();

  const { user, logout } = useAuth();
  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <header>
      <div className="container">
        <nav>
          {user && <NavLink to="profile">Profile</NavLink>}
          {!user && <NavLink to="login">Login</NavLink>}
          {user && (
            <button onClick={handleLogout}>
              <img src="Выйти.svg" alt="Eror" />
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
