import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../axiosConfig";
import Menu from "../../utilities/Menu";
import { useUser } from "../registration/userContext";

const Profile = () => {
  const { user, setUser } = useUser();
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
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
        setUser(response.data);
        setName(response.data.name || "");
        setBio(response.data.bio || "");
        setHobbies(response.data.hobbies || "");
      } catch (error) {
        console.error("Error fetching profile:", error);
        if (error.response?.status === 401) {
          localStorage.removeItem("authToken");
          setError("Unauthorized. Please log in again.");
          window.location.href = "/login";
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
  }, [navigate, setUser]);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("authToken");
    const formData = new FormData();
    formData.append("name", name);
    formData.append("bio", bio);
    formData.append("hobbies", hobbies);
    if (profilePicture) {
      formData.append("profilePicture", profilePicture);
    }

    try {
      const response = await api.put("/profile", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      setUser(response.data);
    } catch (err) {
      setError("Failed to update profile.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    window.location.href = "/login";
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!user) {
    return <div>No user found</div>;
  }

  return (
    <>
      <Menu />
      <div className="container mx-auto pt-16">
        <h1 className="text-2xl font-bold mb-4">Profile</h1>
        <h2 className="text-2xl font-bold mb-4">Hello, {user.name}</h2>
        <form onSubmit={handleUpdateProfile}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="block mb-4 px-4 py-2 rounded border border-gray-300"
          />
          <input
            type="text"
            placeholder="Bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="block mb-4 px-4 py-2 rounded border border-gray-300"
          />
          <input
            type="text"
            placeholder="Hobbies"
            value={hobbies}
            onChange={(e) => setHobbies(e.target.value)}
            className="block mb-4 px-4 py-2 rounded border border-gray-300"
          />
          <input
            type="file"
            onChange={(e) => setProfilePicture(e.target.files[0])}
            className="block mb-4 px-4 py-2 rounded border border-gray-300"
          />
          <button
            type="submit"
            className="bg-primary text-light px-4 py-2 rounded hover:bg-secondary"
          >
            Update Profile
          </button>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Logout
          </button>
        </form>
        {user.profilePicture && (
          <div>
            <strong>Profile Picture:</strong>
            <img
              src={`https://project-final-rmn2.onrender.com/api/${user.profilePicture}`}
              alt="Profile"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Profile;
