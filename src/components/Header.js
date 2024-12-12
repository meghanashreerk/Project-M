import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg mb-2 sm:bg-yellow-200">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4">
            <Link to="/cart">Cart</Link>
          </li>
          <li className="px-4">Online status: {onlineStatus ? "✅" : "🛑"}</li>

          <button
            className="login-btn"
            onClick={() => {
              setBtnNameReact("Logout");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
