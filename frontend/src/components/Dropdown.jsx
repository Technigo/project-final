import { useState } from "react";

export const Dropdown = ({ text, content }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <div className="flex flex-col items-center">
      <button
        className="flex w-96 flex-row items-center justify-between border-b-2 border-light-blue pb-2 pl-2 text-light-blue"
        onClick={toggleDropdown}
      >
        <p className="mb-1 mt-2 font-montserrat text-xl font-bold tracking-wider lg:text-2xl">
          {text}
        </p>
        <svg
          width="22"
          height="13"
          viewBox="0 0 22 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${dropdownOpen ? "rotate-180" : null} mr-2 w-4 stroke-light-blue`}
        >
          <path d="M21 1L11 11L1 1" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
      <div
        className={`${dropdownOpen ? "flex flex-col justify-center" : "hidden"} w-96`}
      >
        {content}
      </div>
    </div>
  );
};
