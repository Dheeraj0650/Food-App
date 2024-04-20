import { useEffect, useState, lazy } from "react";
import Shimmer from "./Shimmer";
import { HOME_API } from "../Utilities/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utilities/useOnlineStatus";
const RestaurantCard = lazy(() => import("./RestaurantCard"));

export default Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurantData, setRestaurantData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setRestaurantData(
      originalData.filter((data) => {
        return data.info.name.includes(searchText);
      })
    );
  }, [searchText]);

  const fetchData = async () => {
    const data = await fetch(HOME_API);

    const response = await data.json();

    const resObj =
      response?.data?.cards[1].card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setRestaurantData(resObj);
    setOriginalData(resObj);
  };

  const changeTopRated = (event) => {
    originalData.sort((a, b) => {
      return a.info.avgRating >= b.info.avgRating ? -1 : 1;
    });

    setRestaurantData(originalData.slice(0, 5));
  };

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  if (onlineStatus === false) {
    return <h1>No internet connection</h1>;
  }

  return restaurantData.length === 0 && searchText === "" ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter p-2">
        <input
          type="text"
          placeholder="Search Restaurant"
          className="input input-bordered w-full max-w-xs"
          onChange={handleSearch}
        />
        <button
          className="top-rated border-2 py-2 px-3 mx-3 hover:bg-gray-300"
          onClick={changeTopRated}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container flex flex-wrap">
        {restaurantData.map((restaurantData) => {
          return (
            <Link
              to={"/restaurants/" + restaurantData.info.id}
              className="no-underline text-black"
              key={restaurantData.info.id}
            >
              <RestaurantCard restaurantDate={restaurantData.info} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
