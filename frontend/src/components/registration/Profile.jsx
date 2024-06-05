import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../axiosConfig";
import Menu from "../../utilities/Menu";
import defaultProfilePicture from "/icons/profile.png";
import gearIcon from "/icons/gear.svg";

const Profile = () => {
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

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("authToken");
      if (!token) {
        setError("Token not found");
        setLoading(false);
        return;
      }

      try {
        const response = await api.get("/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData({
          username: response.data.username || "",
          bio: response.data.bio || "",
          hobbies: response.data.hobbies || "",
          role: response.data.role || "",
        });
      } catch (error) {
        console.error("Error fetching profile:", error);
        if (error.response?.status === 401) {
          localStorage.removeItem("authToken");
          setError("Unauthorized. Please log in again.");
          navigate("/login");
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
  }, [navigate]);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("authToken");
    const formData = new FormData();
    formData.append("username", userData.username);
    formData.append("bio", userData.bio);
    formData.append("hobbies", userData.hobbies);

    try {
      await api.put("/profile", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      setUserData(response.data);
      setEditMode(false);
      setNotification("Profile updated successfully!");
      setTimeout(() => setNotification(""), 3000);
    } catch (err) {
      setError("Failed to update profile.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  /*   // Destructuring for cleaner rendering
  const { name, bio, hobbies, profilePicture } = userData; */

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
                  <p className="text-sm">
                    Bio: {userData.bio || "No bio provided"}
                  </p>
                  <p className="text-sm">
                    Hobbies: {userData.hobbies || "No hobbies listed"}
                  </p>
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
            <form onSubmit={handleUpdateProfile} className="space-y-4 flex-1">
              <input
                type="text"
                placeholder="Username"
                value={userData.username}
                onChange={(e) =>
                  setUserData({ ...userData, username: e.target.value })
                }
                className="block w-full px-4 py-2 rounded border border-gray-300"
              />
              <input
                type="text"
                placeholder="Bio"
                value={userData.bio}
                onChange={(e) =>
                  setUserData({ ...userData, bio: e.target.value })
                }
                className="block w-full px-4 py-2 rounded border border-gray-300"
              />
              <input
                type="text"
                placeholder="Hobbies"
                value={userData.hobbies}
                onChange={(e) =>
                  setUserData({ ...userData, hobbies: e.target.value })
                }
                className="block w-auto px-4 py-2 rounded border border-gray-300"
              />
              <button
                type="submit"
                className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded"
              >
                Save Changes
              </button>
            </form>
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

export default Profile;
