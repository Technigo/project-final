import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../stores/useUserStore";

import cart from "../assets/cart.svg";
import user from "../assets/human-icon.svg";

const navigation = [
  { name: "Home", to: "/" },
  { name: "Shop", to: "/products" },
  // { name: "Blog", to: "#" },
  { name: "About", to: "/about-us" },
];

export const Header = () => {
  const navigate = useNavigate();
  const { shoppingCart, accessToken, loading } = useUserStore((state) => ({
    shoppingCart: state.cart,
    accessToken: state.accessToken,
    loading: state.loading,
  }));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-blue text-white">
      <nav
        className="flex items-center justify-between p-6 font-poppins lg:px-8"
        aria-label="Global"
      >
        <div className="flex">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Webify</span>
            <h3 className="font-bold">Webify</h3>
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-14">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className="text-lg font-semibold hover:text-light-gray"
            >
              {item.name}
            </NavLink>
          ))}
        </div>
        <div className="flex flex-row gap-6">
          <img
            className="cursor-pointer"
            src={user}
            alt="user account"
            onClick={() => {
              accessToken ? navigate("/mypage") : navigate("/login");
            }}
          />
          <div
            className="relative cursor-pointer"
            onClick={() => navigate("/cart")}
          >
            <img src={cart} alt="shopping cart" />
            <div className="absolute -top-2 left-3 flex h-4 w-4 items-center justify-center rounded-[50%] bg-red">
              <p className="text-[10px]">{shoppingCart.length}</p>
            </div>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <DialogPanel className="fixed right-0 top-[80px] z-50 w-full overflow-y-auto bg-light-gray px-6 py-6">
          <div className="flex items-center justify-end">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon
                className="h-6 w-6 text-button-blue"
                aria-hidden="true"
              />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 text-lg">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.to}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:text-blue"
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};
