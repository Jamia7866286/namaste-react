import React from "react";
import CatagorySectionCard from "./catagorySectionCard";
// import style from './common.module.scss';

const RestaurantCatagory = ({ catagoryItem,openAccordion,setOpenAccordionIndex}) => {
  const { title, itemCards } = catagoryItem;

  return (
    <li className=" w-6/12 mx-auto bg-gray-50 shadow-lg p-4 my-4 rounded-md">
      <div
        className="accordion_header flex justify-between items-center cursor-pointer"
        onClick={()=>setOpenAccordionIndex()}
      >
        <h1 className="font-bold text-xl opacity-80">{title} ({itemCards.length})</h1>
        <span>{openAccordion ? '⬆️' : '⬇️'}</span>
      </div>
      {openAccordion && (
        <div className="accordion_body">
          <ul className="pt-5">
            {itemCards.length > 0
              ? itemCards.map((catagoryCard, index) => (
                  <CatagorySectionCard
                    key={catagoryCard?.card?.info?.id}
                    catagoryCard={catagoryCard?.card?.info}
                  />
                ))
              : ""}
          </ul>
        </div>
      )}
    </li>
  );
};

export default RestaurantCatagory;
