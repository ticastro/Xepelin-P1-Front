import DefaultLayout from "../components/DefaultLayout"
import { useState } from "react"
import { useAuth } from "../auth/AuthProvider"
import { Navigate } from "react-router-dom"


export default function Signup() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const auth = useAuth()

    if (auth.isAuthenticated) {
        return <Navigate to="/sheet" />
    }
    
    return (
        <DefaultLayout>

        <form className="form-signup">
            <h1>Signup</h1>
            <label htmlFor="username">Username</label>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Signup</button>
        </form>
        </DefaultLayout>
    )
}