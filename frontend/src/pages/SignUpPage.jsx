import { useState } from "react";

export const SignUpPage = () => {
  const [activeSection, setActiveSection] = useState("sectionone");

  return (
    <>
      {activeSection === "sectionone" && (
        <section className="bg-main-red h-full flex flex-col items-center text-text-light pb-20 tablet:pb-0 laptop:flex-row laptop:pb-10 laptop:px-36">
          {" "}
          <img
            className="w-screen tablet:order-last laptop:rounded-3xl"
            src="signup.svg"
            alt="picture of a woman using skincare."
          ></img>
          <div className="w-full">
            <div className="flex flex-col items-center">
              <h2 className="text-2xl font-heading font-bold mt-10 tablet:mt-20">
                Sign Up
              </h2>
              <h3 className="text-xl font-heading font-medium mt-3">
                login Information
              </h3>
            </div>
            <form className="flex flex-col w-full px-10 tablet:px-36 laptop:pl-0 laptop:pr-12">
              <div className="flex flex-col w-full">
                <label
                  htmlFor="email"
                  className="text-text-dark font-heading font-semibold mt-8 tablet:block"
                >
                  Email:
                </label>
                <input
                  className="rounded-xl h-10 bg-bg-input tablet:block tablet:w-full"
                  id="email"
                ></input>
              </div>
              <div className="flex flex-col tablet:flex-row tablet:gap-5">
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="password"
                    className="text-text-dark font-heading font-semibold mt-8  "
                  >
                    Password:
                  </label>
                  <input
                    className="rounded-xl h-10 bg-bg-input "
                    id="password"
                  ></input>
                </div>
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="confirm"
                    className="text-text-dark font-heading font-semibold mt-8"
                  >
                    Confirm password:
                  </label>
                  <input
                    className="rounded-xl h-10 bg-bg-input "
                    id="confirm"
                  ></input>
                </div>
              </div>
              <button
                onClick={() => setActiveSection("sectiontwo")}
                className="bg-main-yellow h-8 w-28 self-center mt-14 rounded-3xl text-text-dark font-heading tablet:mb-20 tablet:self-end"
              >
                Next
              </button>
            </form>
          </div>
        </section>
      )}
      {activeSection === "sectiontwo" && (
        <section className="bg-main-red h-full flex flex-col items-center text-text-light px-10 pb-20 tablet:p-0">
          {" "}
          <h2 className="text-2xl font-heading font-bold mt-10">Sign Up</h2>
          <h3 className="text-xl font-heading font-medium mt-3">
            personal Information
          </h3>
          <form className="flex flex-col w-full tablet:px-36 tablet:pb-10">
            <div className="flex flex-col mt-8 tablet:flex-row tablet:gap-5">
              <div className="flex flex-col w-full">
                <label
                  htmlFor="firstname"
                  className="text-text-dark font-heading font-semibold"
                >
                  Firstname:
                </label>
                <input
                  className="rounded-xl h-10 bg-bg-input"
                  id="firstname"
                ></input>
              </div>
              <div className="flex flex-col w-full mt-2 tablet:mt-0">
                <label
                  htmlFor="lastname"
                  className="text-text-dark font-heading font-semibold"
                >
                  Lastname:
                </label>
                <input
                  id="lastname"
                  className="rounded-xl h-10 bg-bg-input"
                ></input>
              </div>
            </div>
            <div className="mt-10">
              <div className="flex flex-col tablet:flex-row tablet:gap-5">
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="address"
                    className="text-text-dark font-heading font-semibold"
                  >
                    Address:
                  </label>
                  <input
                    id="address"
                    className="rounded-xl h-10 bg-bg-input"
                  ></input>
                </div>
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="postal code"
                    className="text-text-dark font-heading font-semibold mt-2 tablet:mt-0"
                  >
                    Postal code:
                  </label>
                  <input
                    id="postal code"
                    className="rounded-xl h-10 bg-bg-input"
                  ></input>
                </div>
              </div>
              <div className="flex flex-col tablet:flex-row tablet:gap-5">
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="city"
                    className="text-text-dark font-heading font-semibold mt-2"
                  >
                    City:
                  </label>
                  <input
                    id="city"
                    className="rounded-xl h-10 bg-bg-input"
                  ></input>
                </div>
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="country"
                    className="text-text-dark font-heading font-semibold mt-2"
                  >
                    Country:
                  </label>
                  <input
                    id="country"
                    className="rounded-xl h-10 bg-bg-input"
                  ></input>
                </div>
              </div>
            </div>
            <button
              onClick={() => setActiveSection("sectionthree")}
              className="bg-main-yellow h-8 w-28 self-center mt-12 rounded-3xl text-text-dark font-heading tablet:mb-10 tablet:self-end"
            >
              Next
            </button>
          </form>
          <img
            className="hidden tablet:block tablet:w-screen"
            src="signup.svg"
            alt="picture of a woman using skincare."
          ></img>
        </section>
      )}
      {activeSection === "sectionthree" && (
        <section className="bg-light-yellow h-full flex flex-col items-center text-text-dark px-10 pb-20 tablet:px-0">
          <h2 className="text-2xl font-heading font-bold mt-20">
            Who are you?
          </h2>
          <h3 className="text-xl font-heading font-medium mt-8 text-center tablet:px-44">
            Personalize your account to get custom recommondations
          </h3>
          <form className="flex flex-col w-full mt-16 tablet:px-36">
            <div className="flex flex-col tablet:flex-row tablet:gap-5">
              <div className="flex flex-col w-full">
                <div className="flex">
                  <img src="skintype02.svg" alt="Icon of a face"></img>
                  <label
                    htmlFor="skin"
                    className="font-heading font-bold text-2xl mt-9 ml-5"
                  >
                    Skin:
                  </label>
                </div>
                <select
                  name="skintype"
                  id="skin"
                  className="mt-8 h-8 rounded-md font-heading font-bold pl-4 bg-bg-input appearance-none bg-no-repeat bg-arrow-select bg-right"
                >
                  <option
                    value="sensitive"
                    className="font-heading font-bold bg-bg-input"
                  >
                    Sensitive
                  </option>
                  <option
                    value="dry"
                    className="font-heading font-bold bg-bg-input"
                  >
                    Dry
                  </option>
                  <option
                    value="oily"
                    className="font-heading font-bold bg-bg-input"
                  >
                    Oily
                  </option>
                  <option
                    value="combination"
                    className="font-heading font-bold bg-bg-input"
                  >
                    Combination
                  </option>
                  <option
                    value="acne"
                    className="font-heading font-bold bg-bg-input"
                  >
                    Acne
                  </option>
                </select>
              </div>
              <div className="flex flex-col w-full mt-10 tablet:mt-0">
                <div className="flex">
                  <img src="hairtype02.svg" alt="Icon of hair"></img>
                  <label className="font-heading font-bold text-2xl mt-9 ml-5">
                    Hair:
                  </label>
                </div>
                <label
                  htmlFor="moisture"
                  className="font-heading font-bold text-xl mt-5"
                >
                  Moisture
                </label>
                <select
                  name="hair-moisture"
                  id="moisture"
                  className="mt-2 h-8 rounded-md font-heading font-bold pl-4 bg-bg-input appearance-none bg-no-repeat bg-arrow-select bg-right"
                >
                  <option
                    value="dry"
                    className="font-heading font-bold bg-bg-input"
                  >
                    Dry
                  </option>
                  <option
                    value="normal"
                    className="font-heading font-bold bg-bg-input"
                  >
                    Normal
                  </option>
                  <option
                    value="oily"
                    className="font-heading font-bold bg-bg-input"
                  >
                    Oily
                  </option>
                </select>
                <label
                  htmlFor="shape"
                  className="font-heading font-bold text-xl mt-5"
                >
                  Shape
                </label>
                <select
                  name="hair-shape"
                  id="shape"
                  className="mt-2 h-8 rounded-md font-heading font-bold pl-4 bg-bg-input appearance-none bg-no-repeat bg-arrow-select bg-right"
                >
                  <option
                    value="staight"
                    className="font-heading font-bold bg-bg-input"
                  >
                    Straight
                  </option>
                  <option
                    value="wavy"
                    className="font-heading font-bold bg-bg-input"
                  >
                    Wavy
                  </option>
                  <option
                    value="curly"
                    className="font-heading font-bold bg-bg-input"
                  >
                    Curly
                  </option>
                  <option
                    value="coils"
                    className="font-heading font-bold bg-bg-input"
                  >
                    Coils
                  </option>
                </select>
              </div>
            </div>
            <div className="flex flex-col tablet:flex-row tablet:gap-5">
              <div className="flex flex-col mt-10 w-full">
                <div className="flex">
                  <img
                    src="allergies02.svg"
                    alt="Icon of hand with allergies"
                  ></img>
                  <label
                    htmlFor="allergies"
                    className="font-heading font-bold text-2xl mt-9 ml-5"
                  >
                    Allergies:
                  </label>
                </div>
                <select
                  name="allergies"
                  id="allergies"
                  className="mt-8 h-8 rounded-md font-heading font-bold pl-4 bg-bg-input appearance-none bg-no-repeat bg-arrow-select bg-right"
                  multiple
                >
                  <option
                    value="fragrances"
                    className="font-heading font-bold bg-bg-input"
                  >
                    Fragrances
                  </option>
                  <option
                    value="preservatives"
                    className="font-heading font-bold bg-bg-input"
                  >
                    Preservatives
                  </option>
                  <option
                    value="dyes"
                    className="font-heading font-bold bg-bg-input"
                  >
                    Dyes
                  </option>
                  <option
                    value="metals"
                    className="font-heading font-bold bg-bg-input"
                  >
                    Metals
                  </option>
                  <option
                    value="latex"
                    className="font-heading font-bold bg-bg-input"
                  >
                    Latex
                  </option>{" "}
                  <option
                    value="parabens"
                    className="font-heading font-bold bg-bg-input"
                  >
                    Parabens
                  </option>
                </select>
              </div>
              <div className="flex flex-col w-full mt-10">
                <div className="flex">
                  <img src="preferences02.svg" alt="Icon of a heart"></img>
                  <label
                    htmlFor="preferences"
                    className="font-heading font-bold text-2xl mt-9 ml-5"
                  >
                    Preferences:
                  </label>
                </div>
                <select
                  name="preferences"
                  id="preferences"
                  className="mt-8 h-8 rounded-md font-heading font-bold pl-4 bg-bg-input appearance-none bg-no-repeat bg-arrow-select bg-right"
                  multiple
                >
                  <option
                    value="organic"
                    className="font-heading font-bold bg-bg-input"
                  >
                    Organic
                  </option>
                  <option
                    value="vegan"
                    className="font-heading font-bold bg-bg-input"
                  >
                    Vegan
                  </option>
                  <option
                    value="crueltyfree"
                    className="font-heading font-bold bg-bg-input"
                  >
                    Crueltyfree
                  </option>
                </select>
              </div>
            </div>
            <button
              onClick={() => setActiveSection("sectionone")}
              className="bg-bg-input h-8 w-28 self-center mt-14 rounded-3xl text-text-dark font-heading"
            >
              Go back
            </button>
            <button className="bg-light-orange h-8 w-40 self-center mt-6 rounded-3xl text-text-light font-heading">
              Create profile
            </button>
          </form>
        </section>
      )}
    </>
  );
};
