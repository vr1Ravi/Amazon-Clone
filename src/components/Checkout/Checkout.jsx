import { Link } from "react-router-dom";
import Subtotal from "./Subtotal";
import "./Checkout.css";
import { useSelector } from "react-redux";
import Checkoutproduct from "./Checkoutproduct";
import Header from "../Header/Header";

const Checkout = () => {
  const addedProducts = useSelector((state) => state.addedProduct.value);

  return (
    <>
      <Header />
      <div className="checkout">
        <div className="checkout-left">
          <Link to="https://www.primevideo.com/offers/nonprimehomepage/ref=dvm_crs_in_s_gw_swm_dk_np_adhuras1">
            {" "}
            <img
              src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/AdhuraS1/400x39-SWM_NP._CB599788243_.jpg"
              alt="checkoutAd"
              className="checkout-ad"
            />
          </Link>

          <div>
            <h2 className="checkout-title">Shopping Cart</h2>
            {/* Basket */}

            {addedProducts &&
              addedProducts.map((product, idx) => (
                <Checkoutproduct
                  key={idx}
                  id={idx}
                  title={product.title}
                  price={product.price}
                  image={product.image}
                  rating={product.rating}
                />
              ))}
          </div>
        </div>
        <div className="checkout-right">
          <Subtotal />
        </div>
      </div>
    </>
  );
};

export default Checkout;
