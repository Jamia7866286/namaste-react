import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/slices/cart/cartSlice";
import CatagorySectionCard from "./restaurant_menu/components/catagorySectionCard";


const CartPage = () => {
  const cartItemsStore = useSelector((store) => store.cart.item);
  const dispatch = useDispatch()

  return (
    <div className="mt-10">
      <div className="text-center font-bold">
        <h3 className="text-lg">Cart</h3>
        <button className="text-sm bg-black text-white rounded p-2 inline-block mx-auto w-40 mt-4 cursor-pointer" onClick={()=> dispatch(clearCart())}>
          Clear Cart 
        </button>
      </div>
      <div className="Cart_Wrapper w-1/2 mx-auto">
        <ul className="pt-5">
          {cartItemsStore?.length > 0
            ? cartItemsStore?.map((catagoryCard, index) => (
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
