import { Footer } from "../components/Footer";
import { useState, useRef } from "react";
import { useUserStore } from "../store/useUserStore";

export const SignUpPage = () => {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    address,
    setAddress,
    password,
    setPassword,
    allergies,
    setAllergies,
    pros,
    setPros,
    hairShape,
    setHairShape,
    hairMoisture,
    setHairMoisture,
    skinType,
    setSkinType,
  } = useUserStore();
  const [activeSection, setActiveSection] = useState("sectionthree"); // CHANGE TO "sectionone"!!!

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [isPassword, setIsPassword] = useState(false);
  const [isSame, setIsSame] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  // const [allergies, setAllergies] = useState([]);
  // const [pros, setPros] = useState([]);
  // const [hairShape, setHairShape] = useState("");
  // const [hairMoisture, setHairMoisture] = useState("");
  // const [skinType, setSkinType] = useState("");

  const [selectedAllergies, setSelectedAllergies] = useState([]);
  const [selectedPros, setSelectedPros] = useState([]);

  const [fetchStatus, setFetchStatus] = useState("");
  const [successStatus, setSuccessStatus] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const passwordRef = useRef();

  // Section One

  const handlePassword = (e) => {
    setPassword(e.target.value);
    const inputPassword = e.target.value;
    const minLength = 8;
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;

    const isValidLength = inputPassword.length >= minLength;
    const isValidPattern = pattern.test(inputPassword);

    setIsPassword(isValidLength && isValidPattern);
  };

  const handleComparePassword = (e) => {
    setConfirmPassword(e.target.value);
    if (password === e.target.value) {
      setIsSame(true);
    } else {
      setIsSame(false);
    }
  };

  const handleSectionOne = (e) => {
    e.preventDefault();

    if (isPassword && isSame) {
      setActiveSection("sectiontwo");
    } else {
      if (!isPassword) {
        alert("Make sure you use at least one capital and one number.");
      }
      if (!isSame) {
        alert("The passwords aren't matching!");
      }
    }
  };

  // Section two

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const handlePostalCode = (e) => {
    setPostalCode(e.target.value);
  };

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const handleCountry = (e) => {
    setCountry(e.target.value);
  };

  const handleSectionTwo = (e) => {
    e.preventDefault();
    if (firstName.length >= 2 && lastName.length >= 2) {
      setActiveSection("sectionthree");
    } else {
      alert("NO!");
    }
  };

  // Section Three

  const handleHairShape = (e) => {
    setHairShape(e.target.value);
  };

  const handleHairMoisture = (e) => {
    setHairMoisture(e.target.value);
  };

  const handleSkin = (e) => {
    setSkinType(e.target.value);
  };

  console.log("Pros:", pros, "Is Array:", Array.isArray(pros));
  console.log("Allergies:", allergies, "Is Array:", Array.isArray(allergies));

  /* ------------  Not Working ------------ */

  // Handler to toggle item selection
  const handleAllergyCheckboxChange = (e) => {
    console.log(e.target.value);
    const value = e.target.value;
    // If the item is already selected, remove it from the array
    if (selectedAllergies.includes(value)) {
      setSelectedAllergies(selectedAllergies.filter((item) => item !== value));
    } else {
      // If the item is not selected, add it to the array
      setSelectedAllergies([...selectedAllergies, value]);
    }

    setAllergies(selectedAllergies);

    console.log("Does this work?: ", selectedAllergies);
  };

  const handleProsCheckboxChange = (e) => {
    console.log(e.target.value);
    const value = e.target.value;
    // If the item is already selected, remove it from the array
    if (selectedPros.includes(value)) {
      setSelectedPros(selectedPros.filter((item) => item !== value));
    } else {
      // If the item is not selected, add it to the array
      setsSlectedPros([...selectedPros, value]);
    }

    setAllergies(selectedPros);

    console.log("Does this work?: ", selectedPros);
  };
  // const skinOptions = ["Sensitive", "Dry", "Oily", "Combination", "Acne"];
  // const hairMoistureOptions = ["Dry", "Normal", "Oily"];
  // const hairShapeOptions = ["Straight", "Wavy", "Curly", "Coils"];
  const allergyOptions = [
    "Fragrances",
    "Preservatives",
    "Dyes",
    "Metals",
    "Latex",
    "Parabens",
  ];
  const preferenceOptions = ["Organic", "Vegan", "Crueltyfree"];

  console.table(
    "H-Moist: ",
    hairMoisture,
    "H-Shape",
    hairShape,
    "Skin: ",
    skinType,
    "Pros: ",
    pros,
    "Allergies: ",
    allergies
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register user:");
  };

console.log(allergies)

  return (
    <>
      {activeSection === "sectionone" && (
        <section className="bg-main-red h-full flex flex-col items-center text-text-light pb-20 tablet:pb-0 laptop:flex-row laptop:pt-20 laptop:px-36 laptop:pb-64">
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
            <form className="flex flex-col w-full text-text-dark px-10 tablet:px-36 laptop:pl-0 laptop:pr-12">
              <div className="flex flex-col w-full">
                <label
                  htmlFor="email"
                  className="text-text-dark font-heading font-semibold mt-8 tablet:block"
                >
                  Email:
                </label>
                <input
                  type="email"
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
                    value={password}
                    type="password"
                    className="rounded-xl h-10 bg-bg-input "
                    id="password"
                    onChange={handlePassword}
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
                    value={confirmPassword}
                    type="password"
                    className="rounded-xl h-10 bg-bg-input "
                    id="confirm"
                    onChange={handleComparePassword}
                  ></input>
                </div>
              </div>
              <button
                ref={passwordRef}
                onClick={handleSectionOne}
                className="bg-main-yellow h-8 w-28 self-center mt-14 rounded-3xl text-text-dark font-heading tablet:mb-20 tablet:self-end"
              >
                Next
              </button>
            </form>
          </div>
        </section>
      )}
      {activeSection === "sectiontwo" && (
        <section className="bg-main-red h-full flex flex-col items-center text-text-light px-10 pb-20 tablet:p-0 laptop:flex-row laptop:pt-20 laptop:px-36 laptop:pb-64">
          {" "}
          <div>
            <div className="flex flex-col items-center">
              <h2 className="text-2xl font-heading font-bold mt-10">Sign Up</h2>
              <h3 className="text-xl font-heading font-medium mt-3">
                personal Information
              </h3>
            </div>
            <form className="flex flex-col text-text-dark w-full tablet:px-36 tablet:pb-10 laptop:pl-0 laptop:pr-12 laptop:flex-row">
              <div className="flex flex-col mt-8 tablet:flex-row tablet:gap-5 laptop:flex-col laptop:gap-0 laptop:pr-5">
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="firstname"
                    className=" font-heading font-semibold"
                  >
                    Firstname:
                  </label>
                  <input
                    value={firstName}
                    className="rounded-xl h-10 bg-bg-input"
                    id="firstname"
                    onChange={handleFirstName}
                  ></input>
                </div>
                <div className="flex flex-col w-full mt-2 tablet:mt-0 laptop:mt-2">
                  <label
                    htmlFor="lastname"
                    className="text-text-dark font-heading font-semibold"
                  >
                    Lastname:
                  </label>
                  <input
                    vaalue={lastName}
                    id="lastname"
                    className="rounded-xl h-10 bg-bg-input"
                    onChange={handleLastName}
                  ></input>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="mt-10 flex flex-col laptop:mt-8">
                  <div className="flex flex-col tablet:flex-row tablet:gap-5 laptop:flex-col laptop:gap-0">
                    <div className="flex flex-col w-full">
                      <label
                        htmlFor="address"
                        className="text-text-dark font-heading font-semibold"
                      >
                        Address:
                      </label>
                      <input
                        value={address}
                        id="address"
                        className="rounded-xl h-10 bg-bg-input"
                        onChange={handleAddress}
                      ></input>
                    </div>
                    <div className="flex flex-col w-full">
                      <label
                        htmlFor="postal code"
                        className="text-text-dark font-heading font-semibold mt-2 tablet:mt-0 laptop:mt-2"
                      >
                        Postal code:
                      </label>
                      <input
                        value={postalCode}
                        id="postal code"
                        className="rounded-xl h-10 bg-bg-input"
                        onChange={handlePostalCode}
                      ></input>
                    </div>
                  </div>
                  <div className="flex flex-col tablet:flex-row tablet:gap-5 laptop:flex-col laptop:gap-0">
                    <div className="flex flex-col w-full">
                      <label
                        htmlFor="city"
                        className="text-text-dark font-heading font-semibold mt-2"
                      >
                        City:
                      </label>
                      <input
                        value={city}
                        id="city"
                        className="rounded-xl h-10 bg-bg-input"
                        onChange={handleCity}
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
                        value={country}
                        id="country"
                        className="rounded-xl h-10 bg-bg-input"
                        onChange={handleCountry}
                      ></input>
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleSectionTwo}
                  className="bg-main-yellow h-8 w-28 self-center mt-12 rounded-3xl text-text-dark font-heading tablet:mb-10 tablet:self-end"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
          <img
            className="hidden tablet:block tablet:w-screen laptop:rounded-3xl laptop:max-w-3xl"
            src="signup.svg"
            alt="picture of a woman using skincare."
          ></img>
        </section>
      )}
      {activeSection === "sectionthree" && (
        <section className="bg-light-yellow h-full flex flex-col items-center text-text-dark px-10 pb-20 tablet:px-0 laptop:items-start">
          <h2 className="text-2xl font-heading font-bold mt-20 laptop:px-36">
            Who are you?
          </h2>
          <h3 className="text-xl font-heading font-medium mt-8 text-center tablet:px-44 laptop:px-36">
            Personalize your account to get custom recommondations
          </h3>
          <form className="flex flex-col w-full mt-16 tablet:px-36">
            <div className="flex flex-col tablet:flex-row tablet:gap-5 laptop:gap-40">
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
                  onChange={handleSkin}
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
                  onChange={handleHairMoisture}
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
                  onChange={handleHairShape}
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
            <div className="flex flex-col tablet:flex-row tablet:gap-5 laptop:gap-40">
              <div className="flex flex-col mt-8 tablet:gap-5 laptop:flex-col laptop:gap-0 laptop:pr-5">
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

                {allergyOptions.map((option) => (
                  <label key={option}>
                    <input
                      type="checkbox"
                      value={option}
                      checked={allergies.isArray && allergies.includes(option)}
                      onChange={handleAllergyCheckboxChange}
                    />
                    {option}
                  </label>
                ))}
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
                {preferenceOptions.map((option) => (
                  <label key={option}>
                    <input
                      type="checkbox"
                      value={option}
                      checked={pros.isArray && pros.includes(option)}
                      onChange={handleProsCheckboxChange}
                    />
                    {option}
                  </label>
                ))}
                {/* <select
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
                </select> */}
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
