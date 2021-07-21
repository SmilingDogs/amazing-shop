import React, { memo } from "react";

function Footer() {
  console.log("Rendering Footer!");
  return <footer className="row center">All right reserved. Copyright</footer>;
}
export default memo(Footer);
