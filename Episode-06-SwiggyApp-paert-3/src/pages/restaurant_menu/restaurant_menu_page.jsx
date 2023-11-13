import React from "react";
import { useParams } from "react-router-dom";
import ShimmerComponent from "../../common/Shimmer/Shimmer";
import useRestMenu from "../../utils/custom_hooks/useRestMenu/useRestMenu";
import RestaurantCatagory from "./components/restaurantCatagory";

const RestaurantMenuPage = () => {
  const { resId } = useParams();
  const restMenu = useRestMenu(resId);

  const { name, cuisines, costForTwoMessage } =
    restMenu?.cards[0]?.card?.card?.info || {};

  // const { title, itemCards } =
  //   restMenu?.cards[2]?.groupedCard?.cardGroupMap.REGULAR.cards[2].card.card ||
  //   {};

  const filterCatagory =
    restMenu?.cards[2]?.groupedCard?.cardGroupMap.REGULAR?.cards.filter(
      (catagoryItem) =>
        catagoryItem?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(filterCatagory);
  return (
    <>
      {restMenu === null ? (
        <>
          <ShimmerComponent height={100} width={70} mb={20} />
          <ShimmerComponent height={50} width={50} />
        </>
      ) : (
        <div className="accordion_wrapper">
          <div className="text-center">
            <h1 className="font-bold my-4 text-2xl">{name}</h1>
            <p className="font-bold text-lg">
              {costForTwoMessage} - {costForTwoMessage}
            </p>
          </div>

          {/* Accordion by calgary wise */}
          <ul className="accordion_box">
            {filterCatagory?.length > 0
              ? filterCatagory.map((catagoryItem, index) => (
                  <RestaurantCatagory
                    key={index}
                    catagoryItem={catagoryItem?.card?.card}
                  />
                ))
              : ""}
          </ul>
        </div>
      )}
    </>
  );
};
export default RestaurantMenuPage;
