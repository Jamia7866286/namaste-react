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


  export const MENU_ITEM = 'https://api.allorigins.win/raw?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Fmenu%2Fpl%3Fpage-type%3DREGULAR_MENU%26complete-menu%3Dtrue%26lat%3D29.94780%26lng%3D78.16280%26restaurantId%3D'




  // new constants
  export const CLOUDINARY_URL = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/';



// export const RESTAURANT_API = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.560323&lng=77.279235&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
export const RESTAURANT_API = 'https://api.allorigins.win/raw?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D28.560323%26lng%3D77.279235%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING'


export const BASE_URL = 'http://localhost:3000'