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

export default function Login() {
  const classes = useStyles();

  React.useEffect(()=>{
    const wow = new WOW.WOW();
    wow.init();
  },[])

  const handleChange = () => {};
  return (
    <div className={classes.body}>
      <Container maxWidth={false}>
        <Paper elevation={3} className={classes.paper + " wow slideInLeft"}>
          <Box component="span" className={classes.loginHeader}>
            <span className={classes.loginText}>Login</span>
          </Box>
          <Box>
            <FormControl>
              <InputLabel htmlFor="component-simple">Name</InputLabel>
              <Input id="component-simple" value={""} onChange={handleChange} />
            </FormControl>
          </Box>
        </Paper>
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
  },
  loginHeader:{
    marginTop: '40px'
  },
  loginText: {
    fontSize: "2rem",
  },
}));
