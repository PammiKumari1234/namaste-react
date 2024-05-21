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
        <div className="image-container">
          <img
            className="rounded-lg w-full max-h-[280px]"
            alt="res-logo"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/"+ 
              cloudinaryImageId
            }
          />
          <div className="overlay">
            <h3 className="text">{costForTwo}</h3>
          </div>
        </div>
        <div className="res-card-inner">
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
