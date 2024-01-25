 import { AiFillStar } from "react-icons/ai";
import { PiDotOutlineFill } from "react-icons/pi";
import { CLOUDINARY_URL } from '../../utils/constants';

 const RestaurantCard = () => {
        return (
            <div data-testid='restaurantCard' className="flex flex-col justify-center items-start hover:transition hover:duration-250 hover:ease-in-out hover:scale-95">
                <img className='w-full h-[169px] rounded-lg mb-1 object-cover'
                    src={`${CLOUDINARY_URL + 'rng/md/carousel/production/186a71018df06ce2bea1db55086d32e4'}`} alt='restaurant-food' />
                <div className='font-bold text-lg truncate max-w-2xs text-restaurantName/75 ml-2'>Naseem</div>
                <div className='flex items-center font-bold ml-2 text-restaurantName/75'><AiFillStar color='green' className='mr-1/2' />4<PiDotOutlineFill size={18} /><span className='text-restaurantName/75'>23 mins</span></div>
                <div className='overflow-hidden break-words line-clamp-1 antialiased text-restaurantName/60 font-extralight font-cusines ml-2'>4</div>
                <div className='overflow-hidden break-words line-clamp-1 antialiased text-restaurantName/60 font-extralight font-cusines ml-2'>Jamia</div>
            </div>
        )
    
    }
    
    export default RestaurantCard