import React, { useEffect, useState } from "react";
import Product from "./Product";
import Filter from "./Filter";
// import { ProductData } from "@/data";
import axios from "axios";
const Prodcuts = () => {
  const [ProductData, setProductData] = useState([]);
  useEffect(() => {
    // .get("http://localhost:2000/Produsts")
    axios
      .get("/api/products")
      .then((res) => {
        console.log(res.data);
        setProductData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="">
      {/* All Products */}
      <div className="flex ">
        <div className="w-[30%] ">
          <Filter />
        </div>

        <div className="w-full p-4 rounded-lg m-2 flex flex-wrap justify-center ">
          {ProductData &&
            ProductData.map((item) => <Product item={item} key={item.id} />)}
        </div>
      </div>
    </div>
  );
};

export default Prodcuts;
