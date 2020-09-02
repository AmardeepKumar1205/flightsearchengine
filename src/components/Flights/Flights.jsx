import React from "react";
import Typography from "@material-ui/core/Typography";
import Flight from "./Flight";

const Flights = ({ filteredFlights }) => {
  const flightList = filteredFlights.map((flight) => (
    <Flight key={flight.flight_id} {...flight} />
  ));
  return (
    <>
      {flightList.length ? (
        flightList
      ) : (
        <Typography variant="h6" style={{ padding: "0.8rem" }}>
          No Flights found on this route.
        </Typography>
      )}
    </>
  );
};

export default Flights;
