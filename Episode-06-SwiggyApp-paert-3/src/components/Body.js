import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestraunt] = useState(resList);
  const [listOfFilterRestaurants, setListOfFilterRestaurants] =
    useState(resList);
  const [searchText, setSearchText] = useState("");

  const searchMethod = () => {
    if (searchText !== "") {
      let searchData = listOfRestaurants.filter((item) =>
        item?.data?.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setListOfRestraunt(searchData);
    } else {
      setListOfRestraunt(resList);
    }
  };

  return (
    <div className="body">
      <div className="filter">
        <div className="search-box">
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button onClick={searchMethod}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestraunt(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.length > 0 ? (
          listOfRestaurants.map((restaurant, index) => (
            <RestaurantCard key={index} restaurant={restaurant} />
          ))
        ) : (
          <p>No data</p>
        )}
      </div>
    </div>
  );
};

export default Body;
