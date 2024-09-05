import { useRestaurantList } from '../../api/Home/useRestaurantList';
import { ApiType, MainCardID } from '../../utils/HOC/interfaces';
import CuisineBanner from "./CuisineBanner";
import RestaurantCard from "./RestaurantCard";
import TopicalBanner from "./TopicalBanner";
import { HomeFilter } from './HomeFilter/HomeFilter';
import { useEffect, useState } from 'react';

const ListComponent = () => {
    const [apiData, setApiData] = useState([])
    const [selectedItems,setSelectedItems] = useState([]);
    const [cardData, setCardData] = useState([])

    const filterByRating = () => {
        const sortedByRating = [...cardData].sort((a, b) => b?.info?.avgRating - a?.info?.avgRating);
        console.log("sortedByRating", sortedByRating);
        setCardData(sortedByRating);
    };

    const filterByTime = ()=>{
        const sortedByTime = [...cardData].sort((a,b)=>  b?.info?.sla?.deliveryTime - a?.info?.sla?.deliveryTime)
        console.log("sortedByTime",sortedByTime)
        setCardData(sortedByTime);
    }

    const filterCardDataRatingAndAll = (filterType)=>{
        switch(filterType){
            case 'avgRating':
                filterByRating();
                break;
            case 'deliveryTime':
                filterByTime();
                break;
            default: 
                break;
        }
    }

    const FilterRatingTimeDisplay = ()=>{
        return (
            cardData?.map((restaurantItem, index)=>(
                <RestaurantCard currentCard={restaurantItem?.info} key={index} />
            )
        )
    )}

    const mapData = ()=>{
        apiData?.map((currentCard) => {
            const {id, gridElements} = currentCard?.card?.card;
            if(id === MainCardID.restaurant_grid_listing && gridElements?.infoWithStyle?.restaurants){
                setCardData(gridElements?.infoWithStyle?.restaurants);
            }
        })
    }

    // set api data
    useEffect(()=>{
        const fetchApi = async()=>{
            try{
                const data = await useRestaurantList();
                setApiData(data?.data?.cards)
            }
            catch(error){
                console.log(error);
            }
        }
        fetchApi();
    },[])

    useEffect(()=>{
        mapData();
    },[apiData])

    return (
        <div className="h-full">
            {apiData?.map((currentCard, index) => {
                    return (
                        currentCard?.card?.card?.id === MainCardID.whats_on_your_mind && <CuisineBanner currentCard={currentCard} key={index} />
                    )
                })
            }

            {apiData?.map((currentCard, index) => {
                    return (
                        currentCard?.card?.card?.id === MainCardID.top_brands_for_you && <TopicalBanner currentCard={currentCard} key={index} />
                    )
                })
            }
            
            <div className="w-9/12 m-auto mt-6 pb-10">
                {apiData?.map((currentCard, index) => {
                        return (
                            currentCard?.card?.card?.id === MainCardID.popular_restaurants_title && 
                            <div className="lg:text-2xl text-lg font-bold mb-4" key={index}>
                                {currentCard?.card?.card?.title}
                            </div>
                        )
                    })
                }

                {/* <SkeletonFilterRestaurants /> */}
                
                {apiData?.map((currentCard, index) => {
                        return (
                            currentCard?.card?.card?.['@type'] === ApiType.InlineViewFilterSortWidget &&  <HomeFilter FilterData={currentCard?.card?.card} selectedItems={selectedItems} setSelectedItems={setSelectedItems} filterCardDataRatingAndAll={filterCardDataRatingAndAll} key={index} />
                        )
                    })
                }
                

                <div className="grid lg:grid-cols-4 gap-10 items-start md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
                    {FilterRatingTimeDisplay()}
                </div>
                {/* {isFetchingNextPage && <SkeletonMoreRestaurants />} */}
                {/* {isSuccess && hasNextPage && <div ref={ref} />} */}
            </div>
        </div>
    );
};

export default ListComponent;
