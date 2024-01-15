// import React from 'react'
import { Container, Grid, Typography } from "@mui/material";
import InputAmount from "./InputAmount";
import SelectCountry from "./SelectCountry";
import SwitchCurrency from "./SwitchCurrency";
import { useState } from "react";

const CurrCoverter = () => {
  //setting the value of form and to whats being converted
  const [fromCurrency, setFromCurrency] = useState("");
  console.log(fromCurrency);
  const [toCurrency, setToCurrency] = useState("");
  console.log(toCurrency);



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
        <SelectCountry valueInput={fromCurrency} setValueInput={setFromCurrency} label="From" />

        <SwitchCurrency />

        <SelectCountry valueInput={toCurrency} setValueInput={setToCurrency} label="To" />
      </Grid>
    </Container>
  );
};

export default CurrCoverter;
