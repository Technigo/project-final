import CustomerGreeting from "./CustomerGreeting";
import ProfileSection from "./ProfileSection";
import ShoppingCartSection from "./ShoppingCartSection";
import Outro from "./Outro";
import { useAuth } from "../../context/AuthContext";

const ProfilePage = () => {
  const { username } = useAuth();

  return (
    <div>
      <CustomerGreeting />
      <ProfileSection />
      <ShoppingCartSection />
      <Outro />
    </div>
  );
};

export default ProfilePage;
