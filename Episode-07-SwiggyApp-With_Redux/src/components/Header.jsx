import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { FiHelpCircle } from "react-icons/fi";
import { LuSearch } from "react-icons/lu";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import LoginPage from '../pages/Login/index';
import LOGO from "../assests/images/logo-no-background.png";
import useOnlineStatus from "../utils/custom_hooks/useOnlineStatus/useOnlineStatus";

const HeaderComponent = () => {
    const onlineStatus = useOnlineStatus();
    const cartData = useSelector((store) => store.cart.item);

    return (
        <>
            <div className="relative">
                <div className="flex flex-row justify-between items-center shadow-md py-1 lg:px-52 px-12">
                    <Link
                        to="/"
                        className="hover:transition hover:duration-250 hover:ease-in-out hover:scale-95"
                    >
                        <img src={LOGO} alt="" className="md:w-16 w-12" />
                    </Link>
                    <ul className="flex flex-row lg:space-x-8 space-x-4 font-medium lg:text-base text-sm text-header">
                        <li>
                            <Link
                                to="/search"
                                className="hover:text-red-600 flex flex-row items-center space-x-2"
                            >
                                <LuSearch size={20} className="" />
                                <span className="font-medium text-header">
                                    Search
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className="hover:text-red-600 flex flex-row items-center space-x-2"
                            >
                                <FiHelpCircle size={20} />
                                <span className="font-medium text-header">
                                    Help
                                </span>
                            </Link>
                        </li>
                        <li className="group/profile">
                            <button
                                type="button"
                                onClick={() => {}}
                                className="flex flex-row items-center hover:text-red-600"
                                role="userIcon"
                            >
                                <AiOutlineUser size={21} className="mt-[1px]" />
                                <span className="font-medium text-header">
                                    User Name
                                </span>
                            </button>
                            {/* {user && */}
                            <div className="hidden absolute group-hover/profile:block font-semibold z-10 w-40 p-4 bg-red-50 text-sm shadow-md">
                                <ul className="space-y-4">
                                    <li className="hover:font-bold">Profile</li>
                                    <li className="hover:font-bold">Orders</li>
                                    <li className="hover:font-bold">
                                        Favourites
                                    </li>
                                    <li className="hover:font-bold">
                                        <button
                                            type="button"
                                            onClick={() => {}}
                                        >
                                            Logout
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            {/* } */}
                        </li>
                        <li className="relative">
                            <Link
                                to={"/cart"}
                                className="flex flex-row items-center space-x-2 hover:text-red-600"
                            >
                                <AiOutlineShoppingCart size={20} className="" />
                                <span className="font-medium text-header">
                                    Cart
                                </span>
                            </Link>

                            <div
                                data-testid="cartQuantity"
                                className="absolute font-bold text-xs text-red-600 -top-[10px] left-4"
                            >
                                2{" "}
                            </div>
                        </li>
                    </ul>
                </div>

                {/* {onlineStatus ? (
                    <div className="absolute w-full text-xs text-center animate-moveTopToDown">
                        <div className="bg-green-500 py-1">
                            Connection established, please try refreshing the
                            page now.
                        </div>
                    </div>
                ) : (
                    <div className="absolute w-full text-xs text-center animate-moveTopToDown">
                        <div className=" bg-red-500 py-1 ">
                            Connection error! Please check your connection and
                            try again.
                        </div>
                    </div>
                )} */}
                {/* { */}
                {/* userLoginOrSignUp && */}
                <div
                    className={`fixed right-0 inset-y-0 h-screen z-20 bg-white shadow-2xl ${
                        // userLoginOrSignUp ?
                        "animate-moveRightToLeft"
                        //  :
                        // 'hidden animate-moveLeftToRight'
                    }  overflow-hidden`}
                >
                    {/* <LoginPage /> */}
                </div>
                {/* } */}
            </div>
        </>
    );
};

export default HeaderComponent;
