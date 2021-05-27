import React from "react";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";

export const SaleScreen = () => {
  const { name } = useParams()
  const history = useHistory()

  switch (name) {
    case "LoopyRoad":
      return (
          <div>
      This is SALE! page dedicated to {name}
        <div><Link to="/">Back Home</Link></div>
        </div>
      );
    case "BeautifulEyes":
      return ( <div>
      This is SALE! page dedicated to {name}
      <button onClick={() => history.push('/')}>Back Home</button>
      </div>
      );
    case "IceRiver":
      return <div>This is SALE! page dedicated to {name}</div>;
    case "SeaBridge":
      return <div>This is SALE! page dedicated to {name}</div>;
    case "VillageHouse":
      return <div>This is SALE! page dedicated to {name}</div>;
    case "JumpingFish":
      return <div>This is SALE! page dedicated to {name}</div>;
    default:
      return <div>This Page is reserved for Sale Information</div>;
  }
};
