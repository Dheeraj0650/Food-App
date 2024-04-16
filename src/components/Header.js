import { LOGO_URL } from "../Utilities/constants";

export default Header = () => {
  return (
    <div className="Header flex justify-between">
      <div className="logo-container">
        <img className="logo size-32 py-2" src={LOGO_URL} />
      </div>
      <div className="nav-items m-7">
        <ul className="font-bold flex *:mx-4">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
