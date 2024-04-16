import RestaurantCard from "./RestaurantCard";

export default Body = (props) => {
  const { resObj } = props;

  return (
    <div className="body">
      <div className="search"></div>
      <div className="res-container flex flex-wrap justify-around">
        {resObj.map((restaurantData) => {
          return (
            <RestaurantCard
              key={restaurantData.info.id}
              restaurantDate={restaurantData.info}
            />
          );
        })}
      </div>
    </div>
  );
};
