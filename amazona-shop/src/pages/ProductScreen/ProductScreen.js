import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addToCartAction } from "../../store/actions/cart-actions";
import { loadProductDetails } from "../../store/actions/product-actions";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";
import Rating from "../../components/Rating/Rating";

function ProductScreen({ history }) {
  const [qty, setQty] = useState(1)
  const dispatch = useDispatch()
  const  {id: productID} = useParams() //todo id === props.match.params.id -> получаем id из АДРЕСНОЙ СТРОКИ!
  console.log(productID); // todo {id: productID} иожно и так, чтобы испольщовать другое название для id.

  const { isLoading, data, error } = useSelector(state => state.product);
  //todo подключаемся к Стору

  useEffect(() => {
    dispatch(loadProductDetails(productID));
  }, [dispatch, productID]); //todo запускаем запрос на отдельный продукт по productID из АДРЕСНОЙ СТРОКИ!

  const addToCartHandler = () => {
    dispatch(addToCartAction(productID, qty)) //todo добавляем в корзину по аргументам productID, qty
    history.push(`/cart/${productID}?qty=${qty}`) //todo переходим на Страницу корзины.  когда по onClick нужен переход.

  }

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <ErrorMessage variant="danger">{error}</ErrorMessage>
      ) : (
        <div>
          <Link to="/">Back to Products</Link>
          <div>
            <span className="location">Home &#62; Product</span>
          </div>
          <div className="row top">
            <div className="col-1">
              <img
                className="large"
                src={data.image}
                alt={data.name}
              ></img>
            </div>
            <div className="col-1">
              <ul className="card-info">
                <li>
                  <h1>{data.name}</h1>
                </li>
                <li>
                  <Rating
                    rating={data.rating}
                    numReviews={data.numReviews}
                  />
                </li>
                <li>
                  Description:<p>{data.description}</p>
                </li>
              </ul>
              <div className="card card-body">
                <ul>
                  <li>
                    <div className="row">
                      <div>Price</div>
                      <div className="price">${data.price}</div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div>Status</div>
                      <div>
                        {data.countInStock > 0 ? (
                          <span className="success">In Stock</span>
                        ) : (
                          <span className="danger">Unavailable</span>
                        )}
                      </div>
                    </div>
                  </li>
                  {data.countInStock > 0 && (
                    <>
                      <div className="cartItem__qty">
                        <label htmlFor="qty">Qty:</label> {/*label must have htmlFor */}
                        <input className="cartItem__input"
                          type="number"
                          id="qty"
                          min={1}
                          max={data.countInStock}
                          name="qty"
                          value={qty} //todo покзывает значение переменной qty */
                          onChange={e => setQty(e.target.value)}
                        />
                      </div>
                      <li>
                        <button className="primary block" onClick={addToCartHandler}>Add to Cart</button>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default ProductScreen;
