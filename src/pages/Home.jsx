import { useState, useEffect } from "react";
import axios from "axios";
import RestaurantCard from "../components/RestaurantCard";
import Shimmer from "../components/Shimmer";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

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

  const displayedRestaurants = restaurants
    .filter((restaurant) => restaurant.avgRating > 4)
    .slice(0, 8);

  return (
    <div className="container mx-auto px-4">
      <section className="bg-gradient-to-r from-orange-400 to-pink-500 h-[400px] flex items-center justify-center text-center text-white mb-20 mt-20">
        <div>
          <h1 className="text-5xl font-bold mb-4">
            Discover the Best Restaurants
          </h1>
          <p className="text-xl mb-8">
            From local favorites to fine dining, explore the best culinary
            experiences in town.
          </p>
          <button
            className="bg-white text-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-orange-100 transition duration-300"
            onClick={() => navigate("/all-restaurants")}
          >
            Explore Restaurants
          </button>
        </div>
      </section>

      <div className="flex justify-center items-center text-3xl bg-white text-grey-800 px-8 py-3 font-semibold">
        Top Restaurants
      </div>
      <div className="py-6">
        {isLoading ? (
          <Shimmer number={displayedRestaurants.length} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {displayedRestaurants.map((restaurant) => (
              <RestaurantCard key={restaurant._id} res_details={restaurant} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
