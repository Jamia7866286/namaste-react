import React, { useEffect, useState } from "react";

export const HomeFilterSelection = ({
  facetInfoItem,
  filterData,
  selectedItems,
  setSelectedItems,
  index
}) => {
  const [isChecked, setIsChecked] = useState(false);

  
  // we can apply filer for single select by name
  const isItemAvailable = selectedItems?.some(
    (item) => item?.id === facetInfoItem?.id
    );
    
    const addSelectedItem = () => {
      if (isItemAvailable) {
        setSelectedItems((prev) => prev.filter((item) => item.id !== facetInfoItem?.id));
        setIsChecked(false);
      } else {
        setSelectedItems((prev) => [...prev, facetInfoItem]);
        setIsChecked(true);
      }
    };
    console.log("filterData", filterData);
    console.log("selectedItems", selectedItems);

  useEffect(() => {
    if (isItemAvailable) {
      setIsChecked(true);
    }
  }, []);

  return (
    <>
      {filterData?.selection == "SELECT_TYPE_MULTISELECT" ? (
        <lable className="flex gap-2 pt-5" for={filterData?.label+index}>
          <input
            type="checkbox"
            id={filterData?.label+index}
            className="border-gray-300 rounded h-5 w-5 cursor-pointer"
            name={filterData?.label}
            onChange={() => addSelectedItem()}
            checked={isChecked}
            value={facetInfoItem?.id}
          />
          {facetInfoItem?.label}
        </lable>
      ) : (
        <lable className="flex gap-2 pt-5" for={filterData?.label+index}>
          <input
            type="radio"
            id={filterData?.label+index}
            className="border-gray-300 rounded h-5 w-5 cursor-pointer"
            name={filterData?.label}
            onChange={() => addSelectedItem()}
            checked={isChecked}
            value={facetInfoItem?.id}
          />
          {facetInfoItem?.label}
        </lable>
      )}
    </>
  );
};
