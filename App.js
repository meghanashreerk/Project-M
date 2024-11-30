import React from "react";
import ReactDOM from "react-dom/client";

// React functional component

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://t3.ftcdn.net/jpg/08/29/90/88/360_F_829908823_kYsRKdQcIaYEAhHRAZTIXuSKvuVPif8w.jpg"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>cart</li>
        </ul>
      </div>
    </div>
  );
};

const stylecard = { backgroundColor: " white " }; //css as an object used for inline styling

const RestaurentCard = (props) => {
  const { resData } = props;
  console.log(props);
  return (
    <div className="res-card" style={stylecard}>
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.cloudinaryImageId
        }
        className="res-logo"
        alt="res-logo"
      />
      <h3>{resData.name}</h3>
      <h4>{resData.count}</h4>
      <h4>{resData.rating}</h4>
      <h4>{resData.location}</h4>
    </div>
  );
};

const resList = [
  {
    name: "Coffee Shop A",
    count: 5,
    rating: 4.7,
    location: "Downtown",
    cloudinaryImageId: "hjao7sorzggaeqito6au", // these cloudinary image ids are taken from swiggy website, it is unique for each image, the cdn url remains the same
  },
  {
    name: "Bookstore B",
    count: 3,
    rating: 4.9,
    location: "Uptown",
    cloudinaryImageId: "wa8ek94fp9d97ru1tcyn",
  },
  {
    name: "Restaurant C",
    count: 10,
    rating: 4.5,
    location: "City Center",
    cloudinaryImageId: "vkhcohhmqfczycw9vsar",
  },
  {
    name: "Gym D",
    count: 7,
    rating: 4.8,
    location: "Suburbs",
    cloudinaryImageId: "zvy2c2xcxzzlxg6tifvn",
  },
  {
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
        <RestaurentCard resData={resList[0]} />
        <RestaurentCard resData={resList[1]} />
        <RestaurentCard resData={resList[2]} />
        <RestaurentCard resData={resList[3]} />
        <RestaurentCard resData={resList[4]} />
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
