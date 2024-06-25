export const LogoutBtn = ({ onclick }) => {
  return (
    <div>
      <button
        className="bg-transparent text-white p-2 font-avenir"
        onClick={onclick}
        aria-label="Log out of your account"
      >
        Logout
      </button>
    </div>
  );
};
