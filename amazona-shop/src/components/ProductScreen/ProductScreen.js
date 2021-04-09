import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { productDetails } from "../../store/actions/product-actions";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import Rating from "../Rating/Rating";

 function ProductScreen() {
  const dispatch = useDispatch();
  const productID = useParams().id
  const { isLoading, product, error } = useSelector(state => state.productDetails)

  useEffect(() => {
    dispatch(productDetails(productID))
  }, [dispatch, productID]);

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
                  Description:
                  <p>{product.description}</p>
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
                  <li>
                    <button className="primary block">Add to Cart</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
export default ProductScreen
