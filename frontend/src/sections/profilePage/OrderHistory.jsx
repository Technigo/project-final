import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import "./styling/OrderHistory.css";

const orderHistory = () => {
  const { token } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(
          "https://project-final-rentals-api.onrender.com/api/orders",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch orders");
        }
        const data = await response.json();
        console.log("Fetched orders:", data);
        setOrders(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching orders:", error);
        setError(error.message || "Failed to fetch orders");
        setLoading(false);
      }
    };

    fetchOrders();
  }, [token]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="orderContainer">
      <div className="orderWrapper">
        <h2 className="orderTitle">Your Orders</h2>
        {orders.length === 0 ? (
          <p className="orderErrorText">No orders found.</p>
        ) : (
          <ul>
            {orders.map((order) => (
              <li className="orderList" key={order._id}>
                <p className="orderId">Order ID: {order._id}</p>
                <p className="orderItemsTitle">Items:</p>
                <ul className="orderItem">
                  {order.items.map((item) => (
                    <li key={item._id}>
                      {item.rental && item.rental.name ? (
                        <>
                          {item.rental.name} - Amount: {item.amount}
                        </>
                      ) : (
                        <p className="orderErrorText">
                          Rental name not available
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default orderHistory;
