import { create } from "zustand";
import { Loading } from "../components/Loading";

export const useWishStore = create((set, get) => ({
  wishlistUrl: "https://project-final-rvhj.onrender.com/wishlist",
  loading: false,
  wishlist: [],
  pageSize: 5,
  isLastpage: false,

  setWishlist: (newWish) =>
    set((state) => ({ ...state, wishlist: [newWish, ...state.wishlist] })),

  updateLikes: (likesData, wishId) => {
    set((state) => ({
      wishlist: state.wishlist.map((wish) =>
        wish._id === wishId ? { ...wish, likes: likesData } : wish
      ),
    }));
  },

  handleLike: async (event, wishId) => {
    event.preventDefault();
    const { updateLikes } = get();
    const { wishlistUrl } = get();

    try {
      const response = await fetch(
        `${wishlistUrl}/${wishId}/like`,
        // `http://localhost:8080/wishlist/${wishId}/like`,
        {
          method: "POST",
          body: JSON.stringify({}),
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      const likesData = result.likes;
      console.log("likes data:", likesData);

      updateLikes(likesData, wishId);
      console.log("updated wishlist with like:", get().wishlist);
    } catch (error) {
      console.error("Error posting like:", error);
      return false;
    }
  },

  fetchWishlist: async (page, sortField) => {
    const { pageSize } = get();
    const { wishlistUrl } = get();
    set({ loading: true });

    try {
      const response = await fetch(
        `${wishlistUrl}`
        // `http://localhost:8080/wishlist?page=${page}&pageSize=${pageSize}&sortField=${sortField}`
      );

      if (!response.ok) {
        set({ isLastPage: true });
        throw new Error("Network reponse was not ok ");
      }

      const data = await response.json();
      set({ wishlist: data, isLastPage: false });
    } catch (error) {
      console.error("Error fetching wishlist:", error);
      return false;
    } finally {
      set({ loading: false });
    }
  },
}));
