import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/custom_hooks/useOnlineStatus/useOnlineStatus";
const HeaderComponent = () => {

  const onlineStatus = useOnlineStatus()

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online {onlineStatus? '🟢':'🔴'}</li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li>
            <Link to={"/grocery"}>Grocery List</Link>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
