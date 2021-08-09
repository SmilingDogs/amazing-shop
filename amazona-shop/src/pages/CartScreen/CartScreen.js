import React from "react";
import { connect } from "react-redux";
// import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { addToCartAction, removeFromCartAction } from "../../store/actions/cart-actions";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const mapStateToProps = (state) => {
  return {
    cart: state.cart.data, //todo state.<название редюсера>.<название перменной>
  };
};

function CartScreen({ dispatch, history, cart }) {
  //! dispatch, location, history есть в пропсах, если Redux подклчен с помощью connect()
  //* const productID = useParams().id;
  //* const qty = location.search ? +location.search.split("=")[1] : 1;
  //* need to check if productID exists. We need useEffect for async calling of the check
  //* useEffect(() => {
  //*   if (productID) {
  //*    dispatch(addToCartAction(productID, qty));
  //*   }
  //* }, [productID, dispatch, qty]);

  const removeFromCartHandler = (removeID) => {
    dispatch(removeFromCartAction(removeID))
  }
  const checkoutHandler = () => {
    history.push('/signin?redirect=shipping'); //todo переход на страницу http://localhost:3000/signin?redirect=shipping'
  };
  return (
    <div className="row top down">
      <div className="col-2">
        <h1>Shopping Cart</h1>
        {cart.length === 0 ? (
          <ErrorMessage>
            Cart is empty. <Link to="/">Go Shopping</Link>
          </ErrorMessage>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.product}>
                <div className="row">
                  <div>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="small"
                    ></img>
                  </div>
                  <div className="min-30">
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </div>
                  <div>
                    <select
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCartAction(item.product, +e.target.value)
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>${item.price}</div>
                  <div>
                    <button
                      type="button"
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="col-1">
        <div className="card card-body">
          <ul>
            <li>
              <h2>
                Subtotal {cart.reduce((a, i) => a + +i.qty, 0)} items : $
                {cart.reduce((a, i) => a + +i.price * +i.qty, 0)}
              </h2>
            </li>
            <li>
              <button
                type="button"
                onClick={checkoutHandler}
                className="primary block"
                disabled={cart.length === 0}
              >
                Proceed to Checkout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(CartScreen);
