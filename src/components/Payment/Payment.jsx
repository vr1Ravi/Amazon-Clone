import Header from "../Header/Header";
import "./Payment.css";
import { useSelector } from "react-redux";
import Checkoutproduct from "../Checkout/Checkoutproduct";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";
import axios from "../../axios";
import { useNavigate } from "react-router-dom";
const Payment = () => {
  const user = useSelector((state) => state.user.value);
  const addedProducts = useSelector((state) => state.addedProduct.value);
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setClientSecret] = useState(true);
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const total = addedProducts.reduce(
    (accumulator, item) => accumulator + parseFloat(item.price),
    0
  );
  useEffect(() => {
    async function getClientSecret() {
      const res = await axios({
        method: "post",
        url: `/paymets/create?total=?${total * 100}`,
      });
      setClientSecret(res.data.clientSecret);
    }
    getClientSecret();
  }, [addedProducts]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // paymentIntent = payment confirmation
        setSucceeded(true);
        setError(null);
        setProcessing(false);
        navigate("/orders");
      });
  };
  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };
  return (
    <>
      {" "}
      <Header />
      <div className="payment">
        <div className="payment-container">
          <h1>
            Checkout ({<Link to="/checkout">{addedProducts?.length}</Link>}{" "}
            items)
          </h1>
          {/* Payment Section */}
          <div className="payment-section">
            <div className="payment-title">
              <h3>Delivery Address</h3>
            </div>
            <div className="payment-address">
              <p>{user?.email}</p>
              <p>123 react lane</p>
              <p>Los Angeles, CA</p>
            </div>
          </div>
          {/* Review - items */}
          <div className="payment-section">
            <div className="payment-title">
              <h3>Review Items and delivery</h3>
            </div>
            <div className="payment-items">
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
          {/* Payment method */}
          <div className="payment-section">
            <h3>Payment Method</h3>
            <div className="payment-details">
              {/* Stripe magic will go */}
              <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChange} />
                <div className="payment-priceBox">
                  <CurrencyFormat
                    renderText={(value) => (
                      <>
                        <h3> Total: {value}</h3>
                      </>
                    )}
                    decimalScale={2}
                    value={total}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                  <button disabled={processing || disabled || succeeded}>
                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                  </button>
                </div>
                {/* Error */}
                {error && <div>{error}</div>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
