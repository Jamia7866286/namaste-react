import { RESTAURANT_API } from '../../utils/constants';
import { Fetch } from "../Fetch";

export const useRestaurantList = async () => {
  try {
    const response = await Fetch(RESTAURANT_API);
    let result = await response.json();
    if (response.status >= 200 && response.status <= 202) {
      return result;
    } else {
      throw new Error(result?.message);
    }
  } catch (error) {
    console.log("API error",error)
  }
};
