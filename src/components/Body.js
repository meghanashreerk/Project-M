import { useContext, useEffect, useState } from "react";
import resList from "../utils/mockdata";
import RestaurentCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = (props) => {
  // state variable -- it is a powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState([]);

  const RestaurentCardPromoted = withPromotedLabel(RestaurentCard);

  // whenever state variable updates, react triggers a reconciliation cycle (re-renders the comp)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      // swiggy api -- https://corsproxy.io/? --> append this url before the api url if u cant host it
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setListOfRestaurants(
      // optional chaining
      json.data.cards[1].card?.card?.gridElements.infoWithStyle.restaurants
    );
    setFilteredRestaurants(
      json.data.cards[1].card?.card?.gridElements.infoWithStyle.restaurants
    );
  };

  //conditional rendering
  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />; //for shimmer UI
  // } or directly write it in return as below

  // to show a message when the user is offline
  const onlineStatus = useOnlineStatus();
  if (onlineStatus == false)
    return (
      <h1>looks like you are offline, please check your internet connection</h1>
    );

  const { loggedInUser, setUserName } = useContext(UserContext);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4 ">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText)
              );
              setListOfRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-xl"
            onClick={() => {
              // filter logic
              const filteredList = listOfRestaurants.filter(
                (res) => res.rating > 4
              );
              setListOfRestaurants(filteredList);
            }}
          >
            Top rated restaurants
          </button>{" "}
        </div>
        <div className="m-4 p-4 flex items-center">
          <label>Username: </label>
          <input
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {listOfRestaurants.map((restaurant) => (
          // you can also use index as key but it snot recommended, bad practice. But,
          // not using key <<< index <<< unique key (best practice).
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {/* if the restaurant is promoted then add promoted label into it */}
            {restaurant.info.promoted ? (
              <RestaurentCardPromoted resData={restaurant} />
            ) : (
              <RestaurentCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
