import RestaurantCard from "./RestrauntCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

const Body = () => {
  const [restroList, setrestroList] = useState([]);
  const [filteredRestro, setfilteredRestro] = useState([]);
  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setrestroList(
      json?.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setfilteredRestro(
      json?.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    console.log(restroList);
  };

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setsearchText(e.target.value)}
          />
          <button
          className="search-btn"
            onClick={() => {
              const filteredRestro = restroList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestro(filteredRestro);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restroList.filter(
              (res) => res.info.avgRating > 4
            );
            setfilteredRestro(filteredList);
          }}
        >
          Top Rated Products
        </button>
      </div>
      <div className="res-container">
        {filteredRestro.map((restraunt) => (
          <RestaurantCard key={restraunt.info.id} resData={restraunt} />
        ))}
      </div>
    </div>
  );
};

export default Body;
