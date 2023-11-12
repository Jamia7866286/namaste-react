import React from "react";
import { useParams } from "react-router-dom";
import ShimmerComponent from "../common/Shimmer/Shimmer";
import useRestMenu from "../utils/custom_hooks/useRestMenu/useRestMenu";

const RestaurantMenuPage = () => {
  
  const {resId} = useParams();
  const restMenu = useRestMenu(resId);

  const { name, cuisines, costForTwoMessage } =
    restMenu?.cards[0]?.card?.card?.info || {};

  const { title, itemCards } =
    restMenu?.cards[2]?.groupedCard?.cardGroupMap.REGULAR.cards[2].card.card ||
    {};

  return (
    <>
      {restMenu === null ? (
        <>
          <ShimmerComponent height={100} width={70} mb={20} />
          <ShimmerComponent height={50} width={50} />
        </>
      ) : (
        <>
          <div>{name}</div>
          <div>{cuisines.join(" ")}</div>
          <div>{costForTwoMessage}</div>
          <br />
          <h3>Menu - {title}</h3>
          <br />
          <ul>
            {itemCards?.length > 0
              ? itemCards?.map((item) => (
                  <li key={item?.card?.info?.id}>
                    {item?.card?.info?.name} Rs -{" "}
                    {item?.card?.info?.price / 100}
                  </li>
                ))
              : ""}
          </ul>
        </>
      )}
    </>
  );
};
export default RestaurantMenuPage;
