import Header from "../Header/Header";
import "./Order.css";
import { useEffect, useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // export data from database;
  }, []);
  return (
    <>
      <Header />
      <div className="orders">
        <h1>Your Orders</h1>
      </div>
    </>
  );
};

export default Orders;
