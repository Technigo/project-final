import ProfileSection from "./ProfileSection";
import ShoppingCartSection from "./ShoppingCartSection";
import OrderHistory from "./OrderHistory";
import Outro from "./Outro";

const ProfilePage = () => {
  return (
    <div>
      <ProfileSection />
      <ShoppingCartSection />
      <OrderHistory />
      <Outro />
    </div>
  );
};

export default ProfilePage;
