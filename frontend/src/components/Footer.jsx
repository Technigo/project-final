import dropdown from "../assets/dropdown.svg";
import { useState } from "react";

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
    <footer className="bg-blue pt-5 leading-9 text-white font-bold font-montserrat">
      <div>
        <button
          className="ml-3 flex w-60 flex-row border-b justify-between"
          onClick={toggelShop}
        >
          <h4 className="">SHOP</h4>
          <img src={dropdown} className="h-2 self-center" />
        </button>
        {shopIsOpen && (
          <ul className="ml-6 leading-7">
            {categories.map((category, index) => (
              <li key={index}>{category}</li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <button className="ml-3" onClick={toggelAccount}>
          MY ACCOUNT
        </button>
        {accountIsOpen && (
          <ul className="ml-6 leading-7">
            {myAccount.map((account, index) => (
              <li key={index}>{account}</li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <button className="ml-3" onClick={toggelCustomerService}>
          CUSTOMER SERVICE
        </button>
        {customerIsOpen && (
          <p className="ml-6">
            This is not a real web shop, but if it was, we'd proably have the
            best customer service in the world!
          </p>
        )}
      </div>
      <div>
        <button className="ml-3" onClick={toggleAbout}>
          ABOUT US
        </button>
        {aboutIsOpen && (
          <p className="ml-6">
            This site was designed and developed by Mai, Sofie and Wen for our
            final project of the Web Development Bootcamp at Technigo
          </p>
        )}
      </div>
      <div>
        <h1 className="py-7 text-center font-bold font-poppins">webify</h1>
        <p className="py-7 text-center text-xs font-lato">
          Copyright 2024 © <br /> Wen Z & Sofie FS & Mai K <br /> Technigo
          Bootcamp Final Project
        </p>
      </div>
    </footer>
  );
};

//border-b-white
