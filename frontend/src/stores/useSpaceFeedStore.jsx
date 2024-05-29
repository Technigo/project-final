import { create } from "zustand"

//Initial states
export const useSpaceFeedStore = create((set) => ({
  spaceFeed: [],
  loading: false,
  error: null,

  //Fetch the Space feed using API
  fetchSpaceFeed: async () => {
    set({ loading: true })

    try {
      const response = await fetch(process.env.API_KEY_SPACEFEED)
      const data = await response.json()

      set({ spaceFeed: data.response, loading: false })
    } catch (error) {
      set({ error, loading: false })
    }
  },

  postSpaceMessage: async (message) => {
    set({ loading: true })

    try {
      const response = await fetch(process.env.API_KEY_SPACEFEED, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      })
      const newMessage = await response.json()
      set((state) => ({
        spaceFeed: [newMessage.response, ...state.spaceFeed],
        loading: false,
      }))
    } catch (error) {
      set({ error, loading: false })
    }
  },

  likeSpaceMessage: async (messageId) => {
    set({ loading: true })

    try {
      const response = await fetch(
        `${process.env.API_KEY_SPACEFEED}/${messageId}/like`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({}),
        }
      )
      const likedMessage = await response.json()
      set((state) => ({
        spaceFeed: state.spaceFeed.map((message) =>
          message._id === messageId ? likedMessage.response : message
        ),
        loading: false,
      }))
    } catch (error) {
      set({ error, loading: false })
    }
  },
}))
