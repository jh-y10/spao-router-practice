import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = ({ searchToggle }) => {
  return (
    <section className={searchToggle ? "search-area active" : "search-area"}>
      <h1 className="sr-only">Search Page</h1>

      <strong>
        고객님
        <br />
        무엇을 찾으시나요?
      </strong>
      <div className="input-area">
        <input type="text" placeholder="상품을 찾아보세요." />
        <button type="button">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </section>
  );
};

export default Search;
