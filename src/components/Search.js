import { Fragment } from "react";

let searchText = "";

const SearchComponent = (props) => {
  function filterRestaurants(searchText) {
    console.log("props", props);
    let filteredRestaurants = props.restaurants.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(searchText.toLowerCase())
    );
    props.filteredRestaurants(filteredRestaurants);
  }

  return (
    <Fragment>
      <div className="search">
        <input
          type="text"
          onChange={(e) => {
            searchText = e.target.value;
            filterRestaurants(searchText);
          }}
          className="search-text"
        ></input>
        <button onClick={(e) => filterRestaurants(searchText)}>Search</button>
      </div>
    </Fragment>
  );
};

export default SearchComponent;
