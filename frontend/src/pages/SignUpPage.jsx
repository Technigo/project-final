export const SignUpPage = () => {
  return (
    <>
      <section className="bg-main-red h-fit flex flex-col items-center text-text-light pb-10">
        {" "}
        <img
          className="w-screen"
          src="signup.svg"
          alt="picture of a woman using skincare."
        ></img>
        <h2 className="text-2xl font-heading font-bold mt-10">Sign Up</h2>
        <h3 className="text-xl font-heading font-medium mt-3">
          login Information
        </h3>
        <form className="flex flex-col w-full px-10">
          <label
            htmlFor="email"
            className="text-text-dark font-heading font-semibold mt-8"
          >
            Email:
          </label>
          <input className="rounded-xl h-10 bg-bg-input" id="email"></input>
          <label
            htmlFor="password"
            className="text-text-dark font-heading font-semibold mt-8"
          >
            Password:
          </label>
          <input className="rounded-xl h-10 bg-bg-input" id="password"></input>
          <label
            htmlFor="confirm"
            className="text-text-dark font-heading font-semibold mt-8"
          >
            Confirm password:
          </label>
          <input className="rounded-xl h-10 bg-bg-input" id="confirm"></input>
          <button className="bg-main-yellow h-8 w-28 self-center mt-14 rounded-3xl text-text-dark font-heading">
            Next
          </button>
        </form>
      </section>
      <section className="bg-main-red h-fit flex flex-col items-center text-text-light px-10 pb-10">
        {" "}
        <h2 className="text-2xl font-heading font-bold mt-10">Sign Up</h2>
        <h3 className="text-xl font-heading font-medium mt-3">
          personal Information
        </h3>
        <form className="flex flex-col w-full">
          <label
            htmlFor="firstname"
            className="text-text-dark font-heading font-semibold mt-8"
          >
            Firstname:
          </label>
          <input className="rounded-xl h-10 bg-bg-input" id="firstname"></input>
          <label
            htmlFor="lastname"
            className="text-text-dark font-heading font-semibold mt-2"
          >
            Lastname:
          </label>
          <input id="lastname" className="rounded-xl h-10 bg-bg-input"></input>
          <label
            htmlFor="address"
            className="text-text-dark font-heading font-semibold mt-10"
          >
            Address:
          </label>
          <input id="address" className="rounded-xl h-10 bg-bg-input"></input>

          <label
            htmlFor="postal code"
            className="text-text-dark font-heading font-semibold mt-2"
          >
            Postal code:
          </label>
          <input
            id="postal code"
            className="rounded-xl h-10 bg-bg-input"
          ></input>
          <label
            htmlFor="city"
            className="text-text-dark font-heading font-semibold mt-2"
          >
            City:
          </label>
          <input id="city" className="rounded-xl h-10 bg-bg-input"></input>
          <label
            htmlFor="country"
            className="text-text-dark font-heading font-semibold mt-2"
          >
            Country:
          </label>
          <input id="country" className="rounded-xl h-10 bg-bg-input"></input>
          <button className="bg-main-yellow h-8 w-28 self-center mt-12 rounded-3xl text-text-dark font-heading">
            Next
          </button>
        </form>
      </section>
      <section className="bg-light-yellow h-fit flex flex-col items-center text-text-dark px-10 pb-10">
        <h2 className="text-2xl font-heading font-bold mt-20">Who are you?</h2>
        <h3 className="text-xl font-heading font-medium mt-8 text-center">
          Personalize your account to get custom recommondations
        </h3>
        <form className="flex flex-col w-full mt-16">
          <div className="flex flex-col">
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
              className="mt-8 h-8 rounded-md font-heading font-bold pl-4"
            >
              <option value="sensitive" className="font-heading font-bold">
                Sensitive
              </option>
              <option value="dry" className="font-heading font-bold">
                Dry
              </option>
              <option value="oily" className="font-heading font-bold">
                Oily
              </option>
              <option value="combination" className="font-heading font-bold">
                Combination
              </option>
              <option value="acne" className="font-heading font-bold">
                Acne
              </option>
            </select>
          </div>
          <div className="flex flex-col mt-10">
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
              className="mt-2 h-8 rounded-md font-heading font-bold pl-4"
            ></select>
          </div>
          <img src="allergies02.svg" alt="Icon of hand with allergies"></img>
          <img src="preferences02.svg" alt="Icon of a heart"></img>
        </form>
      </section>
    </>
  );
};
