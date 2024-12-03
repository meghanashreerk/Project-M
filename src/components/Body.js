import { useEffect, useState } from "react";
import resList from "../utils/mockdata";
import RestaurentCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = (props) => {
  // state variable -- it is a powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      // swiggy api
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(
      "api data",
      // optional chaining
      json.data.cards[1].card?.card?.gridElements.infoWithStyle.restaurants
    );

    setListOfRestaurants(
      json.data.cards[1].card?.card?.gridElements.infoWithStyle.restaurants
    );
  };

  //conditional rendering
  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />; //for shimmer UI
  // } or directly write it in return as below

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // filter logic
            const filteredList = listOfRestaurants.filter(
              (res) => res.rating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top rated button
        </button>{" "}
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          // you can also use index as key but it snot recommended, bad practice. But,
          // not using key <<< index <<< unique key (best practice).
          <RestaurentCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
