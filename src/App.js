import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import Header from "./components/Header/Header";
import SrcDes from "./components/SrcDes/SrcDes";
import Flights from "./components/Flights/Flights";
import SearchFlightForm from "./components/SearchFlightForm/SearchFlightForm";
import PriceRange from "./components/PriceRange/PriceRange";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "2rem auto",
  },
  scrollList: {
    maxHeight: "calc(100vh - 210px)",
    overflow: "auto",
    padding: "0.8rem",
  },
}));

const App = (props) => {
  const classes = useStyles();
  const [flightList] = useState([
    {
      flight_id: "AI-201",
      source: "Delhi",
      source_code: "DEL",
      destination: "Pune",
      destination_code: "PNQ",
      fare: "Rs 9500",
      departs_at: "10:00 AM",
      arrives_at: "12:00 PM",
    },
    {
      flight_id: "AI-207",
      source: "Kolkata",
      source_code: "Kol",
      destination: "Mumbai",
      destination_code: "Mum",
      fare: "Rs 6500",
      departs_at: "10:00 PM",
      arrives_at: "01:00 AM",
    },
    {
      flight_id: "JA-711",
      source: "Delhi",
      source_code: "DEL",
      destination: "Pune",
      destination_code: "PNQ",
      fare: "Rs 11500",
      departs_at: "06:30 AM",
      arrives_at: "09:00 AM",
    },
    {
      flight_id: "JA-517",
      source: "Kolkata",
      source_code: "Kol",
      destination: "Mumbai",
      destination_code: "Mum",
      fare: "Rs 6500",
      departs_at: "10:00 PM",
      arrives_at: "12:00 AM",
    },
    {
      flight_id: "AI-333",
      source: "Pune",
      source_code: "PNQ",
      destination: "Delhi",
      destination_code: "DEL",
      fare: "Rs 9500",
      departs_at: "10:00 PM",
      arrives_at: "12:00 AM",
    },
    {
      flight_id: "JA-999",
      source: "Pune",
      source_code: "PNQ",
      destination: "Delhi",
      destination_code: "DEL",
      fare: "Rs 11500",
      departs_at: "10:00 PM",
      arrives_at: "12:00 AM",
    },
    {
      flight_id: "AI-349",
      source: "Mumbai",
      source_code: "MUM",
      destination: "Delhi",
      destination_code: "DEL",
      fare: "Rs 7500",
      departs_at: "10:00 PM",
      arrives_at: "12:00 AM",
    },
    {
      flight_id: "JA-909",
      source: "Mumbai",
      source_code: "MUM",
      destination: "Kolkata",
      destination_code: "KOL",
      fare: "Rs 12000",
      departs_at: "10:00 PM",
      arrives_at: "12:00 AM",
    },
    {
      flight_id: "DA-789",
      source: "Mumbai",
      source_code: "MUM",
      destination: "Kolkata",
      destination_code: "KOL",
      fare: "Rs 12000",
      departs_at: "10:00 PM",
      arrives_at: "12:00 AM",
    },
    {
      flight_id: "DA-132",
      source: "Ahmedabad",
      source_code: "AHD",
      destination: "Kolkata",
      destination_code: "KOL",
      fare: "Rs 15000",
      departs_at: "11:00 PM",
      arrives_at: "1:00 AM",
    },
    {
      flight_id: "DA-131",
      source: "Kolkata",
      source_code: "KOL",
      destination: "Ahmedabad",
      destination_code: "AHD",
      fare: "Rs 12000",
      departs_at: "07:00 PM",
      arrives_at: "09:00 AM",
    },
    {
      flight_id: "DA-165",
      source: "Mumbai",
      source_code: "MUM",
      destination: "Ahmedabad",
      destination_code: "AHD",
      fare: "Rs 12000",
      departs_at: "10:30 PM",
      arrives_at: "11:30 AM",
    },
    {
      flight_id: "DA-790",
      source: "Ahmedabad",
      source_code: "Ahmedabad",
      destination: "Mumbai",
      destination_code: "MUM",
      fare: "Rs 12000",
      departs_at: "10:00 PM",
      arrives_at: "12:00 AM",
    },
    {
      flight_id: "DA-791",
      source: "Ahmedabad",
      source_code: "AHD",
      destination: "Chandigarh",
      destination_code: "CHD",
      fare: "Rs 12000",
      departs_at: "05:00 PM",
      arrives_at: "07:30 AM",
    },
    {
      flight_id: "DA-792",
      source: "Chandigarh",
      source_code: "CHD",
      destination: "Ahmedabad",
      destination_code: "AHD",
      fare: "Rs 12000",
      departs_at: "11:00 AM",
      arrives_at: "01:30 PM",
    },
    {
      flight_id: "DA-793",
      source: "Ahmedabad",
      source_code: "AHD",
      destination: "Chennai",
      destination_code: "CHN",
      fare: "Rs 12000",
      departs_at: "9:00 PM",
      arrives_at: "11:00 PM",
    },
    {
      flight_id: "DA-794",
      source: "Chennai",
      source_code: "CHN",
      destination: "Ahmedabad",
      destination_code: "AHD",
      fare: "Rs 12000",
      departs_at: "03:00 PM",
      arrives_at: "05:30 PM",
    },
    {
      flight_id: "DA-795",
      source: "Ahmedabad",
      source_code: "AHD",
      destination: "Bangalore",
      destination_code: "BLR",
      fare: "Rs 12000",
      departs_at: "9:00 PM",
      arrives_at: "11:00 PM",
    },
    {
      flight_id: "DA-796",
      source: "Bangalore",
      source_code: "BLR",
      destination: "Ahmedabad",
      destination_code: "AHD",
      fare: "Rs 12000",
      departs_at: "9:00 PM",
      arrives_at: "11:00 PM",
    },
    {
      flight_id: "DA-797",
      source: "Ahmedabad",
      source_code: "AHD",
      destination: "Delhi",
      destination_code: "DEL",
      fare: "Rs 12000",
      departs_at: "9:00 PM",
      arrives_at: "11:00 PM",
    },
    {
      flight_id: "DA-798",
      source: "Delhi",
      source_code: "DEL",
      destination: "Ahmedabad",
      destination_code: "AHD",
      fare: "Rs 12000",
      departs_at: "9:00 PM",
      arrives_at: "11:00 PM",
    },
    {
      flight_id: "DA-799",
      source: "Hyderabad",
      source_code: "HYD",
      destination: "Ahmedabad",
      destination_code: "AHD",
      fare: "Rs 12000",
      departs_at: "9:00 PM",
      arrives_at: "11:00 PM",
    },
    {
      flight_id: "DA-800",
      source: "Ahmedabad",
      source_code: "AHD",
      destination: "Hyderabad",
      destination_code: "HYD",
      fare: "Rs 12000",
      departs_at: "9:00 PM",
      arrives_at: "11:00 PM",
    },
    {
      flight_id: "DA-801",
      source: "Ahmedabad",
      source_code: "AHD",
      destination: "Kolkata",
      destination_code: "KOL",
      fare: "Rs 12000",
      departs_at: "9:00 PM",
      arrives_at: "11:00 PM",
    },
    {
      flight_id: "DA-802",
      source: "Kolkata",
      source_code: "KOL",
      destination: "Ahmedabad",
      destination_code: "AHD",
      fare: "Rs 12000",
      departs_at: "9:00 PM",
      arrives_at: "11:00 PM",
    },
    {
      flight_id: "DA-803",
      source: "Ahmedabad",
      source_code: "AHD",
      destination: "Mumbai",
      destination_code: "MUM",
      fare: "Rs 12000",
      departs_at: "9:00 PM",
      arrives_at: "11:00 PM",
    },
    {
      flight_id: "DA-804",
      source: "Mumbai",
      source_code: "MUM",
      destination: "Ahmedabad",
      destination_code: "AHD",
      fare: "Rs 12000",
      departs_at: "9:00 PM",
      arrives_at: "11:00 PM",
    },
    {
      flight_id: "DA-805",
      source: "Ahmedabad",
      source_code: "AHD",
      destination: "Pune",
      destination_code: "PUN",
      fare: "Rs 12000",
      departs_at: "9:00 PM",
      arrives_at: "11:00 PM",
    },
    {
      flight_id: "DA-806",
      source: "Bangalore",
      source_code: "BLR",
      destination: "Chennai",
      destination_code: "CHN",
      fare: "Rs 12000",
      departs_at: "10:30 PM",
      arrives_at: "11:00 PM",
    },
    {
      flight_id: "DA-807",
      source: "Chennai",
      source_code: "CHN",
      destination: "Bangalore",
      destination_code: "BLR",
      fare: "Rs 12000",
      departs_at: "9:00 PM",
      arrives_at: "11:00 PM",
    },
    {
      flight_id: "DA-808",
      source: "Bangalore",
      source_code: "BLR",
      destination: "Chandigarh",
      destination_code: "CHD",
      fare: "Rs 12000",
      departs_at: "10:30 PM",
      arrives_at: "11:00 PM",
    },
    {
      flight_id: "DA-809",
      source: "Chandigarh",
      source_code: "CHD",
      destination: "Bangalore",
      destination_code: "BLR",
      fare: "Rs 12000",
      departs_at: "9:00 PM",
      arrives_at: "11:00 PM",
    },
    {
      flight_id: "DA-810",
      source: "Bangalore",
      source_code: "BLR",
      destination: "Delhi",
      destination_code: "DEL",
      fare: "Rs 12000",
      departs_at: "10:30 PM",
      arrives_at: "11:00 PM",
    },
    {
      flight_id: "DA-811",
      source: "Delhi",
      source_code: "DEL",
      destination: "Bangalore",
      destination_code: "BLR",
      fare: "Rs 12000",
      departs_at: "9:00 PM",
      arrives_at: "11:00 PM",
    },
    {
      flight_id: "DA-812",
      source: "Bangalore",
      source_code: "BLR",
      destination: "Hyderabad",
      destination_code: "HYD",
      fare: "Rs 12000",
      departs_at: "10:30 PM",
      arrives_at: "11:00 PM",
    },
    {
      flight_id: "DA-813",
      source: "Hyderabad",
      source_code: "HYD",
      destination: "Bangalore",
      destination_code: "BLR",
      fare: "Rs 12000",
      departs_at: "9:00 PM",
      arrives_at: "11:00 PM",
    },
    {
      flight_id: "DA-814",
      source: "Bangalore",
      source_code: "BLR",
      destination: "Kolkata",
      destination_code: "KOL",
      fare: "Rs 12000",
      departs_at: "10:30 PM",
      arrives_at: "11:00 PM",
    },
    {
      flight_id: "DA-815",
      source: "Kolkata",
      source_code: "KOL",
      destination: "Bangalore",
      destination_code: "BLR",
      fare: "Rs 12000",
      departs_at: "9:00 PM",
      arrives_at: "11:00 PM",
    },
    {
      flight_id: "DA-816",
      source: "Bangalore",
      source_code: "BLR",
      destination: "Mumbai",
      destination_code: "MUM",
      fare: "Rs 12000",
      departs_at: "10:30 PM",
      arrives_at: "11:00 PM",
    },
    {
      flight_id: "DA-817",
      source: "Mumbai",
      source_code: "MUM",
      destination: "Bangalore",
      destination_code: "BLR",
      fare: "Rs 12000",
      departs_at: "9:00 PM",
      arrives_at: "11:00 PM",
    },
    {
      flight_id: "DA-818",
      source: "Bangalore",
      source_code: "BLR",
      destination: "Pune",
      destination_code: "PUN",
      fare: "Rs 12000",
      departs_at: "10:30 PM",
      arrives_at: "11:00 PM",
    },
    {
      flight_id: "DA-819",
      source: "Pune",
      source_code: "PUN",
      destination: "Bangalore",
      destination_code: "BLR",
      fare: "Rs 12000",
      departs_at: "9:00 PM",
      arrives_at: "11:00 PM",
    },
    {
      flight_id: "DA-820",
      source: "Pune",
      source_code: "PUN",
      destination: "Mumbai",
      destination_code: "Mum",
      fare: "Rs 12000",
      departs_at: "9:00 PM",
      arrives_at: "11:00 PM",
    },
    {
      flight_id: "DA-821",
      source: "Mumbai",
      source_code: "MUM",
      destination: "Pune",
      destination_code: "PUN",
      fare: "Rs 12000",
      departs_at: "9:00 PM",
      arrives_at: "11:00 PM",
    },
    {
      flight_id: "DA-822",
      source: "Pune",
      source_code: "PUN",
      destination: "Kolkata",
      destination_code: "KOL",
      fare: "Rs 12000",
      departs_at: "9:00 PM",
      arrives_at: "11:00 PM",
    },
    {
      flight_id: "DA-823",
      source: "Kolkata",
      source_code: "KOL",
      destination: "Pune",
      destination_code: "PUN",
      fare: "Rs 12000",
      departs_at: "9:00 PM",
      arrives_at: "11:00 PM",
    },
  ]);
  const [srcdesFilter, setsrcdesFilter] = useState({});
  const [filteredFlights, setfilteredFlights] = useState(flightList);
  const [lowerCost, setlowerCost] = useState(0);
  const [upperCost, setupperCost] = useState(15000);

  useEffect(() => {
    if (srcdesFilter.sourceCity && srcdesFilter.destinationCity) {
      const FilteredList = flightList.filter((flight) => {
        const fare = +flight.fare.split(" ")[1];
        if (
          srcdesFilter.sourceCity === flight.source &&
          srcdesFilter.destinationCity === flight.destination &&
          fare >= lowerCost &&
          fare <= upperCost
        ) {
          return flight;
        }
      });
      setfilteredFlights(FilteredList);
    }
  }, [srcdesFilter, lowerCost, upperCost]);
  const onSrcdesFilterChanged = (val) => {
    setsrcdesFilter(val);
  };
  const onPriceRangeChange = (val) => {
    setlowerCost(val[0]);
    setupperCost(val[1]);
  };
  return (
    <>
      <Header />
      <Grid
        container
        item
        spacing={3}
        className={classes.container}
        xs={12}
        sm={11}
        md={10}
      >
        <Grid item xs={12} sm={6} md={4}>
          <SearchFlightForm setsrcdesFilter={onSrcdesFilterChanged} />
          <PriceRange
            lowerCost={lowerCost}
            upperCost={upperCost}
            onPriceRangeChange={onPriceRangeChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={8}>
          {srcdesFilter.sourceCity && srcdesFilter.destinationCity && (
            <SrcDes
              src={srcdesFilter.sourceCity}
              des={srcdesFilter.destinationCity}
            />
          )}
          <Paper className={classes.scrollList}>
            <Flights filteredFlights={filteredFlights} />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default App;
