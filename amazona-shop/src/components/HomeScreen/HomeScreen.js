import React, { useEffect } from "react";
// import data from "../../data";
import ProductItem from "../ProductItem/ProductItem";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { useSelector, useDispatch } from "react-redux";
import { loadProducts } from "../../store/actions/product-actions";

function HomeScreen() {
  const dispatch = useDispatch(); //todo получили функцию dispatch. Подключили Store. 2 способом -  через Хуки
  const { isLoading, products, error } = useSelector((state) => state.productList); //todo - обратились к Store и получили все нужные переменные из state.productlist

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  return (
    <main>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <ErrorMessage variant="danger">{error}</ErrorMessage>
      ) : (
        <div>
          <span className="location">Home</span>
          <div className="row center">
            {products.map((product) => (
              <ProductItem key={product._id} product={product} />
            ))}
          </div>
        </div>
      )}
    </main>
  );
}

export default HomeScreen;
