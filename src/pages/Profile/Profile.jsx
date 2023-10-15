import React from "react";
import { useAuth } from "../../context/AuthContext";
import "./profile.scss";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="profile">
      <div className="container">
        <h1>Welcome {user?.username}</h1>
        <Link to="/products">
          <button className="btn btn-primary">Products</button>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
