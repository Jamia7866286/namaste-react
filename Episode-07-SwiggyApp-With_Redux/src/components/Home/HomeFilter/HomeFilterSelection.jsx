import React, { useEffect, useState } from 'react'

export const HomeFilterSelection = ({facetInfoItem, filterData, selectedItems, setSelectedItems}) => {
    const [isChecked, setIsChecked] = useState(false)


    // we can apply filer for single select by name
    const isItemAvailable = selectedItems.some((item)=>item?.id === facetInfoItem?.id)

    const addSelectedItem = ()=>{
        if(isItemAvailable){
            setSelectedItems(prev => {
                return prev.filter(item => item.id !== facetInfoItem?.id)
            })
            setIsChecked(false)
        }
        else{
            setSelectedItems((prev)=>[...prev,facetInfoItem])
            setIsChecked(true)
        }
    }
    console.log("selectedItems",selectedItems)

    useEffect(()=>{
        if(isItemAvailable){
            setIsChecked(true)
        }
    },[])

    return (
        <lable className="flex gap-2 pt-5" for={facetInfoItem?.id}>
        {filterData?.selection == 'SELECT_TYPE_MULTISELECT' ? 
            <input type="checkbox" id={facetInfoItem?.id} className="border-gray-300 rounded h-5 w-5 cursor-pointer"
            onChange={()=>addSelectedItem()}
            checked={isChecked}
            />
            :
            <input type="radio" id={facetInfoItem?.id} className="border-gray-300 rounded h-5 w-5 cursor-pointer" name="singleSelect" onChange={()=>addSelectedItem()} checked={isChecked} />
        }
        {facetInfoItem?.label}

        </lable>
    )
}
