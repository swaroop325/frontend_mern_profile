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
import ProfileBgImg from "../images/profileBg.jpg";
import WOW from "wowjs";
import { Link } from "react-router-dom";

export default function Register() {
  const classes = useStyles();

  React.useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);

  const logout = () => {
    window.location.href = "/";
  };
  
  return (
    <div className={classes.body}>
      <Container maxWidth={false}>
        <div className={classes.paper + " form wow rubberBand"}>
          <h1>Profile</h1>
          <div className="form__input--container">
            <input type="text" placeholder="Name" className="form__input" />
          </div>
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
          <div className="form__input--container">
            <input
              type="password"
              placeholder="Confirm Password"
              className="form__input"
            />
          </div>
          <button className="form__signin-button">Edit</button>
          <button className="form__signin-button" onClick={logout}>
            Logout
          </button>
        </div>
      </Container>
    </div>
  );
}
const useStyles = makeStyles(() => ({
  body: {
    height: "100vh",
    background: `url(${ProfileBgImg}) no-repeat`,
    backgroundSize: "cover",
  },
  paper: {
    float: "left",
    width: "40vw",
    marginTop: "5vh",
    height: "90vh",
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
    marginTop: "20px",
  },
  loginText: {
    fontSize: "2rem",
  },
}));
