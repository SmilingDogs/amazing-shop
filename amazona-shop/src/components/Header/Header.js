import React, {memo} from "react";

function Header() {
  console.log("Rendering Header!");
  return (
    <header className="row">
      <div>
        <a className="brand" href="/">amazing shop</a>
      </div>
      <div>
        <a href="/cart">Cart</a>
        <a href="/signin">Sign In</a>
      </div>
    </header>
  );
}

export default memo(Header);
