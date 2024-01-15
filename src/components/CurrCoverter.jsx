// import React from 'react'
import { Container, Grid, Typography } from "@mui/material";
import InputAmount from "./InputAmount";
import SelectCountry from "./SelectCountry";
import SwitchCurrency from "./SwitchCurrency";
import { useContext, useEffect, useState } from "react";
import { CurrencyContext } from "./context/CurrencyContext";
import axios from "axios";

const CurrCoverter = () => {
  //without context api->
  // const [fromCurrency, setFromCurrency] = useState("");
  // const [toCurrency, setToCurrency] = useState("");

  //using the context api
  const {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    amount, //value inside the textfield
  } = useContext(CurrencyContext);

  const [resultAmount, setResultAmount] = useState(0);
  console.log(resultAmount);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (amount) {
          const response = await axios.get(
            "https://api.freecurrencyapi.com/v1/latest",
            {
              headers: {
                'apiKey': "fca_live_V3mgxWcGmduzBNhiYtNj8EgyJo6PfR51pf3OJXuB",

              },
              params: {
                // apiKey: import.meta.env.VITE_API_KEY,
                // apiKey: "fca_live_V3mgxWcGmduzBNhiYtNj8EgyJo6PfR51pf3OJXuB",
                base_currency: "USD",
                currencies: "IDR",
              },
            }
          );
          setResultAmount(response.data);
        }
      } catch (error) {
        console.error("Error fetching api", error);
      }
    };

    fetchData();
  }, [amount]);

  const boxStyles = {
    background: "#fdfdfd",
    marginTop: "10rem",
    textAlign: "center",
    color: "#222",
    minHeight: "20rem",
    borderRadius: 2,
    padding: "4rem 2rem",
    boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
    postion: "relative",
  };

  return (
    <Container maxWidth="md" sx={boxStyles}>
      <Typography variant="h5" sx={{ marginBottom: "2rem" }}>
        Stay ahead with accurate conversions
      </Typography>

      {/* add grid containers */}
      <Grid container spacing={2}>
        <InputAmount />
        <SelectCountry
          valueInput={fromCurrency}
          setValueInput={setFromCurrency}
          label="From"
        />

        <SwitchCurrency />

        <SelectCountry
          valueInput={toCurrency}
          setValueInput={setToCurrency}
          label="To"
        />
      </Grid>
    </Container>
  );
};

export default CurrCoverter;

//then catch method
//  if (amount) {
//       axios("https://api.freecurrencyapi.com/v1/latest", {
//         params: {
//           apikey: " fca_live_V3mgxWcGmduzBNhiYtNj8EgyJo6PfR51pf3OJXuB",
//           base_currency: "USD",
//           currencies: "IDR",
//         },
//       })
//         .then((resp) => setResultAmount(resp.data))
//         .catch((error) => console.log(error));
//     }
