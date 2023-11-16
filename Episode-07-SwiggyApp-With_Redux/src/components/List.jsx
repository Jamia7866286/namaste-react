import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ShimmerComponent from "../common/Shimmer/Shimmer";
import HOCPromotedRestCard from "../utils/HOC/HOCPromotedRestCard/HOCPromotedRestCard";
import { swiggy_api_URL } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";

const ListComponent = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [listOfFilterRestaurants, setListOfFilterRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);

  const WithPropmoRestaurantCard = HOCPromotedRestCard(RestaurantCard);

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

  // console.log("listOfFilterRestaurants", listOfFilterRestaurants);

  // console.log("loading", loading);

  // const onChangeSearch = () => {
  //   let searchData = listOfRestaurants.filter((item) =>
  //     item?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  //   );
  //   setListOfRestraunt(searchData);
  // };

  console.log("before", listOfFilterRestaurants);

  return (
    <div className="mx-auto max-w-7xl justify-between p-6 lg:px-8">
      <div className="filter mb-4 flex gap-6">
        <div className="search-box">
          <button onClick={searchMethod} className="font-bold">Search</button>
          <input
            type="text"
            className="rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-gray-30 sm:text-sm sm:leading-6 ml-2"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
        </div>
        <button
          className="h-auto font-bold"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res?.info?.avgRatingString > 4
            );
            console.log("hi", filteredList);
            setListOfFilterRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-list flex flex-wrap gap-4 justify-between">
        {!loading ? (
          listOfFilterRestaurants.length > 0 ? (
            listOfFilterRestaurants.map((restaurant, index) => (
              <Link
                key={restaurant?.info?.id + index}
                to={`restaurant/${restaurant?.info?.id}`}
              >
                {restaurant?.info?.promoted ? (
                  <WithPropmoRestaurantCard restaurant={restaurant?.info} />
                ) : (
                  <RestaurantCard restaurant={restaurant?.info} />
                )}
              </Link>
            ))
          ) : (
            <p>No data</p>
          )
        ) : (
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, index) => (
            <div className="save_property_box w-[32%] border-grey-300 border-[1px] rounded-lg overflow-hidden p-4" key={item + index}>
              <ShimmerComponent height={12} width={95} mb={12} radius={4} />
              <ShimmerComponent height={12} width={85} mb={12} radius={4} />
              <ShimmerComponent height={12} width={50} mb={16} radius={4} />
              <ShimmerComponent height={32} width={60} radius={4} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ListComponent;
