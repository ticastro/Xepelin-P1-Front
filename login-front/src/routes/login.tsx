import { useState } from "react"
import DefaultLayout from "../components/DefaultLayout"
import { useAuth } from "../auth/AuthProvider"
import { Navigate } from "react-router-dom"

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const auth = useAuth()
    
     if (auth.isAuthenticated) {
        return <Navigate to="/sheet" />
     }

    return (    
        <DefaultLayout> 

        <form className="form-login">
            <h1>Login</h1>
            <label htmlFor="email">Email</label>
            <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Login</button>
        </form>
        </DefaultLayout>
    )
}