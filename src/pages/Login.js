import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./login.css"
export default function Login() {

    const Navigation = useNavigate()

    return (
        <main className='mainLogin'>
            <h1>Welcome to Neo</h1>
            <form>
                <div className='inputGrp'>
                    <label>Email</label>
                    <input type="email" />
                </div>
                <div className='inputGrp'>
                    <label>Password</label>
                    <input type="password" />
                </div>

                <button
                    onClick={() => Navigation('/')}
                >Login</button>
            </form>
            <p>Don't have an account?
                <Link to="/register">Register</Link>
            </p>
        </main>
    )
}
