import { useState } from "react";

import dropdown from "../assets/dropdown.svg";

export const Footer = () => {
  const [shopIsOpen, setShopIsOpen] = useState(false);
  const [accountIsOpen, setAccountIsOpen] = useState(false);
  const [customerIsOpen, setCustomerIsOpen] = useState(false);
  const [aboutIsOpen, setAboutIsOpen] = useState(false);

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

  const categories = [
    "ARTISTIC",
    "BEAUTY",
    "BUSINESS",
    "COLOR",
    "FASHION & STYLE",
    "HEALTH & WELLNESS",
    "RESTAURANTS & FOOD",
    "SPORTS",
    "TECH",
    "TRAVEL & ADVENTURE",
  ];

  const myAccount = ["MY PAGE", "LOGIN", "LOGOUT"];

  return (
    <footer className="inset-x-0 bottom-0 flex flex-col items-center bg-blue pt-6 font-montserrat leading-9 text-white">
      <div>
        <button
          className="ml-3 flex w-[300px] flex-row justify-between border-b"
          onClick={toggelShop}
        >
          <h4 className="mb-1 mt-2 text-xl font-bold tracking-wider">SHOP</h4>
          <img src={dropdown} className="h-2 self-center" />
        </button>
        {shopIsOpen && (
          <ul className="ml-6 space-y-2 py-3 text-sm leading-7 tracking-wide">
            {categories.map((category, index) => (
              <li key={index}>{category}</li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <button
          className="ml-3 flex w-[300px] flex-row justify-between border-b"
          onClick={toggelAccount}
        >
          <h4 className="mb-1 mt-2 text-xl font-bold tracking-wider">
            MY ACCOUNT
          </h4>
          <img src={dropdown} className="h-2 self-center" />
        </button>
        {accountIsOpen && (
          <ul className="ml-6 space-y-2 py-3 text-sm leading-7 tracking-wide">
            {myAccount.map((account, index) => (
              <li key={index}>{account}</li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <button
          className="ml-3 flex w-[300px] flex-row justify-between border-b"
          onClick={toggelCustomerService}
        >
          <h4 className="mb-1 mt-2 text-xl font-bold tracking-wider">
            CUSTOMER SERVICE
          </h4>
          <img src={dropdown} className="h-2 self-center" />
        </button>
        {customerIsOpen && (
          <p className="ml-6 w-[280px] py-3 leading-6 tracking-wide">
            This is not a real web shop, but if it was, we'd proably have the
            best customer service in the world!
          </p>
        )}
      </div>
      <div>
        <button
          className="ml-3 flex w-[300px] flex-row justify-between border-b"
          onClick={toggleAbout}
        >
          <h4 className="mb-1 mt-2 text-xl font-bold tracking-wider">
            ABOUT US
          </h4>
          <img src={dropdown} className="h-2 self-center" />
        </button>
        {aboutIsOpen && (
          <p className="ml-6 w-[280px] py-3 leading-6 tracking-wide">
            This site was designed and developed by Mai, Sofie and Wen for our
            final project of the Web Development Bootcamp at Technigo
          </p>
        )}
      </div>
      <div>
        <h1 className="py-7 text-center font-poppins text-5xl font-bold tracking-wider">
          webify
        </h1>
        <p className="py-7 text-center font-lato text-xs">
          Copyright 2024 © Wen Z & Sofie FS & Mai K <br /> Technigo Bootcamp
          Final Project
        </p>
      </div>
    </footer>
  );
};

//border-b-white
