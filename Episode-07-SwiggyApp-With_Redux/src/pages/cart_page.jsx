import React from "react";
import { useSelector } from "react-redux";
import CatagorySectionCard from "./restaurant_menu/components/catagorySectionCard";

const CartPage = () => {
  const cartItemsStore = useSelector((store) => store.cart.item);

  console.log("cartItemsStore", cartItemsStore);
  return (
    <div className="mt-10">
      <div className="text-center font-bold">
        <h3 className="text-lg">Cart</h3>
        <h3 className="text-sm bg-black text-white rounded p-2 inline-block mx-auto w-40 mt-4 cursor-pointer">
          Clear Cart
        </h3>
      </div>
      <div className="Cart_Wrapper w-1/2 mx-auto">
        <ul className="pt-5">
          {cartItemsStore.length > 0
            ? cartItemsStore.map((catagoryCard, index) => (
                <CatagorySectionCard
                  key={catagoryCard?.id}
                  catagoryCard={catagoryCard}
                />
              ))
            : ""}
        </ul>
      </div>
    </div>
  );
};

export default CartPage;
