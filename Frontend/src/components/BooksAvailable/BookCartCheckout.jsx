import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../contexts/Context";
import { Link } from "react-router-dom";
import "./index.css";

const BookCartCheckOut = () => {
  const { books, carts } = useContext(Context);
  const [totalPrice, setTotalPrice] = useState(0);
  const shippingCost = 5;

  const getSubtotal = (books, carts) => {
    let subtotal = 0;
    carts.forEach((cart) => {
      books.forEach((book) => {
        if (book.id === cart.id) {
          subtotal = subtotal + book.price * cart.quantity;
        }
      });
    });

    return subtotal.toFixed(2);
  };

  let subtotal = getSubtotal(books, carts);
  let tempTotal = (parseFloat(subtotal) + shippingCost).toFixed(2);

  useEffect(() => {
    setTotalPrice(tempTotal);
  }, [tempTotal]);

  return (
    <div className="container">
      <div className="checkout-area w-3/4 mx-auto my-5">
        <h1 className="text-4xl text-center">Total</h1>
        <table className="table-auto w-full">
          <tbody>
            <tr>
              <td>Subtotal</td>
              <td>${subtotal}</td>
            </tr>
            <tr>
              <td>Shipping Cost</td>
              <td>$0{shippingCost}</td>
            </tr>
            <tr className="text-primary text-2xl">
              <td>Total</td>
              <td>${totalPrice}</td>
            </tr>
            <tr>
              <td>
                <Link className="btn btn-outline-primary" to="/">
                  Back To Shopping
                </Link>
              </td>
              <td>
                <button
                  className="btn btn-outline-info"
                  onClick={() => {
                    alert("Checking out");
                  }}
                >
                  Checkout
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookCartCheckOut;
