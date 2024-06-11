import {create} from "zustand"

export const useParkStore = create ((set) => ({
    loading: false,
    parkData: [],
    error: null,

    fetchParkData : async (URL) => {
        set({loading: true, error: null})
        try {
            const res = await fetch (URL)
            if(!res.ok){
                throw new Error("Faild to fetch data of parks.")
            }
            const data = await res.json()
            set({parkData:data, loading: false})
            
            console.log(parkData)
        } catch (err) {
            console.error("Error fetching the park data:", err)
        } finally {
            set({loading: false})
        }
    }
}))

//fetch parks two places:
//1. one in each country -> slides
//2. one in each parks 