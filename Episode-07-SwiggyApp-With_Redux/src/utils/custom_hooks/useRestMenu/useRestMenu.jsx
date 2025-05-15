import { useEffect, useState } from "react";
import { MENU_ITEM } from '../../constants';

 const useRestMenu = (resId) => {

    const [restMenu, setRestMenu] = useState(null);

    useEffect(() => {
        const RestaurantCardDetailsFetch = async () => {
          try {
            // let res = await fetch(`${MENU_ITEM}${resId}`);
            let res = await fetch(`${MENU_ITEM}${resId}`);
            
            let result = await res.json();
            setRestMenu(result?.data?.cards);
          } catch (error) {
            console.log(error);
          }
        };
        RestaurantCardDetailsFetch();
      }, []);
  return restMenu
}


export default useRestMenu