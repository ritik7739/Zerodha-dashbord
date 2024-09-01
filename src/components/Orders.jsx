import React, { useState, useEffect } from "react";
import axios from "axios";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios.get("https://dashboard-backend-1-5ets.onrender.com/allOrders").then((res) => {
      setAllOrders(res.data);
    });
  }, []);

  return (
    <>
      <h3 className="title">Orders ({allOrders.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Mode</th>
            </tr>
          </thead>
          <tbody>
            {allOrders.map((order, index) => (
              <tr key={index}>
                <td>{order._id}</td>
                <td>{order.name}</td>
                <td>{order.qty}</td>
                <td>{order.price.toFixed(2)}</td>
                <td>{order.mode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>Total Orders</h5>
          <p>{allOrders.length}</p>
        </div>
        <div className="col">
          <h5>Total Quantity</h5>
          <p>
            {allOrders.reduce((total, order) => total + order.qty, 0)}
          </p>
        </div>
        <div className="col">
          <h5>Total Investment</h5>
          <p>
            {allOrders
              .reduce((total, order) => total + order.price * order.qty, 0)
              .toFixed(2)}
          </p>
        </div>
      </div>
    </>
  );
};

export default Orders;
