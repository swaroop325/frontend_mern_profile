import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import ProfileBgImg from "../images/profileBg.jpg";
import WOW from "wowjs";

export default function Register() {
  const classes = useStyles();
  const [user, setUser] = React.useState(null);
  
  React.useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
    let userDetails = JSON.parse(localStorage.getItem("user_detail"));
    setUser(userDetails);
  }, []);

  const logout = () => {
    localStorage.removeItem("user_detail");
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div className={classes.body}>
      <Container maxWidth={false}>
        <div className={classes.paper + " form wow rubberBand"}>
          <h1>Profile</h1>
          <div className="form__input--container">
            <input
              type="text"
              placeholder="Name"
              disabled
              value={user?.name}
              className="form__input"
            />
          </div>
          <div className="form__input--container">
            <input
              type="text"
              placeholder="Email"
              disabled
              value={user?.email}
              className="form__input"
            />
          </div>

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
    overflow: "auto",
  },
  paper: {
    float: "left",
    width: "40vw",
    marginTop: "5vh",
    height: "max-content",
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
