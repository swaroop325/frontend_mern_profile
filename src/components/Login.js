import React from "react";
import {
  Box,
  Container,
  makeStyles,
  Paper,
  InputLabel,
  Input,
  FormControl,
} from "@material-ui/core";
import BgImg from "../images/bg.jpg";
import WOW from "wowjs";
import { Link } from "react-router-dom";

export default function Login() {
  const classes = useStyles();

  React.useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);

  const logIn = () => {
    window.location.href = "/profile";
  };

  return (
    <div className={classes.body}>
      <Container maxWidth={false}>
        <div className={classes.paper + " form wow flip"}>
          <h1>Sign In</h1>
          <div className="form__input--container">
            <input type="text" placeholder="Email" className="form__input" />
          </div>
          <div className="form__input--container">
            <input
              type="password"
              placeholder="Password"
              className="form__input"
            />
          </div>
          <button onClick={logIn} className="form__signin-button">
            Login
          </button>
          <div>Don't have an account?</div>
          <button className="form__signin-button">
            <Link to="/register" style={{ textDecoration: "none" }}>
              Register
            </Link>
          </button>
        </div>
      </Container>
    </div>
  );
}
const useStyles = makeStyles(() => ({
  body: {
    height: "100vh",
    background: `url(${BgImg}) no-repeat`,
    backgroundSize: "cover",
  },
  paper: {
    float: "left",
    width: "40vw",
    marginTop: "10vh",
    height: "70vh",
    borderRadius: "5%",
    textAlign: "center",
    "@media (max-width:640px)": {
      width: "90vw",
    },
    "@media (min-device-width: 768px) and (max-device-width: 800px)": {
      width: "90vw",
    },
  },
  loginHeader: {
    marginTop: "40px",
  },
  loginText: {
    fontSize: "2rem",
  },
}));
