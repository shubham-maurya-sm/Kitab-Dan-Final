import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Homepage from "./pages/Homepage.jsx";
import ContactUs from "./components/ContactForm/ContactUs.jsx";
import AboutUs from "./components/About&Vision/About.jsx";
import LogIn from "./components/Accounts/LogIn.jsx";
import SignUp from "./components/Accounts/SignUp.jsx";
import BooksAvailable from "./pages/BooksAvailable.jsx";
import BookCart from "./components/BooksAvailable/BookCart.jsx";
import ProudDonors from "./pages/ProudDonors.jsx";
import AvailCities from "./components/BookPickup/AvailCities.jsx";
import PickupOptions from "./components/BookPickup/PickupOptions.jsx";
import LoginDash from "./components/Dashboard/LoginDash.jsx";
import Options from "./components/Dashboard/OptionsUser.jsx";
import DonationForm from "./components/Dashboard/Donor/DonationForm.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Homepage />} />
      <Route path="contactUs" element={<ContactUs />} />
      <Route path="donors-list" element={<ProudDonors />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="login" element={<LogIn />} />
      <Route path="logout" element={<Homepage/>} />
      <Route path="signUp" element={<SignUp />} />
      <Route path="login-Success" element={<LoginDash />} />
      <Route path="/OptionsUser" element={<Options />} />
      <Route path="OptionsUser/donate-form" element={<DonationForm />} />
      <Route path="OptionsUser/booksAvailable" element={<BooksAvailable />} />
      {/* <Route path="OptionsUser" element={<OptionsUser />} /> */}

      <Route path="booksAvailable" element={<BooksAvailable />} />
      {/* <Route path="book-cart" element={<BookCart />} /> */}
      <Route path="city-available" element={<AvailCities />}></Route>
      <Route
        path={"/city-available/City/prayagraj"}
        element={<PickupOptions />}
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
