import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { MENU_API } from "../utils/constant";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId); //useRestaurantMenu will be my custom hook to fetch data

  const [showIndex, setShowIndex] = useState(null);

  // we can either call the api in the same component or write a custom hook as above to import the api

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(
  //     MENU_API + resId
  //     // here in the end if i change restaurant id, it will go to a different restaurant. Now it is dynamic as resId. This if changed in the url in browser, u can see a different restaurant
  //   );
  //   console.log("kkkkkk", data);
  //   const json = await data.json();
  //   setResInfo(json.data);
  // };

  const { name, cuisines, cloudinaryImageId, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info || {}; // adding this or condition because first the resInfo was assigned to null.
  // or you can just put this inside an if condition

  const { itemCards } =
    resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || {};

  const categories =
    resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="text-center bold">
      <h1 className="font-bold my-6 text-2xl">{name} </h1>
      <p className="font-bold">
        {cuisines.join(",")}-{costForTwoMessage}
      </p>
      {/* categories accordian */}
      {categories.map((category, index) => {
        return (
          <RestaurantCategory
            // controlled component
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        );
      })}{" "}
    </div>
  );
};
export default RestaurantMenu;
