import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Checkout from "./components/Checkout/Checkout";
import "./App.css";
import { useEffect } from "react";
import Sigin from "./components/Signin/Sigin";
import { auth } from "./firebase";
import { Provider } from "react-redux";
import store from "./reduxStore";
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
          </Routes>
        </div>
      </Provider>
    </BrowserRouter>
  );
};
export default App;
