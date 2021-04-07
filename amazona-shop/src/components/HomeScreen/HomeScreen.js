import React from "react";
import data from "../../data";
import ProductItem from "../ProductItem/ProductItem";

function HomeScreen() {
  return (
    <main>
      <span className="location">Home</span>
      <div className="row center">
        {data.products.map((product) => (
          <ProductItem key={product._id} product={product} />
        ))}
      </div>
    </main>
  );
}

export default HomeScreen;
