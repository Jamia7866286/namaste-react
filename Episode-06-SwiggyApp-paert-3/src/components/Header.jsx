import { useContext } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import AuthContext from "../utils/context/authContext";
import useOnlineStatus from "../utils/custom_hooks/useOnlineStatus/useOnlineStatus";
const HeaderComponent = () => {
  const onlineStatus = useOnlineStatus();
  const { logInUser } = useContext(AuthContext);

  return (
    <>
      <header className="bg-white">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src={LOGO_URL} alt="" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <ul className="hidden lg:flex lg:gap-x-12">
            <li className="text-sm font-semibold leading-6 text-gray-900">
              Online {onlineStatus ? "🟢" : "🔴"}
            </li>
            <li>
              <Link
                to="/"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/about"}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to={"/grocery"}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Grocery List
              </Link>
            </li>
          </ul>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
               {logInUser}
            </a>
          </div>
        </nav>
      </header>
    </>
  );
};

export default HeaderComponent;
