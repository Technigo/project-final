import glimLogo from "/glimSmall.svg";
import shoppingCart from "/shoppingCart.svg";
import userIcon from "/userIcon.svg";
import burgerMenu from "/burgerMenu.svg";

export const Navigation = () => {
  return (
    <div className="flex bg-background-lavender">
      <p className="text-white font-extrabold text-lg">Sign In</p>
      <img className="w-20" src={glimLogo} alt="glim logo" />
      <img src={shoppingCart} alt="Shopping cart" className="w-6" />
      <img src={userIcon} alt="Profile" className="w-6" />
      <img src={burgerMenu} alt="Menu" className="w-6 " />
    </div>
  );
};
