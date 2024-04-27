import React, { useState } from "react";
import logo from "../../assets/logo_image/logo_kitab_dan.png";
import contactImage from "../../assets/img/contactus-img.png";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "N/A",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/submitForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data); // Log the server response
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="py-5 container mx-auto  bg-cyan-200">
        <div className="flex flex-wrap">
          <div className="container mx-auto">
            <div
              className=" bg-center bg-no-repeat  mx-auto mb-9"
              style={{
                backgroundImage: `url(${contactImage})`,
                backgroundSize: "contain",
                height: "20vh",
              }}
            ></div>
            <h1 className="text-4xl mb-4 font-bold text-center ">
              Feel free to contact us
            </h1>
            <p className="text-lg px-9 text-center py-5 font-bold">
              Thank you for visiting our website. We are always happy to hear
              from you and answer any questions you may have. Please fill out
              the form below, and we will get back to you as soon as possible.
              You can also reach us by phone, email, or visiting the given
              office address. We look forward to hearing from you!
            </p>
          </div>
        </div>

        <div className="flex flex-wrap w-full ">
          <div className="w-full md:w-8/12 mb-4 md:mb-0">
            <div className="bg-gray-100 p-6 rounded-md">
              <form className="bg-teal-100" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-input py-2 pl-10 pr-2 w-full border rounded-md"
                    id="name"
                    placeholder="Enter name"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">@</span>
                    </div>
                    <input
                      type="email"
                      className="form-input py-2 pl-10 pr-2 w-full border rounded-md"
                      id="email"
                      placeholder="Enter email"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="form-select py-2 pl-10 pr-2 w-full border rounded-md"
                    required
                    onChange={handleChange}
                  >
                    <option value="N/A" defaultValue>
                      Select
                    </option>
                    <option value="complaints">COMPLAINTS</option>
                    <option value="support">SUPPORT</option>
                    <option value="feedback">FEEDBACK</option>
                    <option value="others">OTHERS</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 content-between"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    className="form-textarea w-full border rounded-md"
                    rows="9"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="w-full md:w-4/12 ">
            <div className="text-center">
              <legend className="text-xl font-bold mb-2">
                <img src={logo} alt="logo" />
                <span className="text-blue-500">Our office</span>
              </legend>
              <address className="mb-4 text-center">
                CCE Building, Institute of Professional Studies
                <br />
                Science-Faculty, University of Allahabad
                <br />
                Prayagraj 211002
                <br />
                <br />
                <strong>Phone :</strong> +91 81XXXXXX48
              </address>
              <address className="text-center">
                <strong>Email :</strong>
                <br />
                <a href="mailto:info@kitabdaan.in">info@kitabdaan.in</a>
              </address>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
