import { Autocomplete, Grid, TextField } from "@mui/material";
import useAxios from "../hooks/useAxios";

const SelectCountry = () => {
    //from the hooks
  const [data] = useAxios("https://restcountries.com/v3.1/all"); //console.log(data);


  //get only the currencies in the api
  const dataFilter = data.filter((item) => "currencies" in item); //console.log(dataFilter);


  //1- get country & it flag 
  //2- get the country currency key (EUR,NG,AUD, etc) using Object.keys
  const dataCountries = data.map((item) => {
    return `${item.flag} ${object.key.cu }`;
  }); //console.log(dataCountries);






  return (
    //xs = breakpoint (12)
    <Grid item xs={12} md={3}>
      <Autocomplete
        value="option1"
        options={["option1", "option2"]}
        renderInput={(params) => <TextField {...params} label="form" />}
      />
    </Grid>
  );
};

export default SelectCountry;
