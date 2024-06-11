import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getProfile, updateProfile, logout } from "../registration/authService";
import Menu from "../../utilities/Menu";
import defaultProfilePicture from "/icons/profile.png";
import gearIcon from "/icons/gear.svg";
import { ProfileForm } from "./ProfileForm";
import { useModal } from "../registration/ModalContext";
import { AuthForm } from "./AuthForm";
import Footer from "../../utilities/Footer";

export const Profile = () => {
  const [userData, setUserData] = useState({
    username: "",
    bio: "",
    hobbies: "",
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
          hobbies: profileData.hobbies || "",
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
    <>
      <Menu />
      <div className="container mx-auto pt-20 flex flex-col items-center">
        <div className="bg-lighter shadow-lg rounded-lg p-4 relative">
          <div className="flex items-center space-x-4 mb-6">
            <img
              src={defaultProfilePicture}
              alt="Profile"
              className="h-16 w-16 rounded-full"
            />
            <div>
              <h1 className="text-2xl font-bold">Hello, {userData.username}</h1>
              <p className="text-sm">Role: {userData.role || "User"}</p>
              {editMode && (
                <>
                  <p className="text-sm">Bio: {userData.bio || ""}</p>
                  <p className="text-sm">Hobbies: {userData.hobbies || ""}</p>
                </>
              )}
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
          {notification && <p className="text-green-500">{notification}</p>}
        </div>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white font-bold m-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Logout
        </button>
      </div>
    </>
  );
};
