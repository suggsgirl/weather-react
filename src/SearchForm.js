import React from "react";

export default function SearchForm() {
  return (
    <div className="location-input">
      <form id="search-form">
        <input type="text" placeholder="City Name" id="city-input" />
        <button type="submit" class="btn btn-primary">
          Search
        </button>
      </form>
    </div>
  );
}
