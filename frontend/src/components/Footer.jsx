import Lottie from "lottie-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import toTop from "../assets/animation/lottie-to-top.json";
import dropdown from "../assets/icons/dropdown.svg";
import { useProductStore } from "../stores/useProductStore";
import { Button } from "./Button";

export const Footer = () => {
  const [shopIsOpen, setShopIsOpen] = useState(false);
  const [accountIsOpen, setAccountIsOpen] = useState(false);
  const [customerIsOpen, setCustomerIsOpen] = useState(false);
  const [aboutIsOpen, setAboutIsOpen] = useState(false);

  const categories = useProductStore((state) => state.categories);

  const toggelShop = () => {
    setShopIsOpen(!shopIsOpen);
  };
  const toggelAccount = () => {
    setAccountIsOpen(!accountIsOpen);
  };
  const toggelCustomerService = () => {
    setCustomerIsOpen(!customerIsOpen);
  };
  const toggleAbout = () => {
    setAboutIsOpen(!aboutIsOpen);
  };

  const myAccount = [
    { name: "MY PAGE", to: "/mypage" },
    { name: "LOGIN", to: "/login" },
    { name: "REGISTER", to: "/signup" },
  ];

  return (
    <footer className="relative inset-x-0 bottom-0 flex flex-col items-center bg-blue pb-12 pt-10 font-montserrat leading-9 text-white">
      <div className="w-5/6 max-w-[300px]">
        <button
          className="flex w-full flex-row justify-between border-b"
          onClick={toggelShop}
        >
          <p className="mb-1 mt-2 text-xl font-bold tracking-wider">SHOP</p>
          <img
            src={dropdown}
            alt="Open dropdown menu"
            className="h-2 self-center"
          />
        </button>
        {shopIsOpen && (
          <ul className="ml-6 space-y-2 py-3 text-sm leading-7 tracking-wide">
            {categories.map((category, index) => (
              <li key={index} className="cursor-pointer">
                <NavLink
                  to={`/products?category=${category}`}
                  onClick={() => {
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                >
                  {category}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="w-5/6 max-w-[300px]">
        <button
          className="flex w-full flex-row justify-between border-b"
          onClick={toggelAccount}
        >
          <p className="mb-1 mt-2 text-xl font-bold tracking-wide">
            MY ACCOUNT
          </p>
          <img
            src={dropdown}
            alt="Open dropdown menu"
            className="h-2 self-center"
          />
        </button>
        {accountIsOpen && (
          <ul className="ml-6 space-y-2 py-3 text-sm leading-7 tracking-wide">
            {myAccount.map((account, index) => (
              <li key={index}>
                <NavLink to={account.to}>{account.name}</NavLink>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="w-5/6 max-w-[300px]">
        <button
          className="flex w-full flex-row justify-between border-b"
          onClick={toggelCustomerService}
        >
          <p className="mb-1 mt-2 text-xl font-bold tracking-wide">
            CUSTOMER SERVICE
          </p>
          <img
            src={dropdown}
            alt="Open dropdown menu"
            className="h-2 self-center"
          />
        </button>
        {customerIsOpen && (
          <p className="w-full py-3 leading-6 tracking-wide">
            This is not a real web shop, but if it was, we&apos;d proably have
            the best customer service in the world!
          </p>
        )}
      </div>
      <div className="w-5/6 max-w-[300px]">
        <button
          className="flex w-full flex-row justify-between border-b"
          onClick={toggleAbout}
        >
          <p className="mb-1 mt-2 text-xl font-bold tracking-wide">ABOUT US</p>
          <img
            src={dropdown}
            alt="Open dropdown menu"
            className="h-2 self-center"
          />
        </button>
        {aboutIsOpen && (
          <>
            <p className="w-full py-3 leading-6 tracking-wide">
              This site was designed and developed by Mai, Sofie and Wen for our
              final project of the Web Development Bootcamp at Technigo
            </p>
            <div className="mt-3 text-center">
              <Button text="About us" navTo="/about-us" />
            </div>
          </>
        )}
      </div>
      <div>
        <h1 className="pt-10 text-center font-poppins text-5xl font-bold tracking-wider">
          Webify
        </h1>
        <p className="py-10 text-center font-lato text-xs">
          Copyright 2024 © Wen Z & Sofie FS & Mai K <br /> Technigo Bootcamp
          Final Project
        </p>
      </div>
      <Lottie
        animationData={toTop}
        loop={true}
        className="absolute bottom-3 right-3 h-16 w-16 cursor-pointer lg:bottom-6 lg:right-6 lg:h-20 lg:w-20"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        title="Back to top"
      />
    </footer>
  );
};
