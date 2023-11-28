import { useContext } from "react";
import { IMG_CDN_URL } from "../utils/constants";
import AuthContext from "../utils/context/authContext";

const RestaurantCard = (props) => {
  const {
    id,
    cloudinaryImageId,
    name,
    cuisines,
    areaName,
    sla,
    costForTwo,
    avgRatingString,
  } = props?.restaurant;

  const { logInUser } = useContext(AuthContext);

  let rate = 2;

  return (
    <>
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img
          className="rounded-t-lg"
          src={IMG_CDN_URL + cloudinaryImageId}
          alt="product image"
        />
        <div className="px-5 pb-5">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <h4>{cuisines.join(", ")}</h4>
          <p>{areaName}</p>
          <p>{sla?.lastMileTravelString ?? "2.0 km"}</p>
          <div className="flex items-center mt-2.5 mb-5">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </div>
            <span
              className={`bg-blue-100 ${
                avgRatingString >= 4 ? "text-blue-800" : "text-red-800"
              } text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 ${
                avgRatingString >= 4
                  ? "dark:text-blue-800"
                  : "dark:text-red-800"
              } ms-3`}
            >
              {avgRatingString}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              {costForTwo ?? "₹200 for two"}
            </span>
            <div className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Add to cart
            </div>
          </div>
        </div>
      </div>

      {/* {[1, 2, 3, 4, 5].map((item, index) => (
        <IconoGraphy
          key={item + index}
          iconclassName={`icon-star-filled ${
            6 - item <= rate ? style.active : ""
          }`}
        />
      ))} */}
    </>
  );
};

export default RestaurantCard;
