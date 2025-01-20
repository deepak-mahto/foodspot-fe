import { useState, useEffect } from "react";
import axios from "axios";
import RestaurantCard from "../components/RestaurantCard";
import Shimmer from "../components/Shimmer";
import { Link } from "react-router-dom";

const AllRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  const getRestaurants = async () => {
    const response = await axios.get("http://localhost:8000/api/restaurants");
    setRestaurants(response.data.restaurants);
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  return (
    <div className="container mx-auto px-4 py-6 mt-20">
      <div className="mb-6">
        <Link
          to="/"
          className="text-rey-800 hover:text-orange-600 font-semibold text-xl"
        >
          &larr; Back to Home
        </Link>
      </div>
      <div className="text-center mb-10">
        <p className="flex justify-center items-center text-3xl bg-white text-grey-800 px-8 py-3 font-semibold mt-16">
          Explore all the amazing restaurants in town.
        </p>
      </div>

      {isLoading ? (
        <Shimmer number={restaurants.length} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant._id} res_details={restaurant} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllRestaurants;
