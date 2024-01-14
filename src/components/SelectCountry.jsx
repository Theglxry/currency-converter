import { Autocomplete, Grid, TextField } from "@mui/material";
import useAxios from "../hooks/useAxios";

const SelectCountry = () => {
  //from the hooks
  const [data] = useAxios("https://restcountries.com/v3.1/all"); //console.log(data);

  //get only the currencies in the api
  const dataFilter = data.filter((item) => "currencies" in item);
  console.log(dataFilter);



  //1- get country & it flag
  //2- get the country currency key(EUR,NG,AUD, etc) using Object.keys.  which is the first obj under the currencies[0]
  //3- get the country name (name.common {on the api log})
  const dataCountries = dataFilter.map((item) => {
    return `${item.flag} ${Object.keys(item.currencies)[0]} - ${
      item.name.common
    }`;
  });
  console.log(dataCountries);

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
