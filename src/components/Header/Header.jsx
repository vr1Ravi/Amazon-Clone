import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        {" "}
        <img
          className="header-logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        />
      </Link>

      <div className="header-search">
        <input className="header-searchInput" type="text" />
        <SearchIcon className="header-searchIcon" />
      </div>
      <div className="header-nav">
        <div className="header-option">
          <span className="header-option-line1">Hello</span>
          <span className="header-option-line2">Sign in</span>
        </div>
        <div className="header-option">
          <span className="header-option-line1">Returns</span>
          <span className="header-option-line2">& Orders</span>
        </div>
        <div className="header-option">
          <span className="header-option-line1">Hello</span>
          <span className="header-option-line2">Ravi</span>
        </div>
        <Link to="/checkout">
          <div className="header-basket">
            <ShoppingBasketIcon />
            <span className="header-basketCount header-option-line2">0</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
