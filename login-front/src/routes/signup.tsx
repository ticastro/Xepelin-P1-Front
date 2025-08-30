import DefaultLayout from "../components/DefaultLayout"
import { useState } from "react"
import { useAuth } from "../auth/AuthProvider"
import { Navigate } from "react-router-dom"
import React from "react"
import { AuthResponseError } from "../types/types"




export default function Signup() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const auth = useAuth()
    
    async function handlesubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

    
        try {
            const response = await fetch('http://localhost:3002/api/signup', {
                method: 'POST',
                body: JSON.stringify({ username, email, password }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if (response.ok) {
                console.log(response)
                console.log('Signup successful')
            } else {
                const jsonResponse = await response.json() as AuthResponseError;
                console.log('Signup failed')
            }
        } catch (error) {
            console.error(error)
        }
    }

    
    if (auth.isAuthenticated) {
        return <Navigate to="/sheet" />
    }
    
    return (
        <DefaultLayout>

        <form className="form-signup" onSubmit={handlesubmit}>
            <h1>Signup</h1>
            {error && <p>{error}</p>}
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