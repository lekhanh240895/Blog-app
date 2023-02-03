import React from "react";

function Banner() {
  return (
    <div className="px-10 py-5 flex flex-col justify-between items-center md:flex-row md:space-x-5 mb-10">
      <div>
        <h1 className="text-5xl font-bold">Lorem, ipsum dolor.</h1>
        <h4 className="text-xl font-semibold mt-5">
          Lorem ipsum{" "}
          <span className="capitalize  underline decoration-primary decoration-4">
            dolor sit amet
          </span>{" "}
          consectetur adipisicing elit. Explicabo, optio.
        </h4>
      </div>
      <p className="text-gray-400 text-base mt-5">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
        obcaecati aliquam nisi totam fugiat veniam!
      </p>
    </div>
  );
}

export default Banner;
