import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constant";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      MENU_API + resId
      // here in the end if i change restaurant id, it will go to a different restaurant. Now it is dynamic as resId. This if changed in the url in browser, u can see a different restaurant
    );
    console.log("kkkkkk", data);
    const json = await data.json();
    setResInfo(json.data);
  };

  const { name, cuisines, cloudinaryImageId, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info || {}; // adding this or condition because first the resInfo was assigned to null.
  // or you can just put this inside an if condition

  const { itemCards } =
    resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || {};

  console.log("lll", itemCards);
  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{name} </h1>
      <h2>
        {cuisines.join(",")}-{costForTwoMessage}
      </h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {"Rs."} {item.card.info.price / 100}
            {/* /100 is beacuse the data is coming as 360000 etc */}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
