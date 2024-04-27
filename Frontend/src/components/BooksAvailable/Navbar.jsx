import React, { useContext } from "react";
import { Context } from "../../contexts/Context";
import { Link } from "react-router-dom";
import bookCartIcon from "../../assets/img/bookCartIcon.jpg";

const Navbar = () => {
  const { carts } = useContext(Context);
  return (
    <div className="bg-white border-b sticky top-0 shadow-sm p-3 px-4 mb-3">
      <div className="container flex flex-col md:flex-row items-center justify-end">
        <Link
          className="btn btn-outline-primary flex items-center"
          to="/book-cart"
        >
          <img src={bookCartIcon} alt="Book Request" className="h-9 " />
          Book Request (
          <span className="text-red-500">
            {carts.length !== 0 ? carts.length : 0}
          </span>
          )
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
