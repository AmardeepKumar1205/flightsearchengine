import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  root: {
    padding: "0.8rem",
    marginTop: "0.4rem",
  },
  heading: {
    marginBottom: "2rem",
  },
});

const PriceRange = ({ lowerCost, upperCost, onPriceRangeChange }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState([lowerCost, upperCost]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    onPriceRangeChange(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Typography id="range-slider" className={classes.heading}>
        Refine Flight search
      </Typography>
      <Slider
        value={value}
        min={0}
        max={15000}
        step={1000}
        marks
        color="secondary"
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
      />
    </Paper>
  );
};

export default PriceRange;
