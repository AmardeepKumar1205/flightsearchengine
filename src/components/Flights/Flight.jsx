import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";

const useStyles = makeStyles((theme) => ({
  flightContainer: {
    margin: "0.5rem 0",
    padding: "0.5rem",
    display: "flex",
  },
  flightLeft: {
    flexGrow: "1",
  },
  flightRight: {
    display: "flex",
    flexDirection: "column",
  },
}));

const Flight = ({
  flight_id,
  source_code,
  destination_code,
  departs_at,
  arrives_at,
  fare,
}) => {
  const classes = useStyles();
  return (
    <Paper elevation={3} className={classes.flightContainer}>
      <div className={classes.flightLeft}>
        <Typography variant="h6">{fare}</Typography>
        <Typography variant="caption" display="block">
          {flight_id}
        </Typography>
        <Typography variant="subtitle2">
          {source_code} {">"} {destination_code}
        </Typography>
        <Typography variant="subtitle2">Depart: {departs_at}</Typography>
        <Typography variant="subtitle2">Arrive: {arrives_at}</Typography>
      </div>
      <div className={classes.flightRight}>
        <FlightTakeoffIcon
          color="primary"
          style={{ fontSize: 75, margin: "0 auto" }}
        />
        <Button variant="outlined" color="secondary">
          Book this Flight
        </Button>
      </div>
    </Paper>
  );
};

export default Flight;
