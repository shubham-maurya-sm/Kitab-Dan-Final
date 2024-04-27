import React, { useContext, Fragment } from "react";
import { Context } from "../../contexts/Context";
import Book from "./Book";
import "./index.css";

const Books = () => {
  const { books, clearSearch, searchedBooks, searchString } =
    useContext(Context);

  return (
    <div className="container">
      <h1 className="ml-4 text-black text-4xl text-center mb-3">
        {searchString === null ? (
          "All Books"
        ) : (
          <Fragment>
            Searching for '{searchString}'
            <button
              onClick={() => clearSearch()}
              className="btn btn-danger ml-2"
            >
              X
            </button>
          </Fragment>
        )}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  px-2">
        {searchedBooks.length === 0
          ? books.map((book) => {
              const { id } = book;
              return <Book key={id} bookDetails={book} />;
            })
          : searchedBooks.map((book) => {
              const { id } = book;
              return <Book key={id} bookDetails={book} />;
            })}
      </div>
    </div>
  );
};

export default Books;
