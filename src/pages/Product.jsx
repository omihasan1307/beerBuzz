import React from "react";

const Product = ({ product }) => {
  const { name, description, image_url, attenuation_level } = product;
  console.log(product);
  return (
    <div className="card  bg-base-100 shadow-xl border">
      <figure className="h-[30rem] p-10">
        <img
          className="w-full h-full object-contain"
          src={image_url}
          alt={name}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Attenuation Level : {attenuation_level}</p>
        <p>{description?.slice(0, 80) + "..."}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => alert("Item Added")}
            className="btn bg-bgColor text-white"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
