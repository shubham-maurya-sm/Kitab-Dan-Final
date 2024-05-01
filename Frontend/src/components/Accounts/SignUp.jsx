// Import useState and useEffect if needed
import React, { useState, } from "react";
import { Link, useNavigate } from "react-router-dom";
import signupImage from "../../assets/img/signup-img.png";
import signupBgImage from "../../assets/img/signUpBg.jpg";


function SignUp() {




    const [formState, setFormState] = useState({
        fullName: '',
        email: '',
        phone: '',
        userType: '',
        password: '',
        confirmPassword: ''
    });
console.log(formState.fullName);
    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };
    const navigate=useNavigate();
    const  handleSubmit =async (e) => {
        e.preventDefault();
        console.log("signup");
       
      const response =await fetch('https://kitab-dan-server.vercel.app/api/v1/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                fullName:formState.fullName,
                email:formState.email,
                phone:formState.phone,
                userType:formState.userType,
                password:formState.password
            ),
        })
           
            console.log(response)
            if (response.ok) {
              alert("Account Created Successfully !!!");
              navigate("/login");
            } else {
              if (response.status === 400) {
                alert("All fields are required");
              } else if (response.status === 409) {
                alert("User with email  already exists");
                console.log(response.message);
              } else if (response.status === 500) {
                alert("Something went wrong please try again");
              } else {
                alert("Something went wrong");
              }
            }
    };





  return (
    <div
      style={{
        backgroundImage: `url(${signupBgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center",
        filter: "contrast(100%)",
      }}
    >
      <div
        className="w-full max-w-md mx-auto bg-white p-8 rounded-md  "
        style={{ maxWidth: "51vw" }}
      >
        <div
          className="flex justify-center items-center bg-light py-2 mb-6"
          style={{
            backgroundImage: `url(${signupImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
            filter: "contrast(100%)",
            height: "30vh",
          }}
        ></div>
        <h4 className="text-center mt-3 text-2xl font-bold">Create Account</h4>
        <p className="text-center">Get started with your free account</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              name="fullName"
              className="form-input w-full px-3 py-2 border-b-2 border-blue-500"
              placeholder="Full name"
              type="text"
              onChange={handleChange}
              value={formState.fullName}
            />
          </div>
          <div className="mb-4">
            <input
              name="email"
              className="form-input w-full px-3 py-2 border-b-2 border-blue-500"
              placeholder="Email address"
              type="email"
              onChange={handleChange}
              value={formState.email}
            />
          </div>
          <div className="mb-4 flex items-center">
            <select
              className="custom-select max-w-2 border-b-2 border-blue-500"
              style={{ maxWidth: "100px" }}
              name="phoneCode" 
              onChange={handleChange} 
              value={formState.phoneCode} 
            >
              <option disabled>Select Code</option>
              <option value="+91">+91</option>
            </select>
            <input
              name="phone"
              className="form-input w-full px-3 py-2 border-b-2 border-blue-500"
              placeholder="Phone number"
              type="text"
              onChange={handleChange}
              value={formState.phone}
            />
          </div>
          <div className="mb-4">
            <select
              name="userType"
              className="form-select w-full px-3 py-2 border-b-2 border-blue-500"
              onChange={handleChange}
              value={formState.userType}
            >
              <option  selected=''>Select User type</option>
              <option value="DONOR/RECEIVER">DONOR/RECEIVER</option>
              <option value="NGO">NGO</option>
              <option value="INSTITUTIONS/COLLEGES">
                INSTITUTIONS/COLLEGES
              </option>
            </select>
          </div>
          <div className="mb-4">
            <input
              name="password"
              className="form-input w-full px-3 py-2 border-b-2 border-blue-500"
              placeholder="Create password"
              type="password"
              onChange={handleChange}
              value={formState.password}
            />
          </div>
          <div className="mb-4">
            <input
              name="confirmPassword"
              className="form-input w-full px-3 py-2 border-b-2 border-blue-500"
              placeholder="Repeat password"
              type="password"
              onChange={handleChange}
              value={formState.confirmPassword}
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md w-full"
            >
              Create Account
            </button>
          </div>
          <p className="text-center">
            Have an account? <Link to="/Login">Log In</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
