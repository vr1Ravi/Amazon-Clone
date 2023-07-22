import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import "./Header.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AddedProductContext from "../../AddedProductContext";
import { auth } from "../../firebase";
const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const [addedProductState, _] = useContext(AddedProductContext);
  // console.log(addedProductState);
  const userInfo = JSON.parse(localStorage.getItem("user"));
  let user = userInfo?.email.split("@")[0];
  const handleAuth = async () => {
    (await user) && localStorage.removeItem("user");
    await auth.signOut();
    user = null;
  };
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
        <Link to={!user && "/signin"}>
          <div onClick={handleAuth} className="header-option">
            <span className="header-option-line1">Hello, {user}</span>
            <span className="header-option-line2">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header-option">
          <span className="header-option-line1">Returns</span>
          <span className="header-option-line2">& Orders</span>
        </div>
        <Link to="/checkout">
          <div className="header-basket">
            <ShoppingBasketIcon />
            <span className="header-basketCount header-option-line2">
              {addedProductState.addProductCount}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
