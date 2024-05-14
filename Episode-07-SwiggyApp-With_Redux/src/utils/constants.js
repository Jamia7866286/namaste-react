export const LOGO_URL =
  "https://play-lh.googleusercontent.com/A8jF58KO1y2uHPBUaaHbs9zSvPHoS1FrMdrg8jooV9ftDidkOhnKNWacfPhjKae1IA";

// Image CDN URL for Restaurant card
export const IMG_CDN_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

// Image CDN URL for Restaurant Menu
export const ITEM_IMG_CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";

// Swiggy API to get Restaurant data with corsproxy
// export const swiggy_api_URL =
//   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.560323&lng=77.279235&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

// Swiggy API to get Restaurant Menu data with corsproxy
export const swiggy_menu_api_URL =
  "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=";

// shimmer card unit
export const shimmer_card_unit = 20;

// shimmer Menu card unit
export const shimmer_menu_card_unit = 4;

// Github - username
export const Github_UserName = "ChetanNada";
export const Github_Repository_Name = "Namaste-React";

// Github API for User
export const Github_API_User = "https://api.github.com/users/";

// Social Media Links
export const Linkedin_Link = "https://www.linkedin.com/in/chetannada/";
export const Twitter_Link = "https://twitter.com/ChetanNada";
export const Github_Link = "https://github.com/chetannada";
export const Email_Link = "mailto:call2chetannada@gmail.com";

// Github Authorization Token
export const options = {
  method: "GET",
  headers: {
    Authorization: "",
  },
};

// menu items api card type key
export const MENU_ITEM_TYPE_KEY =
  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
export const RESTAURANT_TYPE_KEY =
  "type.googleapis.com/swiggy.presentation.food.v2.Restaurant";


  export const MENU_ITEM = 'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.560323&lng=77.279235&restaurantId='




  // new constants
  export const CLOUDINARY_URL = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/';


  // export const RESTAURANT_API_old = 'https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.979568962372062&lng=77.50290893018244&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING&__fetch_req__=true'

export const RESTAURANT_API = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.560323&lng=77.279235&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'

export const BASE_URL = 'http://localhost:3000'