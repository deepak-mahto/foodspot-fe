import SearchComponent from "./Search";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnline from "../common/useOnline";
import useFetch from "../common/useFetch";

const BodyComponent = () => {
  const isOnline = useOnline();
  const url = "https://eatsy-be.onrender.com/api/restaurants/";
  const { response, isPending, error } = useFetch(url);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurantsArray, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    if (!isPending) {
      if (response) {
        setAllRestaurants(response);
        setFilteredRestaurants(response);
      }
    }
  }, [isPending, response]);

  function filteredRestaurants(restaurants) {
    setFilteredRestaurants(restaurants);
  }

  function filterTopRatedRestaurants() {
    let topRatedRestaurants = filteredRestaurantsArray.filter(
      (restaurant) => restaurant.avgRating > 4
    );

    setFilteredRestaurants(topRatedRestaurants);
  }

  if (!isOnline) {
    return <h1>Please check your Internet Connection</h1>;
  }

  return (
    <>
      <div className="filter-search-bar">
        <SearchComponent
          restaurants={allRestaurants}
          filteredRestaurants={filteredRestaurants}
        />
        <button className="top-rated" onClick={filterTopRatedRestaurants}>
          Top Rated Restaurants
        </button>
      </div>

      {error && <div>{error}</div>}

      {isPending ? (
        <Shimmer />
      ) : (
        <div className="res-container">
          {filteredRestaurantsArray.map((restaurant) => (
            <Link
              key={restaurant._id}
              to={"/restaurant/" + restaurant._id}
              state={restaurant}
            >
              <RestaurantCard key={restaurant._id} res_details={restaurant} />
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default BodyComponent;
