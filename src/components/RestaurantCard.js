import { RESTAURANT_IMG_URL } from "../common/restaurant_img_url";

const RestaurantCard = ({ res_details }) => {
  const {
    name,
    cuisines,
    avgRating,
    deliveryTime,
    costForTwo,
    cloudinaryImageId,
  } = res_details;

  return (
    <div className="restaurant-card">
      <img
        src={`${RESTAURANT_IMG_URL}${cloudinaryImageId}`}
        alt="rest-pic"
      ></img>
      <h3>{name}</h3>
      <div className="cuisines">
        <h4>{cuisines}</h4>
      </div>
      <div className="res-info">
        <h4>{avgRating}</h4>
        <h4>{deliveryTime}</h4>
        <h4> {costForTwo}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
