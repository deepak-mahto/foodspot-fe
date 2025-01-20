import { useEffect, useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
import axios from "axios";

const Dashboard = () => {
  const [restaurants, setRestaurants] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    cuisines: "",
    avgRating: "",
    deliveryTime: "",
    costForTwo: "",
    imageUrl: "",
  });

  const getRestaurants = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/restaurants");
      setRestaurants(response.data.restaurants);
    } catch (error) {
      console.log("Error while fetching data");
    }
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post(
      "http://localhost:8000/api/restaurant",
      {
        name: formData.name,
        cuisines: formData.cuisines,
        avgRating: formData.avgRating,
        deliveryTime: formData.deliveryTime,
        costForTwo: formData.costForTwo,
        imageUrl: formData.imageUrl,
      },
      { headers: { Authorization: localStorage.getItem("token") } }
    );

    setFormData({
      name: "",
      cuisines: "",
      avgRating: "",
      deliveryTime: "",
      costForTwo: "",
      imageUrl: "",
    });
    getRestaurants();
  };

  return (
    <div className="container mx-auto px-4 py-6 mt-20">
      <h1 className="text-3xl font-bold mb-6 mt-14">Dashboard</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md mb-8"
      >
        <h2 className="text-xl font-semibold mb-4">Create a New Restaurant</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Cuisines (comma-separated)
            </label>
            <input
              type="text"
              name="cuisines"
              value={formData.cuisines}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Average Rating
            </label>
            <input
              type="number"
              name="avgRating"
              value={formData.avgRating}
              onChange={handleInputChange}
              min="0"
              max="5"
              step="0.1"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Delivery Time
            </label>
            <input
              type="text"
              name="deliveryTime"
              value={formData.deliveryTime}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Cost for Two
            </label>
            <input
              type="text"
              name="costForTwo"
              value={formData.costForTwo}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Image URL
            </label>
            <input
              type="url"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition duration-300"
        >
          Create Restaurant
        </button>
      </form>
      <h1 className="text-center text-3xl font-bold mb-6 mt-14">Restaurants</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant._id} res_details={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
