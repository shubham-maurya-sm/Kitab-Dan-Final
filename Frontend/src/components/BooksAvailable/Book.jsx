import React, { useContext, useState } from "react";
import { Context } from "../../contexts/Context";
import { Link } from "react-router-dom";

const Book = ({ bookDetails }) => {
  const { addCart } = useContext(Context);
  const { id, title, coverImageSrc, authorName, authorId } = bookDetails;
  const [isFlipped, setIsFlipped] = useState(false);

  const handleAddCart = () => {
    addCart(id);
  };

  return (
    <div className="relative w-full flex flex-col my-5 mx-10 px-9">
      <div className="relative h-96 px-0 bg-green-200 overflow-hidden border rounded-lg border-gray-300">
        <div
          className="flip-container h-full"
          onMouseEnter={() => setIsFlipped(true)}
          onMouseLeave={() => setIsFlipped(false)}
          style={{ perspective: "1000px" }}
        >
          <div
            className="flipper h-full"
            style={{
              transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
              transition: "transform 0.8s ease-in-out",
            }}
          >
            <div className="front h-full">
              <img
                className={`w-full h-full object-fill rounded-lg ${
                  isFlipped ? "opacity-0" : "opacity-100"
                }`}
                src={coverImageSrc}
                alt={title}
              />
            </div>
            <div
              className={`back absolute inset-0 opacity-50 flex flex-col items-center justify-center px-3 py-5 ${
                isFlipped ? "opacity-100" : "opacity-0"
              }`}
              style={{ transform: "rotateY(180deg)" }}
            >
              {isFlipped ? (
                <div className="text-center text-red-600 text-xl">
                  <h5 className="text-lg font-bold mb-2">
                    <Link to={"/book/details/" + id}>{title}</Link>
                  </h5>
                  <h6 className="text-sm">
                    By{" "}
                    <Link to={"/author/" + authorId} className="underline">
                      {authorName}
                    </Link>
                  </h6>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="flex justify-between mt-2 mx-9">
        {/* <Link
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-lg"
          to={"/book/details/" + id}
        >
          Details
        </Link> */}
        <button
          onClick={handleAddCart}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-xl"
        >
          Request
        </button>
      </div>
    </div>
  );
};

export default Book;
