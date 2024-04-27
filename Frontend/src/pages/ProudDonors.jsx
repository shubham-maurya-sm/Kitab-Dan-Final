import React from "react";

function ProudDonors() {
  return (
    <div className="container mx-auto">
      {/* Container for above image */}
      <div className="mb-8 mt-5">
        <img
          src="https://d239pyg5al708u.cloudfront.net/uploads/homebanner/PROUD_DONAR_1_1.webp"
          alt=""
          className="w-full"
        />
      </div>

      {/* Container for search option */}
      <div className="container mx-auto text-center mt-10">
        {/* <h1 className="text-4xl">Search Books</h1> */}
        <p className="text-lg mt-2">Search for the book donor using his name</p>
        <input
          // onChange={handleChange}
          className="w-1/2 p-4 mx-auto form-input"
          type="search"
          placeholder="e.g. name of donor"
          value=''
        />
        
      </div>

      {/* Container for displaying the list of donors */}
      <div className="grid grid-cols-1 my-9 gap-4">
        <div className="my-5 text-center w-full text-4xl">Sorry ! No donors exists to show the details</div>
      </div>
    </div>
  );
}

export default ProudDonors;
