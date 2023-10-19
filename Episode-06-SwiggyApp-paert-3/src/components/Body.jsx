import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "../common/Shimmer/Shimmer";
import { swiggy_api_URL } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [listOfFilterRestaurants, setListOfFilterRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);

  // render or call Api
  useEffect(() => {
    const APIFetch = async () => {
      try {
        setLoading(true);
        let res = await fetch(swiggy_api_URL);
        let result = await res.json();

        let card_List = result?.data?.cards;
        let arrList = [];
        card_List?.forEach((cardItem) => {
          let item =
            cardItem?.card?.card?.gridElements?.infoWithStyle?.restaurants;

          if (item?.length > 0) {
            arrList.push(...item);
          }
        });

        setListOfRestraunt(arrList);
        setListOfFilterRestaurants(arrList);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(true);
      }
    };

    APIFetch();
  }, []);

  // Search
  const searchMethod = () => {
    if (searchText !== "") {
      let searchData = listOfRestaurants.filter((item) =>
        item?.info?.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setListOfFilterRestaurants(searchData);
    }
  };

  console.log("listOfFilterRestaurants", listOfFilterRestaurants);

  console.log("loading", loading);

  // const onChangeSearch = () => {
  //   let searchData = listOfRestaurants.filter((item) =>
  //     item?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  //   );
  //   setListOfRestraunt(searchData);
  // };

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
              (res) => res?.info?.avgRatingString > 4
            );
            setListOfFilterRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-list">
        {loading ? (
          listOfFilterRestaurants.length > 0 ? (
            listOfFilterRestaurants.map((restaurant, index) => (
              <Link key={index} to={`restaurant/${restaurant?.info?.id}`}>
                <RestaurantCard restaurant={restaurant?.info} />
              </Link>
            ))
          ) : (
            <p>No data</p>
          )
        ) : (
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
            <div className="save_property_box">
              <Shimmer height={12} width={95} mb={12} radius={4} />
              <Shimmer height={12} width={85} mb={12} radius={4} />
              <Shimmer height={12} width={50} mb={16} radius={4} />
              <Shimmer height={32} width={60} radius={4} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
