import React from "react";
import Badge from "@material-ui/core/Badge";
import {Link} from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import { makeStyles } from "@material-ui/core";
import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
  size: {
    fontSize: 15
  },
  icon: {
    "&": { color: "#ffffff"},
    "& :visited": { color: "#ff8000" },
    "& :hover": { color: "#ff8000" },
    "& :active": { color: "#ff8000" },
    fontSize: 40,

  }
}));

function Header({cart}) {

  const classes = useStyles();

  return (
    <header className="row">
      <div>
        <Link className="brand" to="/">
          amazing shop
        </Link>
      </div>
      <div className="align">
        <Link to="/cart">
        <Badge badgeContent={cart.length} color="secondary" classes={{ badge: classes.size }}>
          <ShoppingCartIcon className={classes.icon} />
        </Badge>
        </Link>
        <Link to="/signin">
          <AssignmentIndIcon className={classes.icon}/>
        </Link>
      </div>
    </header>
  );
}
const mapStateToProps = (state) => {
  return {
    cart: state.cartDetails.cart
  }
}
export default connect(mapStateToProps)(Header);
