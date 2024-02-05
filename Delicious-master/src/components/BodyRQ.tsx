import { useQuery } from '@tanstack/react-query'
import React from "react"
import SkeletonRestaurantCard from "../Shimmer/SkeletonRestaurantCard"
import * as TYPES from "../utils/interfaces"
import useFetchRestaurants from "../utils/useFetchRestaurants"
import useOnlineStatus from "../utils/useOnlineStatus"
import CuisineBanner from "./CuisineBanner"
import RestaurantList from "./RestaurantList"
import TopicalBanner from "./TopicalBanner"

const BodyRQ = () => {
    const { isLoading, data, isError, error } = useQuery({
        queryKey: ['restaurantsList'],
        queryFn: useFetchRestaurants
    })

    console.log("restaurantsList data",data)

    const { onlineStatus } = useOnlineStatus()
    if (onlineStatus.isOnline === false) {
        return <h1>Looks like you are offline, please check your internet connection</h1>
    }

    return isError ?
        <div>Oops! Something went wrong!!
            {typeof error === 'string' && error}
        </div>
        : isLoading ?
            <SkeletonRestaurantCard />
            :
            (
                <div className="bg-slate-50 h-full">
                    {data?.data?.cards?.map(dataCard =>
                        dataCard.card?.card?.id === TYPES.MainCardID.restaurant_grid_listing ?
                            <RestaurantList key={dataCard.card.card.id} card={dataCard.card.card} offset={data.data.pageOffset} />
                            : dataCard.card.card.id === TYPES.MainCardID.topical_banner ?
                                <TopicalBanner key={dataCard.card.card.id} card={dataCard.card.card.imageGridCards} />
                                : dataCard.card.card.id === TYPES.MainCardID.whats_on_your_mind &&
                                <CuisineBanner key={dataCard.card.card.id} card={dataCard.card.card.imageGridCards} />
                    )}
                </div>

            )
}

export default BodyRQ