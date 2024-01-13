import { useState } from "react"








const useAxios = () => {
 const [data, setData] = useState([]);
 const [error, setErro] = useState(null);
 const [loading, setLoading] = useState(false);

// fetch data

  return  [data,error,loading]
}

export default useAxios