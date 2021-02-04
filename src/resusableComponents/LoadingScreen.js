import React from "react";
import { Backdrop, makeStyles } from "@material-ui/core";
import Loader from "react-loader-spinner";

const LoadingScreen = (props) => {
  const classes = useStyles();
  return (
    <>
      <Backdrop className={classes.backdrop} open={!props.disabled}>
        <Loader type="BallTriangle" color="#00BFFF" height={80} width={80} />
      </Backdrop>
    </>
  );
};

const useStyles = makeStyles(() => ({
  backdrop: {
    zIndex: 99999999,
    color: "#fff",
  },
}));

export default LoadingScreen;
