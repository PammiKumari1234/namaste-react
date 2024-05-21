import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestrauntCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restroList, setRestroList] = useState([]);
  const [filteredRestro, setFilteredRestro] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);

  console.log(restroList,"restro lis")

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    setRestroList(restaurants);
    setFilteredRestro(restaurants);
    setLoading(false);
  };

  const handleSearch = () => {
    const filteredRestro = restroList.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestro(filteredRestro);
  };

  const handleTopRated = () => {
    const filteredList = restroList.filter((res) => res.info.avgRating > 4);
    setFilteredRestro(filteredList);
  };

  const handleClear = () => {
    setFilteredRestro(restroList);
    setSearchText("");
  };

  return (
    <div className="body">
      <div className="flex flex-wrap">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="font-bold px-4 py-2 bg-gradient-to-r from-red-500 to-yellow-500 m-4 rounded-lg transform hover:scale-110 transition duration-300"
            onClick={handleSearch}
          >
            Search
          </button>
          <button
            className="font-bold px-4 py-2 bg-gradient-to-r from-red-500 to-yellow-500 m-4 rounded-lg transform hover:scale-110 transition duration-300"
            onClick={handleClear}
          >
            Clear
          </button>
          <button
            className="font-bold px-4 py-2 bg-gradient-to-r from-red-500 to-yellow-500 m-4 rounded-lg transform hover:scale-110 transition duration-300"
            onClick={handleTopRated}
          >
            Top Rated Products
          </button>
        </div>
      </div>
      {loading ? (
        <Shimmer/>
      ):(
        <div className="flex flex-wrap justify-evenly">
        {filteredRestro.map((restraunt) => (
          <RestaurantCard key={restraunt.info.id} resData={restraunt} />
        ))}
      </div>
      )}
    </div>
  );
};

export default Body;
