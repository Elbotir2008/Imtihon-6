import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./login.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
const initialValues = {
  username: "",
  password: "",
};

const onSubmit = (values) => {
  console.log("Form values", values);
};

const validationSchema = Yup.object({
  username: Yup.string().required("Email is required!"),
});

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

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const { values, errors, handleChange, handleSubmit, handleBlur, touched } =
    formik;

  return (
    <div className="login">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="input-1 input">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.username && errors.username ? (
              <div className="error">{errors.username}</div>
            ) : null}
          </div>
          <div className="input-2 input">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.password && errors.password ? (
              <div className="error">{errors.password}</div>
            ) : null}
          </div>
          <Link to="profile">
            <button
              onClick={handleLogin}
              className="btn btn-primary w-100 mt-4"
            >
              Login
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
