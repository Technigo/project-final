import { useAuth } from "../../context/AuthContext";
import { useNavigate, Navigate } from "react-router-dom";
import "../../styling/sectionsStyling/profilePage/ProfileSection.css";

const ProfileSection = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

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
          <div className="logoutButtonWrapper">
            <button className="logoutButton" onClick={handleLogout}>
              Log out
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfileSection;
