import React from "react";
import Badge from "@material-ui/core/Badge";
import { Link, Route } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import { makeStyles } from "@material-ui/core";
import { connect } from "react-redux";
import { signout } from "../../store/actions/user-actions";
import SearchBox from "../SearchBox/SearchBox";

const useStyles = makeStyles((theme) => ({
  size: {
    fontSize: 15,
  },
  icon: {
    "&": { color: "#ffffff" },
    "& :visited": { color: "#ff8000" },
    "& :hover": { color: "#ff8000" },
    "& :active": { color: "#ff8000" },
    fontSize: 40,
  },
}));

function Header({ cart, user, dispatch, history }) {
  const classes = useStyles();

  const userLocal = JSON.parse(localStorage.getItem("userInfo"))

  const signoutHandler = () => {
    dispatch(signout());
  };
  
  return (
    <header className="row">
      <div>
        <Link className="brand" to="/">
          Amazing Shop
        </Link>
      </div>
      <div>
        <Route>
          <SearchBox history={history} />
        </Route>
      </div>
      <div className="align">
        <Link to="/cart">
          <Badge
            badgeContent={cart.length}
            color="secondary"
            classes={{ badge: classes.size }}
          >
            <ShoppingCartIcon className={classes.icon} />
          </Badge>
        </Link>
        {user || userLocal ? (
          <div className="dropdown">
            <Link to="#">
              {user ? user.name : userLocal.name} <i className="fa fa-caret-down"></i>
            </Link>
            <ul className="dropdown-content">
              <li>
                <Link to="#signout" onClick={signoutHandler}>
                  Sign Out
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/signin">
            <AssignmentIndIcon className={classes.icon} />
          </Link>
        )}
        {user && user.isSeller && (
          <div className="dropdown">
            <Link to="#admin">
              Seller <i className="fa fa-caret-down"></i>
            </Link>
            <ul className="dropdown-content">
              <li>
                <Link to="/productlist/seller">Products</Link>
              </li>
              <li>
                <Link to="/orderlist/seller">Orders</Link>
              </li>
            </ul>
          </div>
        )}
        {user && user.isAdmin && (
          <div className="dropdown">
            <Link to="#admin">
              Admin <i className="fa fa-caret-down"></i>
            </Link>
            <ul className="dropdown-content">
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/productlist">Products</Link>
              </li>
              <li>
                <Link to="/orderlist">Orders</Link>
              </li>
              <li>
                <Link to="/userlist">Users</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
const mapStateToProps = (state) => {
  return {
    cart: state.cart.data,
    user: state.userSignin.userInfo,
  };
};
export default connect(mapStateToProps)(Header);
