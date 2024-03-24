import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductSearchBar from "../components/ProductSearchBar";
import ProductBar from "../components/ProductBar";
import InfoBar from "../components/InfoBar";
import EditFormInput from "../components/EditFormInput";

function HomePage() {
  const [data, setData] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await axios
        .get(
          "https://65fec09db2a18489b38683d6.mockapi.io/api/products/products"
        )
        .then((response) => {
          console.log(response.data + "data is coming");
          setData(JSON.stringify(response.data));
        });
    }

    fetchData();
  }, []);

  return (
    <div className="box-border p-[30px] gap-5">
      <h1 className="font-montserrat text-[26px] font-[500]">Products</h1>
      <ProductSearchBar data={data} />
      <InfoBar />
      <div>
        {data && JSON.parse(data).map((data) => {
          return (
            <ProductBar
              id={data.id}
              name={data.name}
              image={data.image}
              price={data.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
