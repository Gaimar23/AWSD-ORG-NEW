import React, { useContext, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { StoreContext } from "../../utilis/context/StoreContext";
import "./LoginPopup.scss";
import axios from "axios";
import { toast } from "react-toastify";

const LoginPopup = ({ setShowLogin }) => {
  const { token, setToken, url, currentUser, setCurrentUser } =
    useContext(StoreContext);
  const [currState, setCurrState] = useState("Sign Up");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onchangeHandler = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if (currState === "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }

    const response = await axios.post(newUrl, {
      name: data.name,
      email: data.email,
      password: data.password,
    });

    if (response.data.success) {
      setCurrentUser(response.data.info);
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowLogin(false);
      toast.success(`Eh Salut ${response.data.info[1]}`);
    } else {
      if (currState === "Login") {
        toast.error("Identifiants incorrects");
      } else {
        toast.error(response.data.message);
      }

      // alert(response.data.message);
    }
  };

  return (
    <div className="login-popup">
      <form className="login-container" onSubmit={onLogin}>
        <div className="login-title">
          <h2>{currState}</h2>
          <span className="close" onClick={() => setShowLogin(false)}>
            <RxCross2 className="close-icon" />
          </span>
        </div>
        <div className="login-inputs">
          {currState == "Login" ? (
            <></>
          ) : (
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              value={data.name}
              onChange={onchangeHandler}
            />
          )}
          <input
            type="email"
            name="email"
            required
            value={data.email}
            placeholder="Your email"
            onChange={onchangeHandler}
          />
          <input
            type="password"
            name="password"
            required
            value={data.password}
            placeholder="Password"
            onChange={onchangeHandler}
          />
        </div>
        <button type="submit">
          {currState == "Sign Up" ? "Create Account" : "Login"}
        </button>
        <div className="login-condition">
          <input type="checkbox" required />
          <p>By continuing I agree to the terms of use & privacy policy</p>
        </div>
        {currState == "Login" ? (
          <p style={{ textAlign: "center" }}>
            Create a new account?{" "}
            <span
              onClick={() => setCurrState("Sign Up")}
              style={{ fontWeight: 700, cursor: "pointer", color: "green" }}
            >
              Click here
            </span>
          </p>
        ) : (
          <p style={{ textAlign: "center" }}>
            Already have an account?{" "}
            <span
              onClick={() => setCurrState("Login")}
              style={{ fontWeight: 700, cursor: "pointer", color: "green" }}
            >
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
