import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../contexts/Context";
import "./index.css";

const BookCartItem = ({ cart }) => {
  const { books, updateCart, removeCart } = useContext(Context);
  const { id, quantity } = cart;

  const [newQuantity, setNewQuantity] = useState(quantity);

  // Find the book corresponding to the cart item
  const book = books.find((book) => book.id === id);

  // If the book is not found, handle the error
  if (!book) {
    return <div>Error: Book not found</div>;
  }

  const { title, coverImageSrc,  authorName, authorId } = book;

  const handleCartRemove = () => {
    removeCart(id);
  };

  return (
    <div className="book-item mt-4">
      <div className="flex flex-wrap items-center">
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/3 xl:w-1/4">
          <div className="product-cover w-1/2 mx-auto">
            <img className="w-full" src={coverImageSrc} alt="" />
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/3 xl:w-1/4">
          <h4>
            <Link to={"/book/details/" + id}>{title}</Link>
          </h4>
          <h6>
            By <Link to={"/author/" + authorId}>{authorName}</Link>
          </h6>
          
          
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/3 xl:w-1/4 p-2">
          <input
            onChange={(e) => {
              const value = parseInt(e.target.value);
              if (!isNaN(value) && value > 0) {
                setNewQuantity(value);
                updateCart(id, value);
              } else {
                alert("Please enter a valid positive integer");
              }
            }}
            className="w-full text-center border border-info rounded-lg"
            type="number"
            min="1"
            value={newQuantity}
          />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/3 xl:w-1/4">
          <button onClick={handleCartRemove} className="btn btn-outline-danger">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCartItem;
