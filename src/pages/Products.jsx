import React, { useEffect, useState } from "react";
import useProducts from "../hooks/useProducts";
import Product from "./Product";

const Products = () => {
  const [products] = useProducts();

  const [searchText, setSearchText] = useState("");
  const [searchReasult, setSearchResult] = useState([]);
  console.log(searchText);

  useEffect(() => {
    let result = [];
    for (const element of products) {
      const matchedItem = element.name
        .toLowerCase()
        .includes(searchText.toLowerCase());
      if (matchedItem) {
        result.push(element);
      }
    }
    setSearchResult(result);
  }, [products, searchText]);

  return (
    <div className="max-w-screen-2xl mx-auto px-5 min-h-screen">
      <div className="text-center my-10">
        <input
          onKeyUp={(e) => setSearchText(e.target.value)}
          type="text"
          placeholder="Search Product"
          className="border border-bgColor w-11/12 lg:w-3/6 py-3 px-4 rounded focus:outline-cyan-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-24  px-5 lg:px-0">
        {searchReasult?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>

      <div>
        {searchReasult.length === 0 && (
          <div>
            <p className="text-center text-4xl text-red-500">
              Search Result Not Found!!!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
