import React from "react";
import Badge from "@material-ui/core/Badge";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import { makeStyles } from "@material-ui/core";
import { connect } from "react-redux";
import { signout } from "../../store/actions/user-actions";

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

function Header({ cart, user, dispatch }) {
  const classes = useStyles();

  const signoutHandler = () => {
    dispatch(signout())
  }
  return (
    <header className="row">
      <div>
        <Link className="brand" to="/">
          Amazing Shop
        </Link>
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
        {user ? (
          <div className="dropdown">
            <Link to="#">{user.name} <i className="fa fa-caret-down"></i></Link>
            <ul className="dropdown-content">
              <li>
                <Link to="#signout" onClick={signoutHandler}>
                  Sign Out
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/signin"><AssignmentIndIcon className={classes.icon} /></Link>
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
