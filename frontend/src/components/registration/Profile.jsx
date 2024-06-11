import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getProfile, updateProfile, logout } from "../registration/authService";
import Menu from "../../utilities/Menu";
import bgImage from "/images/profile-bg.jpg";
import defaultProfilePicture from "/icons/profile.png";
import gearIcon from "/icons/gear.svg";
import { ProfileForm } from "./ProfileForm";
import { useModal } from "../registration/ModalContext";
import { AuthForm } from "./AuthForm";
import Footer from "../../utilities/Footer";
import { Button } from "../../utilities/Button";

export const Profile = () => {
  const [userData, setUserData] = useState({
    username: "",
    bio: "",
    hobby: "",
    role: "",
  });
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [notification, setNotification] = useState("");
  const navigate = useNavigate();
  const { showModal, hideModal } = useModal();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("authToken");
      if (!token) {
        showModal(
          <AuthForm
            type="login"
            onSuccess={() => {
              setLoading(true);
              fetchProfile();
            }}
            navigate={navigate}
          />
        );
        setLoading(false);
        return;
      }

      try {
        console.log("Token being sent:", token); // Debug log
        const profileData = await getProfile(token);
        console.log("Fetched profile data:", profileData); // Debug log
        setUserData({
          username: profileData.username || "",
          bio: profileData.bio || "",
          hobby: profileData.hobby || "",
          role: profileData.role || "",
        });
      } catch (error) {
        console.error("Error fetching profile:", error);
        if (error.response?.status === 401) {
          localStorage.removeItem("authToken");
          setError("Unauthorized. Please log in again.");
          showModal(<AuthForm type="login" />);
        } else {
          setError(
            error.response?.data?.error ||
              "An error occurred while fetching profile."
          );
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [navigate, showModal]);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setError("");
    setNotification("");

    try {
      console.log("Updating profile with data:", userData); //debug
      const updatedData = await updateProfile(userData);
      console.log("Updated profile data:", updatedData); // Debug log
      setUserData(updatedData);
      setEditMode(false);
      setNotification("Profile updated successfully!");
      setTimeout(() => setNotification(""), 3000);
    } catch (err) {
      console.error("Failed to update profile:", err);
      setError("Failed to update profile.");
      setNotification();
    }
  };

  const handleLogout = async () => {
    hideModal();
    logout();
    showModal(
      <AuthForm type="login" onSuccess={() => navigate("/find-out-more")} />
    );
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <p className="text-red-500">{error}</p>;
  }
  if (!userData) {
    return <div>No user found</div>;
  }

  return (
    <div
      className="flex flex-col min-h-screen"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Menu />
      <div className="flex-grow container mx-auto pt-20 flex flex-col items-center lg:flex-row lg:items-start lg:justify-center">
        <div
          className="bg-lighter shadow-lg rounded-lg p-6 relative w-full lg:w-2/3 lg:mx-auto"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.432)" }}
        >
          <div className="flex flex-col lg:flex:row items-center space-y-4 lg:space-y-0 lg:space-x-4 mb-6">
            <img
              src={defaultProfilePicture}
              alt="Profile"
              className="h-32 w-32 rounded-full order-1"
            />
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <h1 className="text-2xl font-bold mb-2">
                Hello, {userData.username}
              </h1>
              <p className="text-secondary">Role: {userData.role || "User"}</p>
              <p className="text-secondary">Bio: {userData.bio || ""}</p>
              <p className="text-secondary">I like: {userData.hobby || ""}</p>
            </div>
          </div>
          {!editMode && (
            <img
              src={gearIcon}
              alt="Edit Profile"
              className="absolute bottom-2 right-2 h-6 w-6 cursor-pointer"
              onClick={() => setEditMode(true)}
            />
          )}

          {editMode && (
            <ProfileForm
              userData={userData}
              setUserData={setUserData}
              handleUpdateProfile={handleUpdateProfile}
            />
          )}
          {notification && (
            <p className="text-green-500 mt-4">{notification}</p>
          )}
        </div>
        <Button
          onClick={handleLogout}
          text="Log Out"
          varian="primary"
          className="mt-6"
        ></Button>
      </div>
      <Footer />
    </div>
  );
};
