import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerComponent from "../../common/Shimmer/Shimmer";
import useRestMenu from "../../utils/custom_hooks/useRestMenu/useRestMenu";
import RestaurantCatagory from "./components/restaurantCatagory";

const RestaurantMenuPage = () => {
  const { resId } = useParams();
  const restMenu = useRestMenu(resId);
  const [openAccordionIndex, setOpenAccordionIndex] = useState(null);

  const { name, costForTwoMessage } =
    restMenu?.data?.cards[2]?.card?.card?.info || {};

    console.log('restMenu',restMenu)

  const filterCatagory =
    restMenu?.data?.cards[4]?.groupedCard?.cardGroupMap.REGULAR?.cards.filter(
      (catagoryItem) =>
        catagoryItem?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    console.log('restMenu',restMenu, 'costForTwoMessage',costForTwoMessage)

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
                    openAccordion={index === openAccordionIndex ? true:false}
                    setOpenAccordionIndexMethod={()=>{
                      if (openAccordionIndex === index) {
                        setOpenAccordionIndex(null);
                      }
                      else{
                        setOpenAccordionIndex(index)
                      }
                    }}
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
