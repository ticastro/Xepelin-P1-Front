import { Children } from "react"
import { Link, Outlet } from "react-router-dom"

interface DefaultLayoutProps {
    children: React.ReactNode
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
    return (
        <>
        <header>
            <nav>
                <ul>
                    <li><h1>Xepelin</h1></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/signup">Signup</Link></li>
                 </ul>
            </nav>
        </header>
        <main>
            {children}
        </main>
        </>
    )
    }