import React from "react";

const SearchBar = ({
  filterText,
  SetFilterText,
  inThisLocation,
  setInThisLocation,
}) => {
  return (
    <>
      <form action="">
        <input
          type="text"
          placeholder="Search..."
          value={filterText}
          onChange={(e) => SetFilterText(e.target.value)}
        />
        <p>
          <label>
            <input
              type="checkbox"
              checked={inThisLocation}
              onChange={(e) => setInThisLocation(e.target.checked)}
            />
            Muestra solo los tweets de tu ubicación actual
          </label>
        </p>
      </form>
    </>
  );
};

export default SearchBar;
