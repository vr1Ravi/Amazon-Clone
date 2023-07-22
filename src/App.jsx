import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Checkout from "./components/Checkout/Checkout";
import "./App.css";
import { useEffect, useState } from "react";
import AddedProductContext from "./AddedProductContext";
import Sigin from "./components/Signin/Sigin";
import { auth } from "./firebase";
const App = () => {
  const addedProductState = useState({
    addedProduct: [],
    addProductCount: 0,
  });
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is ", authUser);
      authUser && localStorage.setItem("user", JSON.stringify(authUser));
    });
  }, []);
  return (
    <BrowserRouter>
      <AddedProductContext.Provider value={addedProductState}>
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Sigin />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </AddedProductContext.Provider>
    </BrowserRouter>
  );
};

export default App;
