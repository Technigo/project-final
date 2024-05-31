import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Menu from "../../utilities/Menu";

const Profile = () => {
  const [user, setUser] = useState(null);
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
        const response = await axios.get(
          "https://project-final-rmn2.onrender.com/api/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
        if (error.response?.status === 401) {
          localStorage.removeItem("authToken");
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!user) {
    return <div>No user found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Menu />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-4">Profile</h1>
        <p>
          <strong>Username:</strong> {user.username}
        </p>
        <p>
          <strong>Role:</strong> {user.role}
        </p>
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Bio:</strong> {user.bio}
        </p>
        <img src={user.profilePicture} alt="Profile" />
      </div>
    </div>
  );
};

export default Profile;
