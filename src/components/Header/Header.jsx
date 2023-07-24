import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartCheckoutTwoToneIcon from "@mui/icons-material/ShoppingCartCheckoutTwoTone";
import "./Header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { signOut } from "../../userSlice";
import { signOut as signOutUser } from "firebase/auth";
import { auth } from "../../firebase";
const Header = () => {
  const dispatch = useDispatch();
  const addedProducts = useSelector((state) => state.addedProduct.value);
  const userStatus = useSelector((state) => state.user.value);
  const handleAuth = () => {
    signOutUser(auth);
    userStatus && dispatch(signOut(null));
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
        <Link to={!userStatus && "/signin"}>
          <div onClick={handleAuth} className="header-option">
            <span className="header-option-line1">
              Hello, {userStatus ? userStatus.email.split("@")[0] : "guest"}
            </span>
            <span className="header-option-line2">
              {userStatus ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header-option">
          <span className="header-option-line1">Returns</span>
          <span className="header-option-line2">& Orders</span>
        </div>
        <Link to="/checkout">
          <div className="header-basket">
            <ShoppingCartCheckoutTwoToneIcon />
            <span className="header-basketCount header-option-line2">
              {addedProducts.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
