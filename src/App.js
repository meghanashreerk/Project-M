import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import resList from "./utils/mockdata";
import { CDN_URL } from "./utils/constant";

const stylecard = { backgroundColor: " white " }; //css as an object used for inline styling

const RestaurentCard = (props) => {
  const { resData } = props;
  const { name, count, cloudinaryImageId, rating, location } = resData;
  return (
    <div className="res-card" style={stylecard}>
      <img
        src={CDN_URL + cloudinaryImageId}
        className="res-logo"
        alt="res-logo"
      />
      <h3>{name}</h3>
      <h4>{count}</h4>
      <h4>{rating}</h4>
      <h4>{location}</h4>
    </div>
  );
};

const resList = [
  {
    id: 0,
    name: "Coffee Shop A",
    count: 5,
    rating: 4.7,
    location: "Downtown",
    cloudinaryImageId: "hjao7sorzggaeqito6au", // these cloudinary image ids are taken from swiggy website, it is unique for each image, the cdn url remains the same
  },
  {
    id: 1,
    name: "Bookstore B",
    count: 3,
    rating: 4.9,
    location: "Uptown",
    cloudinaryImageId: "wa8ek94fp9d97ru1tcyn",
  },
  {
    id: 2,
    name: "Restaurant C",
    count: 10,
    rating: 4.5,
    location: "City Center",
    cloudinaryImageId: "vkhcohhmqfczycw9vsar",
  },
  {
    id: 3,
    name: "Gym D",
    count: 7,
    rating: 4.8,
    location: "Suburbs",
    cloudinaryImageId: "zvy2c2xcxzzlxg6tifvn",
  },
  {
    id: 4,
    name: "Salon E",
    count: 2,
    rating: 4.6,
    location: "Beachside",
    cloudinaryImageId: "2469fa88ee9b0b5d1366ba88f2a7fa7f",
  },
];

const Body = (props) => {
  return (
    <div className="body">
      <div className="search">Search </div>
      <div className="res-container">
        {resList.map((restaurant) => (
          // you can also use index as key but it snot recommended, bad practice. But,
          // not using key <<< index <<< unique key (best practice).
          <RestaurentCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div id="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
