import React, { useEffect } from "react";
// import data from "../../data";
import ProductItem from "../../components/ProductItem/ProductItem";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { useSelector, useDispatch } from "react-redux";
import { loadProducts } from "../../store/actions/product-actions";

function HomeScreen() {
  const dispatch = useDispatch(); //todo получили функцию dispatch. Подключили Store. 2 способом -  через Хуки
  const { isLoading, products, error } = useSelector((state) => state.productList); //todo - обратились к Store и получили все нужные переменные из state.productlist

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);
  //todo useEffect вызывает загрузку продуктовых карточек
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
