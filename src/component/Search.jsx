import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";

const Search = ({ searchToggle, useSearchToggle }) => {
  const navigate = useNavigate();

  const search = (event) => {
    if (event.key === "Enter") {
      let keyword = event.target.value;
      navigate(`/?q=${keyword}`);
      window.scrollTo(0, 5000);
      useSearchToggle(searchToggle);
      event.target.value = "";
    }
  };

  return (
    <section className={searchToggle ? "search-area active" : "search-area"}>
      <h1 className="sr-only">Search Page</h1>

      <strong>
        고객님
        <br />
        무엇을 찾으시나요?
      </strong>
      <div className="input-area">
        <input
          type="text"
          placeholder="상품을 찾아보세요."
          onKeyPress={(event) => search(event)}
        />
        <button type="button">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </section>
  );
};

export default Search;
