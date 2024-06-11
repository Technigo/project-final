// User needs to be logged in to se Profile page,
// send user to Log in/ Sign up if not logged in.

//import { useUserStore } from "../store/useUserStore"
import { NavLink } from "react-router-dom"
import { Footer } from "../components/Footer";
import { FaUserEdit } from "react-icons/fa";

// to be changed to input from store
const firstname = "Victoria";
const lastname = "Olofsdottir";
const email = "victoria@mail.com";
const address = "adress";
const allergies = ["fragrances", "latex"];
const pros = ["vegan"];
const hairShape = "straight";
const hairMoisture = "dry ";
const skinType = "oily";

export const ProfilePage = () => {
  return (
    <>
    <section className="w-full">
      <div className="w-8/12 laptop:w-6/12 m-auto font-heading text-text-light mb-10 mt-16 laptop:mt-28">
        <h2 className="text-2xl laptop:text-4xl mb-6 text-center">{firstname}</h2>
        <div className="w-full flex justify-between mb-4">
          <h3>Profile</h3>
          <FaUserEdit className="w-6 h-6 fill-button-varm-light" />
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
              <p className="text-sm">{skinType}</p>
            </div>
          </li>

          <li className="col-start-1 flex gap-4">
            <img src="hairtype-icon-white.svg" alt="Icon of hair" className="w-14"/>
            <div className="bg-main-white  w-full p-4 pl-6 text-text-dark rounded-xl">
              <h4 className="font-bold">Hair:</h4>
              <ul className="text-sm">
                <li>{hairShape}</li>
                <li>{hairMoisture}</li>
              </ul>
            </div>
          </li>
          <li className=" col-start-1 col-end-3 flex gap-4">
            <img src="allergies-icon-white.svg" alt="Icon of hand with allergies" className="w-14" />
            <div className="bg-main-white  w-full p-4 pl-6 text-text-dark rounded-xl">
              <h4 className="font-bold">Allergies:</h4>
              {allergies.map((item, index) => (
                <ul className="text-sm" key={index}>
                  <li>{item}</li>
                </ul>
              ))}
            </div>
          </li>
          <li className="col-start-2 row-start-1 row-end-3 flex tablet:flex-row-reverse gap-4 w-full">
            <img src="preferences-icon-white.svg" alt="Icon of a heart" className="w-14 tablet:hidden" />
            <div className="bg-main-white w-full h-full p-4 pl-6 text-text-dark rounded-xl">
              <h4 className="font-bold">Preferences:</h4>
              <div className="flex flex-col justify-between w-full h-full ">{pros.map((item, index) => (
                <ul className="text-sm" key={index}>
                  <li>{item}</li>
                </ul>
              ))}
              <img src="preferences02.svg" alt="Icon of a heart" className="w-14 hidden tablet:flex self-end mb-6" />
            </div>
            </div>
          </li>
        </ul>
        <NavLink to="/products" className="flex justify-center mt-12">
        <button className="bg-strong-yellow text-text-dark text-xs p-2 px-3 laptop:text-sm rounded-full mb-8 gap-2">
          Recommendations for you
        </button>
      </NavLink>
      </div>
      </section>
      <section className="w-full bg-main-yellow ">
      <img src="User-page.svg" alt="hands holding skinproducts" className="w-full object-fit" />
      <div className="flex flex-col gap-6 w-8/12 laptop:w-6/12 m-auto font-heading text-text-dark mt-16 laptop:mt-28">
      <h2 className="text-xl laptop:text-4xl text-center">Personal info</h2>
      <div className="bg-main-white  w-full p-4 pl-6 text-text-dark rounded-xl">
      <h4 className="font-bold">First name:</h4>
      <p>{firstname}</p>
      <h4 className="font-bold">Surname:</h4>
      <p>{firstname}</p>
      <h4 className="font-bold">Name:</h4>
              <h4 className="font-bold">Adress:</h4>
              <ul className="text-sm">
                <li>{address}</li>
              </ul>
            </div>
            <div className="bg-main-white  w-full p-4 pl-6 text-text-dark rounded-xl"><h4 className="font-bold">Email:</h4>
            <p>{email}</p></div>
      </div>
      </section>
      {/* add the X of the bg-main-X to the aboveColor to make the Footer match*/}
      <Footer aboveColor={"yellow"} />
   </>
  );
};
