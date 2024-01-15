import { Autocomplete, Grid, Skeleton, TextField } from "@mui/material";
import useAxios from "../hooks/useAxios";

const SelectCountry = ({ valueInput, setValueInput, label }) => {
 
  const [data, loading, error] = useAxios("https://restcountries.com/v3.1/all");

  if (loading) {
    return (
      <Grid item xs={12} md={3}>
        <Skeleton variant="rounded" height={60} />
      </Grid>
    );
  }
  if (error) {
    return "something went wrong!";
  }

  const dataFilter = data.filter((item) => "currencies" in item); // Filter data to include only items with the "currencies" property
  
  // Extracting flag, currency key, and name
  const dataCountries = dataFilter.map((item) => {
    const currencyKey = Object.keys(item.currencies)[0]; // Extracting the first currencies key using Object.keys()
    return `${item.flag} ${currencyKey} - ${item.name.common}`; //a string rep for each country
  });

  return (
    <Grid item xs={12} md={3}>
      <Autocomplete
        value={valueInput}
        onChange={(e, newValueInput) => {
          setValueInput(newValueInput);
        }}
        options={dataCountries}
        renderInput={(params) => <TextField {...params} label={label} />}
        // value="option1"
        // options={["option1", "option2"]}
      />
    </Grid>
  );
};

export default SelectCountry;
