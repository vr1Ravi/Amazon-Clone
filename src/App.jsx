import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Checkout from "./components/Checkout/Checkout";
import "./App.css";
import { useEffect } from "react";
import Sigin from "./components/Signin/Sigin";
import { auth } from "./firebase";
import { Provider } from "react-redux";
import store from "./reduxStore";
import Payment from "./components/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./components/Orders/Orders";
const promise = loadStripe(
  "pk_test_51NXOCsSDqDdFPhppgMHIanqVYKcv20tIohu1eILeqvfigFYRfpVJPrwJx6771BCzgG2DD3o2rY5KohEx07vAAdxw00tpxYqNpa"
);
const App = () => {
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
    });
  }, []);
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Sigin />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/orders" element={<Orders />} />
            <Route
              path="/payment"
              element={
                <Elements stripe={promise}>
                  <Payment />{" "}
                </Elements>
              }
            />
          </Routes>
        </div>
      </Provider>
    </BrowserRouter>
  );
};
export default App;
