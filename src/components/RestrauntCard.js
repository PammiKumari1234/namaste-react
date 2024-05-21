import React from "react";
import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    locality,
    id,
  } = resData?.info;

  return (
    <Link to={`/restaurants/${id}`}>
      <div className="flex-auto m-4 p-4 w-[250px] bg-gradient-to-r from-red-100 to-yellow-200 rounded-lg transform hover:scale-110 transition duration-300">
        <div className="relative pb-[75%] overflow-hidden rounded-lg bg-gray-200">
          <img
            className="absolute top-0 left-0 w-full h-full object-cover"
            alt="res-logo"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/"+ 
              cloudinaryImageId
            }
          />
        </div>
        <div className="res-card-inner">
        <div className="overlay">
            <h3 className="text">{costForTwo}</h3>
          </div>
          <h2 className="font-bold py-4 text-xl whitespace-nowrap overflow-hidden overflow-ellipsis">
            {name}
          </h2>
          <h3 className="whitespace-nowrap overflow-hidden overflow-ellipsis">
            {avgRating} stars
          </h3>
          <h4 className="whitespace-nowrap overflow-hidden overflow-ellipsis">
            {cuisines.join(", ")}
          </h4>
          <h5 className="whitespace-nowrap overflow-hidden overflow-ellipsis">
            {locality}
          </h5>
        </div>
      </div>
    </Link>
  );
};


export default RestaurantCard;
