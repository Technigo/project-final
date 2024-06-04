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
    <footer className="bg-blue pt-5 leading-8 text-white">
      <div>
        <button className="ml-3" onClick={toggelShop}>
          SHOP
        </button>
        {shopIsOpen && (
          <ul className="ml-6 leading-7">
            {categories.map((category, index) => (
              <li key={index} className="dropdown-item">
                {category}
              </li>
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
              <li key={index} className="dropdown-item">
                {account}
              </li>
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
        <button className="ml-3 " onClick={toggleAbout}>
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
        <h1 className="py-7 text-center font-semibold">webify</h1>
        <p className="py-7 text-center font-light">
          Copyright 2024 © Wen Z & Sofie FS & Mai K Technigo Bootcamp Final
          Project
        </p>
      </div>
    </footer>
  );
};

//border-b-white