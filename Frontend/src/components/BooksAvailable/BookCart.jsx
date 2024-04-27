import React, { useContext } from "react";
import "./index.css";
import { Context } from "../../contexts/Context";
import BookCartItem from "./BookCartItem";
import BookCartCheckOut from "./BookCartCheckout";

const BookCart = () => {
  const { carts } = useContext(Context);

  if (carts.length === 0) {
    return (
      <h1 className="text-4xl text-center my-5">
        Your cart is Empty. Add Some.
      </h1>
    );
  } else {
    return (
      <div className="text-center">
        <h1 className="text-4xl">Book Cart</h1>
        <div className="container flex flex-col">
          {carts.map((cart) => (
            <BookCartItem key={cart.id} cart={cart} />
          ))}
        </div>
        <BookCartCheckOut />
      </div>
    );
  }
};

export default BookCart;
