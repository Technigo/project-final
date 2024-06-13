import CustomerGreeting from "./CustomerGreeting";
import ProfileSection from "./ProfileSection";
import ShoppingCartSection from "./ShoppingCartSection";
import Outro from "./Outro";

const ProfilePage = () => {
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
