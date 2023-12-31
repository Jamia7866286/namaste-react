import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constants";

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

  let rate = 2;

  return (
    <>
      {/* <div className="card" style={{ backgroundColor: "#f0f0f0" }} id={id}>
        <img src={IMG_CDN_URL + cloudinaryImageId} />
        <h3>{name}</h3>
        <h5>{cuisines.join(", ")}</h5>
        <h5>{areaName}</h5>
        <span>
          <h4
            style={
              avgRatingString < 4
                ? { backgroundColor: "var(--light-red)" }
                : avgRatingString === "--"
                ? { backgroundColor: "white", color: "black" }
                : { color: "white" }
            }
          >
            <i className="fa-solid fa-star"></i>
            {avgRatingString}
          </h4>
          <h4>•</h4>
          <h4>{sla?.lastMileTravelString ?? "2.0 km"}</h4>
          <h4>•</h4>
          <h4>{costForTwo ?? "₹200 for two"}</h4>
        </span>
        <div className={style.stars}>
          {[1, 2, 3, 4, 5].map((item, index) => (
            <IconoGraphy
              key={item + index}
              iconclassName={`icon-star-filled ${
                6 - item <= rate ? style.active : ""
              }`}
            />
          ))}
        </div>
      </div> */}

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
            <h5>{cuisines.join(", ")}</h5>
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
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
              {avgRatingString}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
            {costForTwo ?? "₹200 for two"}
            </span>
            <Link
              to='/'
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to cart
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantCard;


