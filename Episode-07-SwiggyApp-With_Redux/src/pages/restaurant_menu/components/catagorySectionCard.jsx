import React from "react";
import { useDispatch } from 'react-redux';
import { addCartItem } from "../../../redux/slices/cart/cartSlice";
import { ITEM_IMG_CDN_URL } from "../../../utils/constants";

const CatagorySectionCard = ({ catagoryCard }) => {
  const { name, price, defaultPrice, description, imageId } =
    catagoryCard || {};

  const dispatch = useDispatch();
  const AddCartItems = () => {
    dispatch(addCartItem(catagoryCard))
  };

  return (
    <li className="catagory_section border-b mb-5 pb-5 flex justify-between last-of-type:border-b-0">
      <div>
        <p className="font-semibold opacity-75"> {catagoryCard?.name}</p>
        <p className="opacity-75">
          ₹ {price ? price / 100 : defaultPrice / 100}
        </p>
        <p className="text-gray-400 opacity-75 mt-4">{description}</p>
      </div>
      <div className="min-w-[118px] w-[118px] h-24 rounded-md overflow-hidden relative">
        <img
          src={ITEM_IMG_CDN_URL + imageId}
          alt=""
          className="w-full h-full object-cover"
        />

        <button
          className="absolute bottom-0 left-[12] bg-white rounded-md text-green-600 w-[94] h-[34] font-semibold text-xs border border-gray-200 shadow-md"
          onClick={AddCartItems}
        >
          ADD +
        </button>
      </div>
    </li>
  );
};
export default CatagorySectionCard;
