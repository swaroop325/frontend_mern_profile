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

export default function Register() {
  const classes = useStyles();

  React.useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);

  const handleChange = () => {};
  return (
    <div className={classes.body}>
      <Container maxWidth={false}>
        <div className={classes.paper + " form wow flip"}>
          <h1>Sign Up</h1>
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
          <button className="form__signin-button">SIGN UP</button>
          <button className="form__signin-button">
            <Link to="/" style={{ textDecoration: "none" }}>
              Login
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
    marginTop: "5vh",
    height: "90vh",
    borderRadius: "5%",
    textAlign: "center",
  },
  loginHeader: {
    marginTop: "20px",
  },
  loginText: {
    fontSize: "2rem",
  },
}));
