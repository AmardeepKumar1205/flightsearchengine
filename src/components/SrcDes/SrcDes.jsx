import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  srcDes: {
    padding: "0.8rem",
  },
}));

const SrcDes = ({ src, des }) => {
  const classes = useStyles();
  return (
    <Paper elevation={0}>
      <Typography variant="h6" className={classes.srcDes}>
        {src} {">"} {des}
      </Typography>
    </Paper>
  );
};

export default SrcDes;
