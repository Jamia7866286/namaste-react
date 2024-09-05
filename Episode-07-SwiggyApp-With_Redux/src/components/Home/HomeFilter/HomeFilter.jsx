import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { LuFilter } from "react-icons/lu";
import { HomeFilterSelection } from "./HomeFilterSelection";

export const HomeFilter = ({ FilterData, selectedItems, setSelectedItems, filterCardDataRatingAndAll }) => {
  const { facetList } = FilterData || {};
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("deliveryTime");
  const [filterData, setFilterData] = useState({});

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(()=>{
    facetList?.length>0 && facetList?.map((filterItem)=>(
      filterItem?.id === activeTab && setFilterData(filterItem)
    ))
  },[activeTab])

  return (
    <div className="relative flex flex-row space-x-4 text-black/75 mb-6 lg:text-sm text-xs">
      <button
        type="button"
        className="flex flex-row space-x-1 items-center justify-center border border-[#E2E2E7] px-2 py-1 rounded-2xl shadow-md"
        onClick={showModal}
      >
        <span>Filter</span>
        <LuFilter />
      </button>
      {/* <button
        type="button"
        className="flex flex-row space-x-1 items-center justify-center border border-[#E2E2E7] px-2 py-1 rounded-2xl shadow-md"
      >
        <span>Delivery Time</span>
        <IoIosArrowDown color="black" size={20} className="mt-1" />
      </button> */}
      <button
        type="button"
        className={`flex flex-row space-x-1 items-center justify-center border px-2 py-1 rounded-2xl shadow-md border-blackborder-[#E2E2E7]`}
        onClick={()=>filterCardDataRatingAndAll('avgRating')}
      >
        <span>Ratings 4+</span>
        <AiOutlineClose className="font-bold mt-[1px]" />
      </button>
      {/* <button
        type="button"
        className="flex flex-row space-x-1 items-center justify-center border border-[#E2E2E7] px-2 py-1 rounded-2xl shadow-md"
      >
        <span>Pure Veg</span>
        <AiOutlineClose className="font-bold mt-[1px]" />
      </button> */}
      <button
        type="button"
        className="flex flex-row space-x-1 items-center justify-center border border-[#E2E2E7] px-2 py-1 rounded-2xl shadow-md"
        onClick={()=>filterCardDataRatingAndAll('deliveryTime')}
      >
        <span>Fast Delivery</span>
        <AiOutlineClose className="font-bold mt-[1px]" />
      </button>
      {/* <div className="absolute left-16 z-10 flex flex-col space-y-4 w-[175px] bg-white p-4 rounded-lg border font-medium text-black/60 shadow-lg">
        <div className="flex flex-row-reverse justify-between">
          <input
            type="radio"
            id="relevance"
            className="w-3 h-3 my-auto form-radio checked:bg-red-600 text-red-600 "
          />
          <label htmlFor="relevance">Relevance (Default) </label>
        </div>
        <div className="flex flex-row-reverse justify-between">
          <input
            type="radio"
            id="deliveryTime"
            className="w-3 h-3 my-auto form-radio checked:bg-red-600 text-red-600"
          />
          <label htmlFor="deliveryTime">Delivery Time</label>
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
          <label htmlFor="lowToHigh">Cost: Low to High</label>
        </div>
        <div className="flex flex-row-reverse justify-between">
          <input
            type="radio"
            id="highToLow"
            className="w-3 h-3 my-auto form-radio checked:bg-red-600 text-red-600 appearance-none"
          />
          <label htmlFor="highToLow">Cost: High to Low</label>
        </div>
      </div> */}

      {isModalOpen && (
        <div
          id="default-modal"
          tabindex="-1"
          aria-hidden="true"
          className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 max-h-full bg_a !m-[0]"
        >
          <div className="relative p-4 w-full max-w-3xl max-h-full m-auto">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Terms of Service
                </h3>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="default-modal"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-4 md:p-5 space-y-4">
                <div className="md:flex max-h-[50vh]">
                  <ul className="flex-column space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0 min-w-[160px] overflow-auto">
                    {facetList?.length>0 && facetList?.map((filterItem,index)=>(
                      <li key={index}>
                        <button
                          className={` ${filterItem?.id === activeTab ? 'inline-flex items-center px-4 py-3 text-white bg-blue-700 rounded-lg active w-full dark:bg-blue-600' : 'inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white'}`}
                          onClick={()=>{
                            setActiveTab(filterItem?.id)
                          }}
                          type="button"
                        >
                          {filterItem?.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                  <div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full overflow-auto">
                    {<p className="uppercase">{filterData.subLabel}</p>}
                      {filterData?.facetInfo?.length>0 && filterData?.facetInfo?.map((facetInfoItem,index)=>(
                         <HomeFilterSelection key={facetInfoItem?.id+index} facetInfoItem={facetInfoItem} filterData={filterData} selectedItems={selectedItems} setSelectedItems={setSelectedItems}
                         index={index}
                         />
                      ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  onClick={handleOk}
                  data-modal-hide="default-modal"
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  I accept
                </button>
                <button
                  onClick={handleCancel}
                  data-modal-hide="default-modal"
                  type="button"
                  className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Decline
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
