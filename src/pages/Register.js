import React, { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { EyeCloseIcon, EyeOpenIcon } from '../components/Icon'
import "./register.css"

export default function Register() {

    // useRef for input
    const nameInput = useRef()
    const emailInput = useRef()
    const passwordInput = useRef()
    const confirmPasswordInput = useRef()
    const phoneInput = useRef()

    // useState for password
    const [eyeIsClose, setEyeIsClose] = useState(true)
    const [confirmEyeIsClose, setConfirmEyeIsClose] = useState(true)

    // useState for validations
    const [isValidEmail, setIsValidEmail] = useState(true)
    const [isValidPassword, setIsValidPassword] = useState(true)
    const [confirmPasswordMatch, setConfirmPasswordMatch] = useState(true)
    const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true)

    // Regular expression for email
    const emailRegex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

    // Regular expression for password
    var mediumRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

    // Regular expression for phone number
    const phoneRegex = new RegExp("^[0-9]{10}$");

    const Navigation = useNavigate()

    const handleTogglePasswordChange = () => {
        setEyeIsClose(!eyeIsClose)
    }

    const handleToggleConfirmPasswordChange = () => {
        setConfirmEyeIsClose(!confirmEyeIsClose)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // check if user enter all fields
        if (nameInput.current.value === "" || emailInput.current.value === "" || passwordInput.current.value === "" || confirmPasswordInput.current.value === "" || phoneInput.current.value === "") {
            alert("Please enter all fields")
        } else {
            if (isValidEmail && isValidPassword && confirmPasswordMatch && isValidPhoneNumber) {


                const userData = {
                    name: nameInput.current.value,
                    email: emailInput.current.value,
                    password: passwordInput.current.value,
                    phone: phoneInput.current.value
                }

                Navigation('/login')
            }

        }

    }
    return (
        <main className='mainLogin'>
            <img src='/images/logo.png' alt='' />
            <h1>Welcome to NEO</h1>
            <form>
                <div className='inputContainer'>
                    <div className='inputGrp'>
                        <label>Name*</label>
                        <input type="text" ref={nameInput} />
                    </div>
                    <div className='inputGrp'>
                        <label>Email*</label>
                        <input
                            type="email"
                            ref={emailInput}
                            onChange={() => {
                                // check if user enter valid email
                                if (emailInput.current.value !== "") {
                                    if (emailRegex.test(emailInput.current.value)) {
                                        setIsValidEmail(true)
                                    } else {
                                        setIsValidEmail(false)
                                    }
                                }
                            }}
                        />
                        {!isValidEmail && <p className='error'>Please enter a valid email</p>}
                    </div>

                    <div className='inputGrp'>
                        <label>Password*</label>
                        <div className='inputPasswordGrp'>

                            <input
                                type={eyeIsClose ? "password" : "text"}
                                ref={passwordInput}
                                onChange={() => {
                                    // check if user enter valid password
                                    if (passwordInput.current.value !== "") {
                                        if (mediumRegex.test(passwordInput.current.value)) {
                                            setIsValidPassword(true)
                                        } else {
                                            setIsValidPassword(false)
                                        }
                                    }
                                }}
                            />

                            <button type='button' onClick={handleTogglePasswordChange}>
                                {eyeIsClose ? <EyeCloseIcon /> : <EyeOpenIcon />}
                            </button>

                        </div>

                        {!isValidPassword && <p className='error'>P Password must be at least 8 characters long and contain at least one number, one special symbol, one lowercase and one uppercase letter</p>}

                    </div>

                    <div className='inputGrp'>
                        <label>Confirm Password*</label>
                        <div className='inputPasswordGrp'>
                            <input
                                type={confirmEyeIsClose ? "password" : "text"}
                                ref={confirmPasswordInput}
                                onChange={() => {
                                    // check if user enter valid password
                                    if (confirmPasswordInput.current.value !== "") {
                                        if (passwordInput.current.value === confirmPasswordInput.current.value) {
                                            setConfirmPasswordMatch(true)
                                        } else {
                                            setConfirmPasswordMatch(false)
                                        }
                                    }
                                }}
                            />


                            <button type='button' onClick={handleToggleConfirmPasswordChange}>
                                {confirmEyeIsClose ? <EyeCloseIcon /> : <EyeOpenIcon />}
                            </button>
                        </div>

                        {!confirmPasswordMatch && <p className='error'>Password does not match</p>}

                    </div>
                    <div className='inputGrp'>
                        <label>Phone number*</label>
                        <input
                            type="text"
                            ref={phoneInput}
                            maxLength={10}
                            onChange={() => {
                                // check if user enter valid phone number
                                if (phoneInput.current.value !== "") {
                                    if (phoneRegex.test(phoneInput.current.value)) {
                                        setIsValidPhoneNumber(true)
                                    } else {
                                        setIsValidPhoneNumber(false)
                                    }
                                }
                            }}
                        />

                        {!isValidPhoneNumber && <p className='error'>Please enter a valid phone number</p>}
                    </div>


                </div>

                <button
                    onClick={handleSubmit}
                >Register</button>
            </form>
            <p>Already have an account?
                <Link to="/login">Login</Link>
            </p>
        </main>
    )
}
