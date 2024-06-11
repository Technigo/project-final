import {create} from "zustand"


export const useUserStore = create ((set, get) => ({
    name: "",
    loading: false,
    error: null,
    password: "",
    email: "",
    authToken: localStorage.getItem('Net-Token') || null,

    postUserRegister: async (name, email, password) => {
        set({loading:true, error:null})
        try {
            const res = await fetch("https://parkhive.onrender.com/register", {
               method: "POST" ,
               headers: {
                "Content-Type": "application/json"
               }, 
               body: JSON.stringify({name, password, email})
            })
            if(!res.ok) {
                throw new Error("Register failed")
                //redirect(navigate) to signup page
            }
            const data = await res.json()
            console.log("registration successful:", data)
            const token = data.token
            set({authToken: token})
            localStorage.setItem('Net-Token', token)
            // navigate ("/logged")
        } catch (error) {
            console.error("Registration error:", error)
            set({error: error.message})
            //redirect
        } finally {
            set({loading: false})
        }
    },

    postUserLogin: async (email, password) => {
        set({loading:true, error:null})
        try {
            const res = await fetch("https://parkhive.onrender.com/login", {
               method: "POST" ,
               headers: {
                "Content-Type": "application/json"
               }, 
               body: JSON.stringify({password, email})
            })
            if(!res.ok) {
                throw new Error("Register failed")
                //redirect(navigate) to signup page
            }
            const data = await res.json()
            console.log("registration successful:", data)
            const token = data.token
            set({authToken: token})
            localStorage.setItem('Net-Token', token)
            // navigate ("/logged")
        } catch (error) {
            console.error("Registration error:", error)
            set({error: error.message})
            //redirect
        } finally {
            set({loading: false})
        }
    },

    userSignup: async() => {
        const { name, password, email, postUserRegister } = get();
        console.log("Signing up with:", { name, password, email });
        await postUserRegister(name, password, email)
    },
    userLogin: async() => {
        const {email, password, postUserLogin} = get();
        console.log("Login with:", {email, password})
        await postUserLogin(email, password)
    },
    setName: (name)=> set({name}),
    setEmail: (email)=> set({email}),
    setPassword: (password) => set ({password}),
    logout: () => {
        set({authToken: null});
        localStorage.removeItem('Net-Token')
    }
}))