import { Grid, InputAdornment, TextField } from "@mui/material";
import { useContext } from "react";
import { CurrencyContext } from "./context/CurrencyContext";

const InputAmount = () => {
    const {amount, setAmount} = useContext(CurrencyContext)
 


  return (
    //md takes up the full width on screen
    <Grid item xs={12} md>
      <TextField
        label="Amount"
        value={amount}
        onChange= {e => setAmount(e.target.value)}
         fullWidth //sets this to true
        InputProps={{
          type: "number",
          //startAdornment to add a sign or figure
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
      />
    </Grid>
  );
};

export default InputAmount;
