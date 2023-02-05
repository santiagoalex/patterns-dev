import React, { useState } from "react";
import SearchBar from "./SearchBar";
import TweetList from "./TweetList";

const SearchResult = ({ tweets }) => {
  const [filterText, SetFilterText] = useState("");
  const [inThisLocation, setInThisLocation] = useState("");

  return (
    <>
      <SearchBar
        filterText={filterText}
        SetFilterText={SetFilterText}
        inThisLocation={inThisLocation}
        setInThisLocation={setInThisLocation}
      />
      <TweetList
        tweets={tweets}
        filterText={filterText}
        inThisLocation={inThisLocation}
      />
    </>
  );
};

export default SearchResult;
