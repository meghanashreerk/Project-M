import { CDN_URL } from "../utils/constant";

const stylecard = { backgroundColor: " white " }; //css as an object used for inline styling

const RestaurentCard = (props) => {
  const { resData } = props;
  const { name, cuisines, cloudinaryImageId, avgRating, areaName } =
    resData?.info;
  return (
    <div className="res-card" style={stylecard}>
      <img
        src={CDN_URL + cloudinaryImageId}
        className="res-logo"
        alt="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines}</h4>
      <h4>{avgRating}</h4>
      <h4>{areaName}</h4>
    </div>
  );
};

export default RestaurentCard;
