import { Grid, InputAdornment, TextField } from "@mui/material";



const InputAmount = ({defaultAmount, setDefaultAmount}) => {

  return (
    //md takes up the full width on screen
    <Grid item xs={12} md>
      <TextField
        label="Amount"
        value={defaultAmount}
        onChange={(e, newDefaultValue) =>{
        setDefaultAmount(newDefaultValue)
        
        }}
        // disableClearable
        
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
