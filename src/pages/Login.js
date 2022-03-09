import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { EyeCloseIcon, EyeOpenIcon } from '../components/Icon'
import "./login.css"
export default function Login() {

    const [eyeIsClose, setEyeIsClose] = useState(true)
    const Navigation = useNavigate()

    const handleTooglePasswordChagne = () => {
        setEyeIsClose(!eyeIsClose)
    }

    return (
        <main className='mainLogin'>
            <img src='/images/logo.png' alt='' />
            {/* <h1>Login</h1> */}
            <form>
                <div className='inputContainer' style={{ height: "auto" }}>
                    <div className='inputGrp'>
                        <label>Email*</label>
                        <input type="email" />
                    </div>
                    <div className='inputGrp'>
                        <label>Password*</label>
                        <div className='inputPasswordGrp'>
                            <input type={eyeIsClose ? "password" : "text"} />
                            <button type='button' onClick={handleTooglePasswordChagne}>
                                {eyeIsClose ? <EyeCloseIcon /> : <EyeOpenIcon />}
                            </button>
                        </div>
                    </div>
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
