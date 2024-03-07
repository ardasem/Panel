import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function HomePage() {
  const [data, setData] = useState("");
  useEffect(() => {
    async function fetchData() {

        const options = {
          method: 'GET',
          url: 'https://burgers-hub.p.rapidapi.com/burgers',
          headers: {
            'X-RapidAPI-Key': '8630dffb26msh8d956de70adf6fap149078jsn600d7cf909e2',
            'X-RapidAPI-Host': 'burgers-hub.p.rapidapi.com'
          }
        };
        
        try {
            const response = await axios.request(options);
            console.log(response.data);
            setData(response.data)
        } catch (error) {
            console.error(error);
        }
    }

    fetchData();
  }, []);
  return <div>{data}</div>;
}

export default HomePage;
