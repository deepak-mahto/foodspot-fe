import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { dummyRestaurants } from "../data";

const BodyComponent = () => {
  const [filteredRestaurants, setFilteredRestaurants] =
    useState(dummyRestaurants);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const filterTopRatedRestaurants = () => {
    const topRated = dummyRestaurants.filter(
      (restaurant) => restaurant.avgRating > 4
    );
    setFilteredRestaurants(topRated);
  };

  return (
    <div className="container mx-auto px-4 py-6 mt-20">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
        <button
          onClick={filterTopRatedRestaurants}
          className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition duration-300"
        >
          Top Rated Restaurants
        </button>
      </div>

      {isLoading ? (
        <Shimmer />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant._id} res_details={restaurant} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BodyComponent;
