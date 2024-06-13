import CustomerGreeting from "./CustomerGreeting";
import ProfileSection from "./ProfileSection";
import ShoppingCartSection from "./ShoppingCartSection";
import Outro from "./Outro";
import { AuthProvider } from "../../context/AuthContext";

const ProfilePage = () => {
  return (
    <AuthProvider>
      <div>
        <CustomerGreeting />
        <ProfileSection />
        <ShoppingCartSection />
        <Outro />
      </div>
    </AuthProvider>
  );
};

export default ProfilePage;
