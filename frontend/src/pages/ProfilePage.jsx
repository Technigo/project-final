import { useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";

import { Footer } from "../components/Footer";
// User needs to be logged in to see Profile page,
// send user to Log in/ Sign up if not logged in.

import { useUserStore } from "../store/useUserStore";

export const ProfilePage = () => {
  const {
    user,
    logoutUser,
    updateUser,
    // firstname,
    // lastname,
    // email,
    // address,
    // allergies,
    // pros,
    // hair,
    // skinType,
  } = useUserStore();
  const profile = user.user;
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [inputValues, setInputValues] = useState({
    firstName: profile.firstname,
    lastName: profile.lastname,
    street: profile.address.street,
    postalCode: profile.address.postalCode,
    city: profile.address.city,
    country: profile.address.country,
    email: profile.email,
    skin: profile.skin,
    shape: profile.hair.shape,
    moisture: profile.hair.moisture,
    allergies: profile.allergies,
    pros: profile.pros,
  });

  const allergyOptions = [
    "Fragrances",
    "Preservatives",
    "Dyes",
    "Metals",
    "Latex",
    "Parabens",
  ];
  const preferenceOptions = ["Organic", "Vegan", "Crueltyfree"];

  const handleLogout = () => {
    logoutUser();
    navigate("/"); // Redirect to the main page after logout
  };

  //NOT working yet. Still chatting with AI:)
  const handleButtonClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleUpdateProfile = () => {
    // Assuming 'inputValues' is an object containing all input values
    const updatedProfile = { ...profile, ...inputValues };
    updateUser(updatedProfile);
  };

  return (
    <>
      <button
        onClick={handleLogout}
        className="bg-button-varm-light text-text-dark w-24 h-8 rounded-full flex justify-center items-center ml-6 desktop:ml-24 mt-20"
      >
        Log out
      </button>
      <div>
        <section className="w-full">
          <div className="w-8/12 laptop:w-6/12 m-auto font-heading text-text-light mb-10 mt-6">
            <h2 className="text-2xl laptop:text-4xl mb-6 text-center">
              {profile.firstname}
            </h2>
            <div className="w-full flex justify-between mb-4">
              <h3>Profile</h3>
              <button onClick={handleButtonClick}>
                <FaUserEdit className="w-6 h-6 fill-button-varm-light" />
              </button>
            </div>
            <ul className="flex flex-col tablet:grid tablet:grid-cols-2 gap-6">
              <li className="flex gap-4">
                <img
                  src="skintype-icon-white.svg"
                  alt="Icon of a face"
                  className="w-14"
                />
                <div className="bg-main-white w-full p-4 pl-6 text-text-dark rounded-xl">
                  <h4 className="font-bold">Skin:</h4>
                  {isEditing ? (
                    <select
                      defaultValue={inputValues.skin}
                      name="skintype"
                      id="skin"
                      className="mt-8 h-8 rounded-md font-heading font-bold pl-4 bg-bg-input appearance-none bg-no-repeat bg-arrow-select bg-right"
                    >
                      <option
                        value=""
                        disabled
                        className="font-heading font-bold bg-bg-input"
                      >
                        -- Choose skin type
                      </option>
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
                  ) : (
                    <p className="text-sm">{profile.skin}</p>
                  )}
                </div>
              </li>
              <li className="col-start-1 flex gap-4">
                <img
                  src="hairtype-icon-white.svg"
                  alt="Icon of hair"
                  className="w-14"
                />
                <div className="bg-main-white  w-full p-4 pl-6 text-text-dark rounded-xl">
                  <h4 className="font-bold">Hair:</h4>
                  <ul className="text-sm">
                    {isEditing ? (
                      <select
                        defaultValue={inputValues.moisture}
                        name="hair-moisture"
                        id="moisture"
                        className="mt-2 h-8 rounded-md font-heading font-bold pl-4 bg-bg-input appearance-none bg-no-repeat bg-arrow-select bg-right"
                      >
                        <option
                          value=""
                          disabled
                          className="font-heading font-bold bg-bg-input"
                        >
                          -- Choose hair moisture level
                        </option>
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
                    ) : (
                      <li>{profile.hair.moisture}</li>
                    )}
                    {isEditing ? (
                      <select
                        defaultValue={inputValues.shape}
                        name="hair-shape"
                        id="shape"
                        className="mt-2 h-8 rounded-md font-heading font-bold pl-4 bg-bg-input appearance-none bg-no-repeat bg-arrow-select bg-right"
                      >
                        <option
                          value=""
                          disabled
                          className="font-heading font-bold bg-bg-input"
                        >
                          -- Choose hair shape
                        </option>
                        <option
                          value="straight"
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
                    ) : (
                      <li>{profile.hair.shape}</li>
                    )}
                  </ul>
                </div>
              </li>
              <li className=" col-start-1 col-end-3 flex gap-4">
                <img
                  src="allergies-icon-white.svg"
                  alt="Icon of hand with allergies"
                  className="w-14"
                />
                <div className="bg-main-white  w-full p-4 pl-6 text-text-dark rounded-xl">
                  <h4 className="font-bold">Allergies:</h4>
                  {isEditing
                    ? allergyOptions.map((option) => (
                        <label key={option}>
                          <input
                            type="checkbox"
                            value={option.toLowerCase()}
                            onChange={handleInputChange}
                            checked={inputValues.allergies}
                          />
                          {option}
                        </label>
                      ))
                    : profile.allergies.map((item, index) => (
                        <ul className="text-sm" key={index}>
                          <li>{item}</li>
                        </ul>
                      ))}
                </div>
              </li>
              <li className="col-start-2 row-start-1 row-end-3 flex tablet:flex-row-reverse gap-4 w-full">
                <img
                  src="preferences-icon-white.svg"
                  alt="Icon of a heart"
                  className="w-14 tablet:hidden"
                />
                <div className="bg-main-white w-full h-full p-4 pl-6 text-text-dark rounded-xl">
                  <h4 className="font-bold">Preferences:</h4>
                  <div className="flex flex-col justify-between w-full h-full ">
                    {isEditing
                      ? preferenceOptions.map((option) => (
                          <label key={option}>
                            <input
                              type="checkbox"
                              value={option.toLowerCase()}
                              onChange={handleInputChange}
                              checked={inputValues.pros}
                            />
                            {option}
                          </label>
                        ))
                      : profile.pros.map((item, index) => (
                          <ul className="text-sm" key={index}>
                            <li>{item}</li>
                          </ul>
                        ))}

                    <img
                      src="preferences02.svg"
                      alt="Icon of a heart"
                      className="w-14 hidden tablet:flex self-end mb-6"
                    />
                  </div>
                </div>
              </li>
            </ul>
            {isEditing ? null : (
              <NavLink to="/products" className="flex justify-center mt-12">
                <button className="bg-strong-yellow text-text-dark text-xs p-2 px-3 laptop:text-sm rounded-full mb-8 gap-2">
                  Recommendations for you
                </button>
              </NavLink>
            )}
          </div>
        </section>
        <section className="w-full bg-main-yellow ">
          <img
            src="User-page.svg"
            alt="hands holding skinproducts"
            className="w-full object-fit"
          />
          <div className="flex flex-col gap-6 w-8/12 laptop:w-6/12 m-auto font-heading text-text-dark mt-16 laptop:mt-28">
            <h2 className="text-xl laptop:text-4xl text-center">
              Personal info
            </h2>
            <div className="bg-main-white  w-full p-4 pl-6 text-text-dark rounded-xl">
              <h4 className="font-bold">First name:</h4>
              {isEditing ? (
                <form>
                  <input
                    className="border-red-700 border-2 rounded"
                    type="text"
                    name="firstName"
                    value={inputValues.firstName}
                    onChange={handleInputChange}
                  />
                </form>
              ) : (
                <p>{profile.firstname}</p>
              )}
              <h4 className="font-bold">Surname:</h4>
              {isEditing ? (
                <form>
                  <input
                    className="border-red-700 border-2 rounded"
                    type="text"
                    name="lastName"
                    value={inputValues.lastName}
                    onChange={handleInputChange}
                  ></input>
                </form>
              ) : (
                <p>{profile.lastname}</p>
              )}

              {/* <h4 className="font-bold">Name:</h4> */}
              <h4 className="font-bold">Adress:</h4>
              <ul className="text-sm">
                {isEditing ? (
                  <form>
                    <input
                      className="border-red-700 border-2 rounded"
                      type="text"
                      name="street"
                      value={inputValues.street}
                      onChange={handleInputChange}
                    ></input>
                  </form>
                ) : (
                  <li>{profile.address.street}</li>
                )}
                {isEditing ? (
                  <form>
                    <input
                      className="border-red-700 border-2 rounded"
                      type="text"
                      name="postalCode"
                      value={inputValues.postalCode}
                      onChange={handleInputChange}
                    ></input>
                  </form>
                ) : (
                  <li>{profile.address.postalCode}</li>
                )}
                {isEditing ? (
                  <form>
                    <input
                      className="border-red-700 border-2 rounded"
                      type="text"
                      name="city"
                      value={inputValues.city}
                      onChange={handleInputChange}
                    ></input>
                  </form>
                ) : (
                  <li>{profile.address.city}</li>
                )}
                {isEditing ? (
                  <form>
                    <input
                      className="border-red-700 border-2 rounded"
                      type="text"
                      name="country"
                      value={inputValues.country}
                      onChange={handleInputChange}
                    ></input>
                  </form>
                ) : (
                  <li>{profile.address.country}</li>
                )}
              </ul>
            </div>
            <div className="bg-main-white  w-full p-4 pl-6 text-text-dark rounded-xl">
              <h4 className="font-bold">Email:</h4>
              {isEditing ? (
                <form>
                  <input
                    className="border-red-700 border-2 rounded"
                    type="text"
                    name="email"
                    value={inputValues.email}
                    onChange={handleInputChange}
                  ></input>
                </form>
              ) : (
                <p>{profile.email}</p>
              )}
            </div>
          </div>
        </section>
      </div>
      {/* add the X of the bg-main-X to the aboveColor to make the Footer match*/}
      <Footer aboveColor={"yellow"} />
    </>
  );
};
