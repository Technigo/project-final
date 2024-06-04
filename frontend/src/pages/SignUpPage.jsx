export const SignUpPage = () => {
  return (
    <section className="bg-main-red h-screen flex flex-col items-center text-text-light">
      {" "}
      <h1 className="text-2xl font-heading font-bold mt-10">Sign Up</h1>
      <h2 className="text-xl font-heading font-medium mt-3">
        personal Information
      </h2>
      <form className="flex flex-col px-10 w-full">
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
          htmlFor="lastname"
          className="text-text-dark font-heading font-semibold mt-8"
        >
          Address:
        </label>
        <input id="lastname" className="rounded-xl h-10 bg-bg-input"></input>

        <label
          htmlFor="lastname"
          className="text-text-dark font-heading font-semibold mt-2"
        >
          Postal code:
        </label>
        <input id="lastname" className="rounded-xl h-10 bg-bg-input"></input>
        <label
          htmlFor="lastname"
          className="text-text-dark font-heading font-semibold mt-2"
        >
          City:
        </label>
        <input id="lastname" className="rounded-xl h-10 bg-bg-input"></input>
        <label
          htmlFor="lastname"
          className="text-text-dark font-heading font-semibold mt-2"
        >
          Country:
        </label>
        <input id="lastname" className="rounded-xl h-10 bg-bg-input"></input>
        <button className="bg-main-yellow h-8 w-28 self-center mt-8 rounded-3xl text-text-dark font-heading">
          Next
        </button>
      </form>
    </section>
  );
};
