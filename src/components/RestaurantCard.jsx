const RestaurantCard = ({ res_details }) => {
  const { name, cuisines, avgRating, deliveryTime, costForTwo, imageUrl } =
    res_details;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img src={imageUrl} alt={name} className="w-full h-48 object-cover" />

      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>

        <div className="text-gray-600 mb-3">
          <h4 className="text-sm">{cuisines.join(", ")}</h4>
        </div>

        <div className="flex justify-between items-center text-sm text-gray-700">
          <div className="flex items-center space-x-1">
            <span className="text-yellow-500">⭐</span>
            <span>{avgRating}</span>
          </div>

          <span>{deliveryTime}</span>

          <span>{costForTwo}</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
