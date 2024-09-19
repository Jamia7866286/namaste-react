import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { FiHelpCircle } from "react-icons/fi";
import { LuSearch } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import LOGO from "../assests/images/logo-no-background.png";
import useOnlineStatus from "../utils/custom_hooks/useOnlineStatus/useOnlineStatus";
import { logout } from "../redux/slices/auth/authSlice";
import { useEffect } from "react";
import { isLogIn } from "../utils/commonFunctions";

const HeaderComponent = () => {
    const onlineStatus = useOnlineStatus();
    const authData = useSelector((store) => store.auth);
    const cartItemsStore = useSelector((store) => store.cart.item);
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const Logout = ()=>{
        localStorage.setItem('authToken', '')
        dispatch(logout({isAuthenticated:false}))
        navigate('/login')
    }

    useEffect(() => {
        isLogIn(dispatch, navigate)
    }, []);

    return (
        <div className="relative">
            <div className="flex flex-row justify-between items-center shadow-md py-1 lg:px-36 px-12">
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
                            { authData.isAuthenticated ?
                                <span className="font-medium text-header">
                                    User Name
                                </span>
                                :
                                <span className="font-medium text-header" onClick={()=> navigate('login')}>
                                    Login
                                </span>
                            }

                        </button>
                        {authData.isAuthenticated &&
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
                                            onClick={Logout}
                                        >
                                            Logout
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        }
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
                            {cartItemsStore.length}{" "}
                        </div>
                    </li>
                </ul>
            </div>

            {onlineStatus !== null && (onlineStatus ? (
                    <div className="absolute w-full text-xs text-center animate-moveTopToDown z-[49]">
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
                ))
            }
        </div>
    );
};

export default HeaderComponent;
