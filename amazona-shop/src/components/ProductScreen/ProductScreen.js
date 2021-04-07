import React from 'react';
import { Link, useParams } from 'react-router-dom';
import data from '../../data';
import Rating from '../Rating/Rating';


export default function ProductScreen() {
  const {id} = useParams()
  const product = data.products.find(p => p._id === id);
  if (!product) {
    return <div> Product Not Found</div>;
  }
  return (
    <div>
      <Link to="/">Back to Products</Link>
      <div>
      <span className="location">Home &#62; Product</span>
      </div>
      <div className="row top">
        <div className="col-2">
          <img className="large" src={product.image} alt={product.name}></img>
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
                      <span className="error">Unavailable</span>
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
  );
}
