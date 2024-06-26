//There are parts in this page which will be for editing the user. They are not fully implemented yet.
import { useEffect, useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { NavLink, useNavigate, useParams } from "react-router-dom";

import { Footer } from "../components/Footer";
import { useUserStore } from "../store/useUserStore";
import { NotFound } from "./NotFound";

export const ProfilePage = () => {
  const {
    user,
    logoutUser,
    fetchUser,
    updateUser,
    loggedOut,
    accessToken,
    deleteUser,
  } = useUserStore();

  const { userId } = useParams();
  const navigate = useNavigate();
  const [profile, setProfile] = useState(user.user);

  useEffect(() => {
    if (loggedOut) {
      navigate("/");
    }
  }, [loggedOut, navigate]);

  if (!profile) {
    return <NotFound reason="profile" />;
  }

  const [isEditing, setIsEditing] = useState(false);

  const [inputValues, setInputValues] = useState({
    firstname: profile.firstname,
    lastname: profile.lastname,
    email: profile.email,
    street: profile.address.street,
    postalCode: profile.address.postalCode,
    city: profile.address.city,
    country: profile.address.country,
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

  //When user press log out button
  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };

  const toggleChangeProfile = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      // Initialize inputValues[name] as an array if it's undefined
      const updatedValue = checked
        ? [...(inputValues[name] || []), value]
        : inputValues[name].filter((item) => item !== value);

      setInputValues({
        ...inputValues,
        [name]: updatedValue,
      });
    } else {
      setInputValues({
        ...inputValues,
        [name]: value,
      });
    }
  };

  const handleUpdateProfile = () => {
    // Filter out unchanged fields
    const updatedFields = Object.keys(inputValues).reduce((acc, key) => {
      if (inputValues[key] !== profile[key]) {
        acc[key] = inputValues[key];
      }
      return acc;
    }, {});

    // Make update request with updatedFields
    updateUser(userId, accessToken, updatedFields);
  };

  const handleDeletingUser = () => {
    deleteUser(userId, accessToken);
  };

  return (
    <>
      {loggedOut && navigate("/")}
      <button
        onClick={handleLogout}
        className="bg-button-varm-light text-text-dark w-24 h-8 rounded-full flex justify-center items-center ml-6 desktop:ml-24 mt-20"
      >
        Log out
      </button>
      <div>
        <section className="w-full">
          <div className="w-9/12 laptop:w-6/12 m-auto font-heading text-text-light mb-10 mt-6 flex flex-col">
            <h2 className="text-2xl laptop:text-4xl mb-6 text-center">
              {profile.firstname}
            </h2>
            <div className="w-full flex justify-between mb-4">
              <h3>Profile</h3>

              {/* Will put edit button back when we finished the edit user functions */}
              {/*  <button aria-label="Edit profile" onClick={toggleChangeProfile}>

                <FaUserEdit className="w-6 h-6 fill-button-varm-light" />
              </button> */}
            </div>
            <ul className="flex flex-col tablet:grid tablet:grid-cols-2 gap-6">
              <li className="flex gap-4">
                <img
                  src="/icons/skintype-icon-white.svg"
                  alt="Icon of a face"
                  className="w-14"
                />
                <div className="bg-main-white w-full p-4 pl-6 text-text-dark rounded-xl">
                  <h4 className="font-bold">Skin:</h4>
                  {isEditing ? (
                    <select
                      defaultValue={inputValues.skin}
                      name="skin"
                      id="skin"
                      onChange={handleInputChange}
                      className="mt-2 h-7 rounded-xl font-heading w-36 font-bold pl-4 bg-bg-input border border-main-red bg-no-repeat bg-arrow-select bg-right text-sm"
                    >
                      <option
                        value=""
                        disabled
                        className="font-heading font-bold bg-bg-input"
                      >
                        Skin type:
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
                  src="/icons/hairtype-icon-white.svg"
                  alt="Icon of hair"
                  className="w-14"
                />
                <div className="bg-main-white  w-full p-4 pl-6 text-text-dark rounded-xl">
                  <h4 className="font-bold">Hair:</h4>
                  <ul className="text-sm flex gap-2 flex-wrap">
                    {isEditing ? (
                      <select
                        defaultValue={inputValues.moisture}
                        name="moisture"
                        id="moisture"
                        onChange={handleInputChange}
                        className="mt-2 h-7 rounded-xl font-heading w-36 font-bold pl-4 bg-bg-input border border-main-red bg-no-repeat bg-arrow-select bg-right text-sm"
                      >
                        <option
                          value=""
                          disabled
                          className="font-heading font-boold bg-bg-input"
                        >
                          Hair moisture:
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
                        name="shape"
                        id="shape"
                        onChange={handleInputChange}
                        className="mt-2 h-7 rounded-xl font-heading w-36 font-bold pl-4 bg-bg-input border border-main-red bg-no-repeat bg-arrow-select bg-right text-sm"
                      >
                        <option
                          value=""
                          disabled
                          className="font-heading font-bold bg-bg-input"
                        >
                          Hair shape:
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
                  src="/icons/allergies-icon-white.svg"
                  alt="Icon of hand with allergies"
                  className="w-14"
                />
                <div className="bg-main-white w-full p-4 pl-6 text-text-dark rounded-xl">
                  <h4 className="font-bold mb-2">Allergies:</h4>
                  {isEditing
                    ? allergyOptions.map((option) => (
                        <label key={option} className="flex gap-1">
                          <input
                            type="checkbox"
                            value={option.toLowerCase()}
                            /*  checked={inputValues.allergies.includes(
                              option.toLowerCase()
                            )} */
                            onChange={handleInputChange}
                            // checked={inputValues.allergies}
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
                  src="/icons/preferences-icon-white.svg"
                  alt="Icon of a heart"
                  className="w-14 tablet:hidden"
                />
                <div className="bg-main-white w-full h-full p-4 pl-6 text-text-dark rounded-xl">
                  <h4 className="font-bold">Preferences:</h4>
                  <div className="flex flex-col justify-between w-full h-full ">
                    {isEditing
                      ? preferenceOptions.map((option) => (
                          <label key={option} className="flex gap-1">
                            <input
                              type="checkbox"
                              value={option.toLowerCase()}
                              /*   checked={inputValues.pros.includes(
                                option.toLowerCase()
                              )} */
                              onChange={handleInputChange}
                              // checked={inputValues.pros}
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
                      src="/icons/preferences-icon-dark.svg"
                      alt="Icon of a heart"
                      className="w-14 hidden tablet:flex self-end mb-6"
                    />
                  </div>
                </div>
              </li>
            </ul>
            {isEditing ? (
              <button
                onClick={handleUpdateProfile}
                className="bg-strong-yellow text-text-dark w-fit p-2 px-3 rounded-full mt-10 self-center"
              >
                Save Changes
              </button>
            ) : (
              <NavLink to="/products" className="flex justify-center mt-12">
                <button className="bg-strong-yellow text-text-dark text-sm p-2 px-3 tablet:text-base rounded-full mb-8 gap-2">
                  Recommendations for you
                </button>
              </NavLink>
            )}
          </div>
        </section>
        <section className="w-full bg-main-yellow">
          <div className=" w-11/12 tablet:w-10/12 py-12 mx-auto gap-8 tablet:flex ">
            <img
              src="/mockupimages/profile-page.svg"
              alt="hands holding skinproducts"
              className="w-full h-80 my-auto object-cover tablet:w-1/2 tablet:rounded-xl rounded-xl"
            />

            <div className="flex flex-col gap-6 font-heading tablet:w-6/12 text-text-dark mt-16 laptop:mt-28">
              <h3 className="text-xl laptop:text-4xl text-center">
                Personal info
              </h3>
              <div className="bg-main-white w-full p-4 pl-6 text-text-dark rounded-xl">
                <h4 className="font-bold">First name:</h4>
                {isEditing ? (
                  <form>
                    <input
                      className="border-red-700 border-2 rounded"
                      type="text"
                      name="firstname"
                      value={inputValues.firstname}
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
                      name="lastname"
                      value={inputValues.lastname}
                      onChange={handleInputChange}
                    ></input>
                  </form>
                ) : (
                  <p>{profile.lastname}</p>
                )}
                <h4 className="font-bold">Address:</h4>
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
              <button
                onClick={handleDeletingUser}
                className="bg-strong-red2 px-4 py-2 rounded-full w-48 hover:bg-text-dark text-text-light ml-auto"
              >
                {" "}
                ! Delete User !
              </button>
            </div>
          </div>
        </section>
      </div>
      {/* add the X of the bg-main-X to the aboveColor to make the Footer match*/}
      <Footer aboveColor={"yellow"} />
    </>
  );
};
