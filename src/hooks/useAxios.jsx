import axios from "axios";
import { useEffect, useState } from "react";

const useAxios = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // fetch data
//todo->  create a time out later
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios(url);
        setData(res.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]); //the useEffect runs everytime the url is clicked.

  return [data, error, loading];
};

export default useAxios;
