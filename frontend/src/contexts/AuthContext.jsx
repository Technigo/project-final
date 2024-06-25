import {createContext, useState, useContext, useEffect  } from "react"

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    useEffect(()=> {
        const token = localStorage.getItem("Net-Token")
        const email = localStorage.getItem("user")
        if(token && email) {
            setUser({email, token})
        }
    }, [])

    const login = (email, token) => {
        localStorage.setItem("Net-Token", token)
        localStorage.setItem("user", email)
        setUser({email, token})
    }

    const logout = () => {
        localStorage.removeItem("Net-Token")
        localStorage.removeItem("user")
        localStorage.removeItem("favourites")
        setUser(null)
    }

    return(
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthData = () => useContext(AuthContext)