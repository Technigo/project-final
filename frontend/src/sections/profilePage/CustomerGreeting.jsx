import "../../styling/sectionsStyling/profilePage/CustomerGreeting.css";
import { useAuth } from "../../context/AuthContext";

const CustomerGreeting = () => {
  const { username } = useAuth();

  console.log("Username in CustomerGreeting:", username);

  return (
    <div className="greetingContainer">
      <h2 className="greeting">
        {username ? `${username}'s Profile` : "Profile"}
      </h2>
    </div>
  );
};

export default CustomerGreeting;
