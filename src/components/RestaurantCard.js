import { CDN_URL } from "../utils/constant";

// const stylecard = { backgroundColor: " #f0f0f0 " }; //css as an object used for inline styling

const RestaurentCard = (props) => {
  const { resData } = props;
  const { name, cuisines, cloudinaryImageId, avgRating, areaName } =
    resData?.info;
  return (
    <div
      className="m-4 p-4 w-[230px] rounded-lg bg-gray-100 hover:bg-gray-200"
      // style={stylecard}
    >
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
        className="rounded-md"
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines}</h4>
      <h4>{avgRating}</h4>
      <h4>{areaName}</h4>
    </div>
  );
};

//HOC
// input RestaurentCard => RestaurentCardPromoted

export const withPromotedLabel = (RestaurentCard) => {
  return (props) => {
    <div>
      <label>Promoted</label>
      <RestaurentCard {...props} />
    </div>;
  };
};

export default RestaurentCard;
