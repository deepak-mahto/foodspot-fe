import { useState, useEffect } from "react";
import axios from "axios";
import RestaurantCard from "../components/RestaurantCard";
import Shimmer from "../components/Shimmer";

const Home = () => {
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
      {isLoading ? (
        <Shimmer />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-18">
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant._id} res_details={restaurant} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
