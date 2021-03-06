import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import BgImg from "../images/bg.jpg";
import WOW from "wowjs";
import { Formik } from "formik";
import { Loader } from "../resusableComponents";
import { register } from "../api";
import Swal from "sweetalert2";

export default function Register() {
  const classes = useStyles();

  React.useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);

  const loginToAccount = () => {
    window.location.href = "/";
  };
  return (
    <div className={classes.body}>
      <Container maxWidth={false}>
        <div className={classes.paper + " form wow flip"}>
          <h1>Sign Up</h1>
          <Formik
            initialValues={{ email: "", password: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.name) {
                errors.name = "Required";
              }
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
              if (values.password.length < 6) {
                errors.password = "Password should be minimum 6 characters";
              }
              if (!values.cnf_password) {
                errors.cnf_password = "Required";
              }
              if (values.cnf_password !== values.password) {
                errors.cnf_password =
                  "Password and confirm password must be same";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              register(values).then((data) => {
                if (data?.success) {
                  Swal.fire(data?.message);
                  window.location.href = "/";
                } else {
                  Swal.fire(data?.message || "registration failed");
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
                    placeholder="Name"
                    name="name"
                    className="form__input"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <div className={classes.errors}>
                    {errors.name && touched.name && errors.name}
                  </div>
                </div>
                <div className="form__input--container">
                  <input
                    type="text"
                    placeholder="Email"
                    name="email"
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
                    placeholder="Password"
                    name="password"
                    className="form__input"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <div className={classes.errors}>
                    {errors.password && touched.password && errors.password}
                  </div>
                </div>
                <div className="form__input--container">
                  <input
                    type="password"
                    name="cnf_password"
                    placeholder="Confirm Password"
                    className="form__input"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <div className={classes.errors}>
                    {errors.cnf_password &&
                      touched.cnf_password &&
                      errors.cnf_password}
                  </div>
                </div>
                <button onClick={handleSubmit} className="form__signin-button">
                  SIGN UP
                </button>
              </div>
            )}
          </Formik>
          <div>Already have an account?</div>
          <button className="form__signin-button" onClick={loginToAccount}>
            Login
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
  errors: {
    marginTop: "5px",
    color: "#f2876a",
  },
}));
