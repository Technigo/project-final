import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../../styling/sectionsStyling/profilePage/ProfileSection.css";

const ProfileSection = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="profileContainer">
      <form className="profileForm">
        <div className="profileTitleWrapper">
          <img
            className="profileIcon"
            src="/icons/ProfileIcon.png"
            alt="Profile Icon"
          />
          <h2 className="profileTitle">Profile</h2>
        </div>
        <div className="profileContent">
          <h3 className="customerEmailTitle">Your Email:</h3>
          <p className="customerEmail">paula010514@hotmail.com</p>
          <label className="changeEmailLabel">
            Change Email: <br />
            <input type="email" className="changeEmailInput" />
          </label>
          <div className="profileButtonsWrapper">
            <button className="changeEmailButton">Change</button>
            <div className="logoutButtonWrapper">
              <button className="logoutButton" onClick={handleLogout}>
                Log out
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfileSection;
