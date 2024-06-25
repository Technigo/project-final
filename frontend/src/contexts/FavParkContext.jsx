import { createContext, useState, useContext, useEffect } from "react";
import { useAuthData } from "./AuthContext";


const FavParkContext = createContext();

export const FavParProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);
  const { user } = useAuthData();

  // Initialize favourites from localStorage
  useEffect(() => {
    const storedFavourites = JSON.parse(localStorage.getItem('favourites')) || [];
    setFavourites(storedFavourites);
  }, []);

  // Update favourites when user logs in or logs out
  useEffect(() => {
    if (!user) {
      setFavourites([]);
    } else {
      const storedFavourites = JSON.parse(localStorage.getItem('favourites')) || [];
      setFavourites(storedFavourites);
    }
  }, [user]);


  // Add to favourites and update localStorage
  const addToFavourites = async (parkId) => {
    try {
      const res = await fetch("https://parkhive.onrender.com/add-favourite", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${user.token}`,
        },
        body: JSON.stringify({ parkId }),
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error("Failed to add park to your account.");
      }
      const updatedFavourites = await res.json();
      setFavourites((prevFavourites) => {
        const newFavourites = [...prevFavourites, { _id: parkId }];
        localStorage.setItem('favourites', JSON.stringify(newFavourites));
        return newFavourites;
      });
      console.log(updatedFavourites);
    } catch (error) {
      console.error("Save error:", error);
      alert("Save failed:" + error.message);
    }
  };

  // Remove from favourites and update localStorage
  const removeFromFavourites = async (parkId) => {
    try {
      const res = await fetch("https://parkhive.onrender.com/remove-favourite", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${user.token}`,
        },
        body: JSON.stringify({ parkId }),
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error("Failed to add park to your account.");
      }
      const updatedFavourites = await res.json();
      setFavourites((prevFavourites) => {
        const newFavourites = prevFavourites.filter(fav => fav._id !== parkId);
        localStorage.setItem('favourites', JSON.stringify(newFavourites));
        return newFavourites;
      });
      console.log(updatedFavourites);
    } catch (error) {
      console.error("Remove error:", error);
      alert("Remove failed:" + error.message);
    }
  };

  return (
    <FavParkContext.Provider
      value={{ favourites, addToFavourites, removeFromFavourites }}
    >
      {children}
    </FavParkContext.Provider>
  );
};

export const useFavPark = () => useContext(FavParkContext);