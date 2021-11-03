import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';
import Product from '../../components/Product/Product';
import { loadProducts } from '../../store/actions/product-actions';


export default function SearchScreen() {
  const { name = 'all' } = useParams();
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.allProducts);
  const { isLoading, error, data } = productList;
  useEffect(() => {
    dispatch(loadProducts({ name: name !== 'all' ? name : '' }));
  }, [dispatch, name]);
  return (
    <div>
      <div className="row center">
        {isLoading ? (
          <Loader></Loader>
        ) : error ? (
          <ErrorMessage variant="danger">{error}</ErrorMessage>
        ) : (
          <div className="search-results">{data.length} Results</div>
        )}
      </div>
      <div className="search-items">
        <div>
          <h3>Department</h3>
          <ul>
            <li>Category 1</li>
          </ul>
        </div>
        <div>
          {isLoading ? (
            <Loader></Loader>
          ) : error ? (
            <ErrorMessage variant="danger">{error}</ErrorMessage>
          ) : (
            <>
              {data.length === 0 && (
                <ErrorMessage variant="danger">No Product Found</ErrorMessage>
              )}
              <div className="row center">
                {data.map((product) => (
                  <Product key={product._id} product={product}></Product>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
