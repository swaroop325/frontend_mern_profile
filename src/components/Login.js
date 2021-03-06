import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import BgImg from "../images/bg.jpg";
import WOW from "wowjs";
import { Formik } from "formik";
import { Loader } from "../resusableComponents";
import { login } from "../api";
import Swal from "sweetalert2";

export default function Login() {
  const classes = useStyles();

  React.useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);

  const registerAccount = () => {
    window.location.href = "/register";
  };

  return (
    <div className={classes.body}>
      <Container maxWidth={false}>
        <div className={classes.paper + " form wow flip"}>
          <h1>Sign In</h1>
          <Formik
            initialValues={{ email: "", password: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              if (!values.password) {
                errors.password = "Required";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              login(values).then((data) => {
                if (data?.token) {
                  Swal.fire("Logged in successfully");
                  localStorage.setItem(
                    "user_detail",
                    JSON.stringify(data?.user)
                  );
                  localStorage.setItem("token", JSON.stringify(data?.token));
                  window.location.href = "/profile";
                } else {
                  Swal.fire(data?.message || "login failed !! try again");
                }
                setSubmitting(false);
              });
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <div>
                <Loader disabled={!isSubmitting}></Loader>
                <div className="form__input--container">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="form__input"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <div className={classes.errors}>
                    {errors.email && touched.email && errors.email}
                  </div>
                </div>
                <div className="form__input--container">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form__input"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <div className={classes.errors}>
                    {errors.password && touched.password && errors.password}
                  </div>
                </div>
                <button onClick={handleSubmit} className="form__signin-button">
                  Login
                </button>
              </div>
            )}
          </Formik>
          <div>Don't have an account?</div>
          <button onClick={registerAccount} className="form__signin-button">
            Register
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
    overflow: "auto",
  },
  paper: {
    float: "left",
    width: "40vw",
    marginTop: "10vh",
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
    marginTop: "40px",
  },
  loginText: {
    fontSize: "2rem",
  },
  errors: {
    marginTop: "5px",
    color: "red",
  },
}));
