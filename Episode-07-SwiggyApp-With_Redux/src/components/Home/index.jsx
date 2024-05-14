import {
    useQuery,
} from '@tanstack/react-query';
import { AiOutlineClose } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { useRestaurantList } from '../../api/Home/useRestaurantList';
import { ApiType, MainCardID } from '../../utils/HOC/interfaces';
import CuisineBanner from "./CuisineBanner";
import RestaurantCard from "./RestaurantCard";
import TopicalBanner from "./TopicalBanner";
import { HomeFilter } from './HomeFilter/HomeFilter';

const ListComponent = () => {
    const { isLoading, isError, data, error } = useQuery({
        queryKey: ['restaurantsList'],
        queryFn: useRestaurantList,
    })
    const {cards} = data?.data || []

    console.log("cards with filter",cards)

    return (
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
                {
                    cards?.map((currentCard) => {
                        return (
                            currentCard?.card?.card?.id === MainCardID.popular_restaurants_title && 
                            <div className="lg:text-2xl text-lg font-bold mb-4">
                                {currentCard?.card?.card?.title}
                            </div>
                        )
                    })
                }
                {/* <SkeletonFilterRestaurants /> */}
                {
                    cards?.map((currentCard) => {
                        return (
                            currentCard?.card?.card?.['@type'] === ApiType.InlineViewFilterSortWidget &&  <HomeFilter FilterData={currentCard?.card?.card} />
                        )
                    })
                }
                

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
    );
};

export default ListComponent;
