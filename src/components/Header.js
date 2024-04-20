import { LOGO_URL } from "../Utilities/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utilities/useOnlineStatus";

export default Header = () => {
  const onlineStatus = useOnlineStatus();

  return (
    <div className="Header flex justify-between bg-slate-300 shadow-lg">
      <div className="logo-container">
        <img className="logo size-24 py-2" src={LOGO_URL} />
      </div>
      <div className="nav-items m-7">
        <ul className="font-bold flex *:mx-4">
          <li> {onlineStatus ? <h1>online</h1> : <h1>offline</h1>}</li>
          <li>
            <Link to="/" className="no-underline text-black">
              Home
            </Link>
          </li>
          <li>
            <Link to="/About" className="no-underline text-black">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/Contact" className="no-underline text-black">
              Contact us
            </Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
