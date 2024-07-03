import React from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
export default Header = () => {
  let onlineStatus = useOnlineStatus();
  console.log("onlinenstatus", onlineStatus);
  return (
    <div className="flex justify-between bg-custom-grey shadow-md items-center h-[140px]">
      <div className="logo-container flex justify-between">
        <Link to="/">
          <img
            className="logo-img w-20 ml-2 bg-transparent"
            src={LOGO_URL}
          ></img>
        </Link>
        <h3 className="font-sans md:font-serif ml-3 flex items-center">
          Ramu Di Veg Biryani
        </h3>
      </div>
      <div className="flex items-center p-2">
        <label
          strokeWidth="toggleTwo"
          className="flex items-center cursor-pointer select-none text-dark dark:text-white"
        >
          <div className="relative">
            <input type="checkbox" id="toggleTwo" className="peer sr-only" checked={onlineStatus}/>
            <div className="block h-8 rounded-full bg-red-500 w-14 peer-checked:bg-green-500"></div>
            <div className="absolute w-6 h-6 transition bg-white rounded-full dot left-1 top-1 peer-checked:translate-x-full"></div>
          </div>
        </label>
      </div>

      <ul className="flex m-5 p-3">
        <li className="m-3">
          <div className="header-icon">
            <svg
              className="h-8 w-8 text-red-500"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <circle cx="9" cy="19" r="2" /> <circle cx="17" cy="19" r="2" />{" "}
              <path d="M3 3h2l2 12a3 3 0 0 0 3 2h7a3 3 0 0 0 3 -2l1 -7h-15.2" />
            </svg>
          </div>

          <span className="header-text">Grocery</span>
        </li>
        <li className="m-3">
          <div className="header-icon">
            <svg
              className="h-8 w-8 text-red-500"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <circle cx="10" cy="10" r="7" />{" "}
              <line x1="21" y1="21" x2="15" y2="15" />
            </svg>
          </div>
          <span className="header-text">Search</span>
        </li>
        <li className="m-3">
          <div className="header-icon">
            <svg
              className="h-8 w-8 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>
          </div>
          <span className="header-text">Offers</span>
        </li>
        <li className="m-3">
          <div className="header-icon">
            <svg
              className="h-8 w-8 text-red-500"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <circle cx="12" cy="12" r="9" />{" "}
              <line x1="12" y1="17" x2="12" y2="17.01" />{" "}
              <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
            </svg>
          </div>
          <span className="header-text">Help</span>
        </li>
        <li className="m-3">
          <div className="header-icon">
            <svg
              className="h-8 w-8 text-red-500"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />{" "}
              <path d="M7 12h14l-3 -3m0 6l3 -3" />
            </svg>
          </div>
          <span className="header-text">Sign In</span>
        </li>
        <li className="m-3">
          <div className="header-icon">
            <svg
              className="h-8 w-8 text-red-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <circle cx="9" cy="21" r="1" /> <circle cx="20" cy="21" r="1" />{" "}
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
          </div>
          <span className="header-text">Cart</span>
        </li>
      </ul>
    </div>
  );
};
