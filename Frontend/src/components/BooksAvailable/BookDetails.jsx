import React, { useContext } from "react";
import { Context } from "../../contexts/Context";
import { useParams, Link } from "react-router-dom";
import "./index.css";

const BookDetails = () => {
  const { id } = useParams();
  const { addCart, books } = useContext(Context);

  const book = books.find((book) => book.id === id);
  if (!book) return null; // Handle case where book is not found

  const {
    title,
    coverImageSrc,
    rating,
    genre,
    price,
    description,
    authorName,
    authorId,
  } = book;

  const handleAddCart = () => {
    addCart(id);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl text-center mt-8 mb-4">Book Details</h1>
      <div className="book-details w-full lg:w-3/4 mx-auto flex flex-wrap">
        <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
          <img
            className="w-full h-60 object-cover"
            src={coverImageSrc}
            alt=""
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-4">
          <h4>
            By{" "}
            <Link to={`/author/${authorId}`} className="text-blue-500">
              {authorName}
            </Link>
          </h4>

          <h1 className="text-gray-800 text-2xl mb-2">{title}</h1>
          <p className="capitalize">Genre: {genre.join(", ")}</p>
          <h5>
            Goodreads Rating: <i className="fa fa-star"></i> {rating}
          </h5>

          <p className="text-gray-700 mt-4">{description}</p>

          <h4 className="mt-4">Price: ${price}</h4>

          <button
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg"
            onClick={handleAddCart}
          >
            Add Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
