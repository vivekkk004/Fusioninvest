import React from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  return (
    <div className="orders">
      <div className="no-orders">
        <p>You haven't placed any orders today</p>

        <Link to={"/http://localhost:3002/newOrder"} className="btn">
          Get started
        </Link>
      </div>
    </div>
  );
};

export default Orders;