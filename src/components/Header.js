import React from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
export default Header = () => {
  const { userName } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <>
    <div className="fixed top-0 left-0 right-0 flex justify-between bg-[#f8f8f8] shadow-md items-center h-[95px] z-50 ">
      <div className="logo-container flex justify-between">
        <Link to="/">
          <img
            className="logo-img w-20 ml-2 bg-transparent"
            src={LOGO_URL}
          ></img>
        </Link>
        <h3 className="ml-3 flex items-center text-[#ff6347]" style={{ fontFamily: "'Patrick Hand', cursive, sans-serif" }}>
          Rapid Food
        </h3>
      </div>
    
      <ul className="flex  p-1 my-[10px] mr-[50px]">
        <li className="m-3">
          <div className="header-icon">
            <svg
              className="h-7 w-7 text-[#333333] hover:text-[#ff6347]"
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
              className="h-7 w-7 text-[#333333] cursor-pointer hover:text-[#ff6347]"
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
              className="h-7 w-7 text-[#333333] cursor-pointer hover:text-[#ff6347]"
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
              className="h-7 w-7 text-[#333333] hover:text-[#ff6347]"
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
        {(userName.length <= 0) ? <li className="m-3">
          <div className="header-icon">
            <svg
              className="h-7 w-7 text-[#333333] hover:text-[#ff6347]"
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
        </li>:<li className="m-3">
          <div className="header-icon">
          <svg className="h-7 w-7 text-[#333333] hover:text-[#ff6347]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          </div>
          <span className="header-text">Hi {userName}</span>
        </li>}
        
        
        <li className="m-3 relative">
          <Link to="/cart">
          <div className="header-icon cursor-pointer">
            <svg
              className="h-7 w-7 text-[#333333] hover:text-[#ff6347]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>

            <span className="absolute top-0 right-0 text-xs font-bold text-white bg-red-500 rounded-full px-2 h-4 w-4 overflow-hidden flex items-center justify-center">
              {cartItems.length}
            </span>
          </div>
          </Link>
          
          <span className="header-text">Cart</span>
      </li>
      </ul>
    </div>
    <div>
    
    </div>
  </>
  );
};
