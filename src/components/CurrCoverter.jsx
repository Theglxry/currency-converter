// import React from 'react'
import { Container, Grid, Typography } from "@mui/material";
import InputAmount from "./InputAmount";
import SelectCountry from "./SelectCountry";
import SwitchCurrency from "./SwitchCurrency";

const CurrCoverter = () => {
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
      <Typography variant="h5"
       sx={{ marginBottom: "2rem" }}
       >
        Stay ahead with accurate conversions
      </Typography>

      {/* add grid containers */}
      <Grid container spacing={2}>
        <InputAmount />
        <SelectCountry />
        <SwitchCurrency />
        <SelectCountry />
      </Grid>
    </Container>
  );
};

export default CurrCoverter;
