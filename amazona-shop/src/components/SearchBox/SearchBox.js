import React, { useState } from "react";
import { useHistory } from "react-router";

function SearchBox() {
  const [name, setName] = useState("");
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault(); //*prevet refresh page
    history.push(`/search/name/${name}`); //*we just redicrect to search page
  };
  return (
    <form className="search" onSubmit={submitHandler}>
      <div className="row">
        <input
          type="text"
          name="q"
          id="q"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <button type="submit" className="primary">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </form>
  );
}

export default SearchBox;
