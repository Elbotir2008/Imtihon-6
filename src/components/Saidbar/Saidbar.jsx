import React from "react";
import "./saidbar.scss";
import { Link } from "react-router-dom";

const Saidbar = () => {
  return (
    <aside>
      <img src="public/Mask group.svg" alt="Eror" />
      <img src="Настройки.svg" alt="Eror" />
      <Link to="/profile" className="linkImg1">
        <img src="Профиль.svg" alt="Eror" />
      </Link>
      <Link to="/products" className="linkImg2">
        <img src="Group 2.svg" alt="Eror" />
      </Link>
      <Link to="AddCart" className="AddCart">
        <button className="btn btn-sm btn-outline-primary text-white">
          Add to Cart
        </button>
      </Link>
    </aside>
  );
};

export default Saidbar;
