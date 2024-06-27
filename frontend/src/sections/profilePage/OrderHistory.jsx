import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import "../../styling/sectionsStyling/profilePage/OrderHistory.css";

const orderHistory = () => {
  const { token } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          "https://project-final-rentals-api.onrender.com/api/orders",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setOrders(response.data.orders);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch orders");
        setLoading(false);
      }
    };

    fetchOrders();
  }, [token]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="orderHistoryContainer">
      <h2 className="orderHistoryTitle">Your orders</h2>
      {orders.length === 0 ? (
        <p>You have no orders.</p>
      ) : (
        <ul className="orderHistoryList">
          {orders.map((order, index) => (
            <li key={index} className="orderItem">
              <h3>Order #{order._id}</h3>
              <ul>
                {order.items.map((item, idx) => (
                  <li key={idx}>{item.rental.name}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default orderHistory;
