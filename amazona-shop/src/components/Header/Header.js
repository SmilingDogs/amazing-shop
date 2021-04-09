import React, { memo } from "react";
import Badge from "@material-ui/core/Badge";
// import MailIcon from "@material-ui/icons/Mail";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { makeStyles } from "@material-ui/core";

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

function Header() {
  console.log("Rendering Header!");
  const classes = useStyles();


  return (
    <header className="row">
      <div>
        <a className="brand" href="/">
          amazing shop
        </a>
      </div>
      <div>
        <a href="/cart">
        <Badge badgeContent={3} color="secondary" classes={{ badge: classes.size }}>
          <ShoppingCartIcon className={classes.icon} />
        </Badge>
        </a>
        <a href="/signin">Sign In</a>
      </div>
    </header>
  );
}

export default memo(Header);
