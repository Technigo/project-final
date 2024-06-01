import { useState, useEffect } from "react";
import axios from "axios";
/* import { useNavigate } from "react-router-dom"; */
import Menu from "../../utilities/Menu";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  /*   const navigate = useNavigate(); */

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("authToken");
      if (!token) {
        setError("Token not found");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          "https://project-final-rmn2.onrender.com/api/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUser(response.data);
        setName(response.data.name);
        setBio(response.data.bio);
      } catch (error) {
        console.error("Error fetching profile:", error);
        if (error.response?.status === 401) {
          localStorage.removeItem("authToken");
          setError("Unauthorized. Please log in again.");
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
  }, []);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("authToken");
    const formData = new FormData();
    formData.append("name", name);
    formData.append("bio", bio);
    if (profilePicture) {
      formData.append("profilePicture", profilePicture);
    }

    try {
      const response = await axios.put(
        "https://project-final-rmn2.onrender.com/api/profile",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setProfile(response.data);
    } catch (err) {
      setError("Failed to update profile.");
    }
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
    <div className="container mx-auto">
      <Menu />
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
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
      </form>
      {user.profilePicture && (
        <div>
          <strong>Profile Picture:</strong>
          <img
            src={`https://project-final-rmn2.onrender.com/${user.profilePicture}`}
            alt="Profile"
          />
        </div>
      )}
    </div>
  );
};

export default Profile;
