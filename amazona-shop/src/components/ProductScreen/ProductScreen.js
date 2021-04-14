import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addToCartAction } from "../../store/actions/cart-actions";
import { productDetailsRequest } from "../../store/actions/product-actions";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import Rating from "../Rating/Rating";

function ProductScreen({ history }) {
  const [qty, setQty] = useState(1)
  const dispatch = useDispatch();
  const productID = useParams().id;

  const { isLoading, product, error } = useSelector(
    (state) => state.productDetails
  );

  useEffect(() => {
    dispatch(productDetailsRequest(productID));
  }, [dispatch, productID]);

  const addToCartHandler = () => {
    dispatch(addToCartAction(productID, qty))
    history.push(`/cart/${productID}?qty=${qty}`)

  }

  return (
    <main>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <ErrorMessage variant="danger" loadingError={error} />
      ) : (
        <div>
          <Link to="/">Back to Products</Link>
          <div>
            <span className="location">Home &#62; Product</span>
          </div>
          <div className="row top">
            <div className="col-2">
              <img
                className="large"
                src={product.image}
                alt={product.name}
              ></img>
            </div>
            <div className="col-1">
              <ul className="card-info">
                <li>
                  <h1>{product.name}</h1>
                </li>
                <li>
                  <Rating
                    rating={product.rating}
                    numReviews={product.numReviews}
                  />
                </li>
                <li>
                  {" "}
                  Description:<p>{product.description}</p>
                </li>
              </ul>
              <div className="card card-body">
                <ul>
                  <li>
                    <div className="row">
                      <div>Price</div>
                      <div className="price">${product.price}</div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div>Status</div>
                      <div>
                        {product.countInStock > 0 ? (
                          <span className="success">In Stock</span>
                        ) : (
                          <span className="danger">Unavailable</span>
                        )}
                      </div>
                    </div>
                  </li>
                  {product.countInStock > 0 && (
                    <>
                      <div className="cartItem__qty">
                        <label htmlFor="qty">Qty:</label>
                        <input className="cartItem__input"
                          type="number"
                          id="qty"
                          min={1}
                          max={+product.countInStock}
                          name="qty"
                          value={qty}
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
    </main>
  );
}
export default ProductScreen;
