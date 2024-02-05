import {
    useQuery,
} from '@tanstack/react-query';
import { AiOutlineClose } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { useRestaurantList } from '../../api/Home/useRestaurantList';
import { MainCardID } from '../../utils/HOC/interfaces';
import CuisineBanner from "./CuisineBanner";
import RestaurantCard from "./RestaurantCard";
import TopicalBanner from "./TopicalBanner";





const ListComponent = () => {
    const { isLoading, isError, data, error } = useQuery({
        queryKey: ['restaurantsList'],
        queryFn: useRestaurantList,
    })
    const {cards} = data?.data || []
    console.log("call data", cards)
    return (
        <>
            <div className="h-full">
                {
                    cards?.map((currentCard) => {
                        return (
                            currentCard?.card?.card?.id === MainCardID.whats_on_your_mind && <CuisineBanner currentCard={currentCard} />
                        )
                    })
                }

                {
                    cards?.map((currentCard) => {
                        return (
                            currentCard?.card?.card?.id === MainCardID.top_brands_for_you && <TopicalBanner currentCard={currentCard} />
                        )
                    })
                }
                
                <div className="w-9/12 m-auto mt-6 pb-10">
                    <div className="lg:text-2xl text-lg font-bold mb-4">
                    dummy  Restaurants with online food delivery dummy
                    </div>
                    {/* <SkeletonFilterRestaurants /> */}
                    <div>
                        <div className="relative flex flex-row space-x-4 text-black/75 mb-6 lg:text-sm text-xs">
                            <button
                                type="button"
                                className="flex flex-row space-x-1 items-center justify-center border border-[#E2E2E7] px-2 py-1 rounded-2xl shadow-md"
                            >
                                <span>Delivery Time</span>
                                <IoIosArrowDown
                                    color="black"
                                    size={20}
                                    className="mt-1"
                                />
                            </button>
                            <button
                                type="button"
                                className={`flex flex-row space-x-1 items-center justify-center border px-2 py-1 rounded-2xl shadow-md border-blackborder-[#E2E2E7]`}
                            >
                                <span>Ratings 4+</span>
                                <AiOutlineClose className="font-bold mt-[1px]" />
                            </button>
                            <button
                                type="button"
                                className="flex flex-row space-x-1 items-center justify-center border border-[#E2E2E7] px-2 py-1 rounded-2xl shadow-md"
                            >
                                <span>Pure Veg</span>
                                <AiOutlineClose className="font-bold mt-[1px]" />
                            </button>
                            <button
                                type="button"
                                className="flex flex-row space-x-1 items-center justify-center border border-[#E2E2E7] px-2 py-1 rounded-2xl shadow-md"
                            >
                                <span>Fast Delivery</span>
                                <AiOutlineClose className="font-bold mt-[1px]" />
                            </button>
                            <div className="absolute left-16 z-10 flex flex-col space-y-4 w-[175px] bg-white p-4 rounded-lg border font-medium text-black/60 shadow-lg">
                                <div className="flex flex-row-reverse flex-wrap justify-between">
                                    <input
                                        type="radio"
                                        id="relevance"
                                        className="w-3 h-3 my-auto form-radio checked:bg-red-600 text-red-600 "
                                    />
                                    <label htmlFor="relevance">
                                        Relevance (Default){" "}
                                    </label>
                                </div>
                                <div className="flex flex-row-reverse justify-between">
                                    <input
                                        type="radio"
                                        id="deliveryTime"
                                        className="w-3 h-3 my-auto form-radio checked:bg-red-600 text-red-600"
                                    />
                                    <label htmlFor="deliveryTime">
                                        Delivery Time
                                    </label>
                                </div>
                                <div className="flex flex-row-reverse justify-between">
                                    <input
                                        type="radio"
                                        id="rating"
                                        className="w-3 h-3 my-auto form-radio checked:bg-red-600 text-red-600 appearance-none"
                                    />
                                    <label htmlFor="rating">Rating</label>
                                </div>
                                <div className="flex flex-row-reverse justify-between">
                                    <input
                                        type="radio"
                                        id="lowToHigh"
                                        className="w-3 h-3 my-auto form-radio checked:bg-red-600 text-red-600 appearance-none"
                                    />
                                    <label htmlFor="lowToHigh">
                                        Cost: Low to High
                                    </label>
                                </div>
                                <div className="flex flex-row-reverse justify-between">
                                    <input
                                        type="radio"
                                        id="highToLow"
                                        className="w-3 h-3 my-auto form-radio checked:bg-red-600 text-red-600 appearance-none"
                                    />
                                    <label htmlFor="highToLow">
                                        Cost: High to Low
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-4 gap-10 items-start md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
                    {
                        cards?.map((currentCard) => {
                            const {id, gridElements} = currentCard?.card?.card;
                            const {restaurants} = gridElements?.infoWithStyle || {};
                            return (
                                id === MainCardID.restaurant_grid_listing && restaurants?.map((restaurantItem)=>(
                                    <RestaurantCard currentCard={restaurantItem?.info} />
                                ))
                            )
                        })
                    }
                    </div>
                    {/* {isFetchingNextPage && <SkeletonMoreRestaurants />} */}
                    {/* {isSuccess && hasNextPage && <div ref={ref} />} */}
                </div>
            </div>
        </>
    );
};

export default ListComponent;
