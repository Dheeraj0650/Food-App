import { CDN_URL } from "../Utilities/constants";

export default RestaurantCard = (props) => {
  const { cloudinaryImageId, name, cuisines, avgRating, sla } =
    props.restaurantDate;

  return (
    <div className="res-card font-bold w-[20rem] border-solid hover:border-4 hover:cursor-pointer border-amber-400 m-2 bg-gray-200 p-2">
      <img src={CDN_URL + cloudinaryImageId} alt="food"></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{sla.deliveryTime} min</h4>
    </div>
  );
};
