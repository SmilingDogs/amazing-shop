import React, { useEffect } from "react";
// import data from "../../data";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { useSelector, useDispatch } from "react-redux";
import { loadProducts } from "../../store/actions/product-actions";
import SimpleSlider from "../../components/SimpleSlider/SimpleSlider";
import Product from "../../components/Product/Product";


function HomeScreen() {
  const dispatch = useDispatch(); //todo получили функцию dispatch. Подключили Store. 2 способом -  через Хуки
  const { isLoading, data, error } = useSelector((state) => state.allProducts); //todo - обратились к Store и получили все нужные переменные из state.allProducts

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);
  //todo useEffect вызывает action loadProducts (карточек прожуктов)
  return (
    <div>
    <SimpleSlider data={data} />
      {isLoading ? (
        <Loader />
      ) : error ? (
        <ErrorMessage variant="danger">{error}</ErrorMessage>
      ) : (
        <div>
          <span className="location">Home</span>
          <div className="row center">
            {data.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default HomeScreen;
