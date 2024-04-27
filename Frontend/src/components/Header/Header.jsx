import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo_image/logo_kitab_dan.png";
import menu from "../../assets/logo_image/menu-img.png";
import cross from "../../assets/logo_image/menu-close.png";
import userIcon from "../../assets/userIcon.gif";
import aboutIcon from "../../assets/aboutIcon.gif";
import booksIcon from "../../assets/booksIcon.gif";
import donorAvailIcon from "../../assets/donorAvail.gif";
import PickUpIcon from "../../assets/pickup.png";
import homeIcon from "../../assets/homeIcon.png";
import contactIcon from "../../assets/contactIcon.png";
import { useLocation,  } from "react-router-dom";

import "tailwindcss/tailwind.css";
import { toast, ToastContainer } from "react-toastify"; // Import toast and ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import CSS for toast styles

function Header() {
  let loc = useLocation();
  console.log(loc)
  const [username, setUserName] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const user = async () => {
      const temp = await fetch(
        "https://kitab-dan-server.vercel.app/api/v1/users/current-user",
        {
          method: "GET",

          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (temp.ok) {
        const user = await temp.json();
        setIsOpen(false);
        setUserName(user.data.fullName.toUpperCase());
        console.log(temp);
        // console.log(user.email)
        console.log("Logged in user email:", user.data.fullName);
          console.error(user);
         setIsLoggedIn(true);
      }
    };
    user();
  }, [loc]);

 const navigate = useNavigate();

//  const logout = async () => {

  
//    try {
//      const response = await fetch("http://localhost:3000/api/v1/users/logout", {
//        method: "POST",
//        credentials: "include",
//      });
//      if (response.ok) {
//        setUserName("");
//        setIsOpen(true);
//        setIsLoggedIn(false);
    
//        toast.success("Logged out successfully!", {
//          position: "top-right",
//          autoClose: 8000,
//          hideProgressBar: false,
//          closeOnClick: true,
//          pauseOnHover: true,
//          draggable: true,
//          progress: undefined,
//        });

//        navigate("/");
//      }
//    } catch (error) {
//      console.error("Error logging out:", error);
//    }
//  };

const logout = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/v1/users/logout", {
      method: "POST",
      credentials: "include",
    });
    if (response.ok) {
      setUserName("");
      setIsOpen(true);
      setIsLoggedIn(false);

      // Display toast message when logout is successful
      toast.success("Logged out successfully!", {
        position: "top-right",
        autoClose: 8000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      navigate("/");
    }
  } catch (error) {
    console.error("Error logging out:", error);
  }
};



  const [isMenuVisible, setIsMenuVisible] = useState(true);

  const toggleMenu = () => {
    const mobileMenu = document.getElementById("mobile-menu-2");
    mobileMenu.classList.toggle("hidden");
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-green-300 border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto ">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              className="mr-2 h-20 border rounded-2xl "
              alt="Logo"
            />
          </Link>
          {/* {isOpen ? ( */}
          {isLoggedIn ? (
            <div className="flex items-center lg:order-2">
              <p className="text-gray-700 flex items-center mr-4 ">
                <img src={userIcon} alt="" className="w-8 mr-4" />
                {username}
              </p>
              <button
                onClick={logout}
                className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              >
                Logout
              </button>
               <ToastContainer />
            </div>
          ) : (
            <div className="flex items-center lg:order-2">
              <Link
                to="login"
                className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              >
                Log in
              </Link>
              <Link
                to="signUp"
                className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              >
                Create Account
              </Link>
            </div>
          )}
          <div className="lg:hidden flex items-center">
            <button
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuVisible ? (
                <img src={menu} alt="Menu" />
              ) : (
                <img src={cross} alt="cross" />
              )}
            </button>
          </div>
          <div
            className="hidden justify-center items-center w-full lg:flex lg:w-auto lg:order-1 "
            id="mobile-menu-2"
          >
            <ul className="flex flex-col justify-center mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200  ${
                      isActive ? "text-orange-700" : "text-gray-600"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 `
                  }
                >
                  Home
                  <img src={homeIcon} alt="" className="w-5 mr-4 mx-3 mt-2" />
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/about"}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200  ${
                      isActive ? "text-orange-700" : "text-gray-600"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  About Us
                  <img src={aboutIcon} alt="" className="w-5 mr-4 mx-5 mt-2" />
                </NavLink>
              </li>
              {!isLoggedIn && (
                <li>
                  <NavLink
                    to={"/donors-list"}
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200  ${
                        isActive ? "text-orange-700" : "text-gray-600"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Proud Donors
                    <img src={donorAvailIcon} alt="" className="w-6 mr-4 mx-8 mt-2" />
                  </NavLink>
                </li>
              )}
              <li>
                <NavLink
                  to={"/booksAvailable"}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200  ${
                      isActive ? "text-orange-700" : "text-gray-600"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Books Available
                  <img src={booksIcon} alt="" className="w-6 mr-4 mx-8 mt-2" />
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/contactus"}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200  ${
                      isActive ? "text-orange-700" : "text-gray-600"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Contact Us
                  <img
                    src={contactIcon}
                    alt=""
                    className="w-6 mr-4 mx-7 mt-2"
                  />
                </NavLink>
              </li>
              {isLoggedIn && (
                <li>
                  <NavLink
                    to={"/city-available"}
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200  ${
                        isActive ? "text-orange-700" : "text-gray-600"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Pickup City
                    <img src={PickUpIcon} alt="" className="w-7 mr-4 mx-5" />
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
      {/* <Carousel/> */}
      {/* <Footer /> */}
    </header>
  );
}

export default Header;
