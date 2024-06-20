import { useUserStore } from "../store/useUserStore";
import { useProductsStore } from "../store/useProductsStore";
import { useState } from "react";
import Lottie from "lottie-react";
import animation from "../assets/animation-success.json";

export const WelcomeMessage = () => {
  const { user, loggedIn, signedUp, automaticLogOut, loggedOut } =
    useUserStore();
  const { paymentSuccessful } = useProductsStore();

  //const [ open, setOpen ] = useState(true)

  const getTitleMessage = () => {
    if (paymentSuccessful) return "Woho! Great success.";
    if (loggedIn && user) return `Welcome ${user.user.firstname}`;
    if (signedUp) return "Your signup was successful";
    if (loggedOut) return "You have been logged out";
    if (automaticLogOut) return "You have been automatically logged out";

    return "";
  };

  const getDescriptionMessage = () => {
    if (paymentSuccessful)
      return "This website is a test e-commerce, thank you for trying it out.";
    if (loggedIn) return "You have been successfully logged in";
    if (signedUp)
      return "Proceed to login to see your personal recommendations";
    if (loggedOut) return `See you later!`;
    if (automaticLogOut)
      return "Please log in again if you want your personal recommendations";
    return "";
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-overlay backdrop-blur-sm flex items-center justify-center z-50">
      <div className="w-fill mx-20 rounded-lg bg-login border-main-red border-opacity-50 backdrop-blur-sm p-8 relative flex justify-between">
        <div className="font-heading text-text-light">
          <h2 className="text-xl mb-4">{getTitleMessage()}</h2>
          <p className="text-sm">{getDescriptionMessage()}</p>
        </div>
        <Lottie
          animationData={animation}
          loop={false}
          autoPlay
          style={{ width: 100, height: 100 }}
        />
      </div>
    </div>
  );
};
