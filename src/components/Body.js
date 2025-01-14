import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnline from "../common/useOnline";
import useFetch from "../common/useFetch";

const BodyComponent = () => {
  const isOnline = useOnline();
  const url = "https://eatsy-be.onrender.com/api/restaurants";
  const { response, isPending, error } = useFetch(url);
  // eslint-disable-next-line
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

  if (!isOnline) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl font-semibold text-red-600">
        Please check your Internet Connection
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6 mt-20">
      {error && (
        <div className="text-center text-red-600 font-semibold mb-6">
          {error}
        </div>
      )}

      {isPending ? (
        <Shimmer />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredRestaurantsArray.map((restaurant) => (
            <Link
              key={restaurant._id}
              to={"/restaurant/" + restaurant._id}
              state={restaurant}
              className="hover:scale-105 transition-transform duration-300"
            >
              <RestaurantCard res_details={restaurant} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default BodyComponent;
