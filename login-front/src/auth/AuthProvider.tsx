import { createContext, useState, useContext, useEffect } from "react"

interface AuthProviderProps {
    children: React.ReactNode
}

export const AuthContext = createContext({
    isAuthenticated: false,
})

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [isAuthenticated, setIsAuthenticated] = useState(true)

    return <AuthContext.Provider value={{ isAuthenticated }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext)
}