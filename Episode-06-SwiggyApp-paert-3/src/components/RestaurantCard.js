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

  return (
    <div className="card" style={{ backgroundColor: "#f0f0f0" }} id={id}>
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      {/* <h5>{cuisines.join(", ")}</h5> */}
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
    </div>
  );
};

export default RestaurantCard;
