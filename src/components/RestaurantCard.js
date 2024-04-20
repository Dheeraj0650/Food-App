import { CDN_URL } from "../Utilities/constants";

export default RestaurantCard = (props) => {
  const { cloudinaryImageId, name, cuisines, avgRating, sla } =
    props?.restaurantDate;

  return (
    <div className="leading-8 res-card w-[20rem] h-[25rem] border-solid hover:border-4 hover:cursor-pointer border-amber-400 m-2 bg-[#ECB159] p-2 shadow-xl rounded-lg  text-[#FEFBF6]">
      <img src={CDN_URL + cloudinaryImageId} alt="food"></img>
      <h3 className="font-bold tracking-tight mt-4 text-2xl">{name}</h3>
      <h4 className="font-sans font-bold"> {cuisines.join(", ")} </h4>
      <h4> {avgRating} </h4>
      <h4> {sla.deliveryTime} min </h4>
    </div>
  );
};
