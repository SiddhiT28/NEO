import React, { useState } from 'react'
import { Outlet, Link, useNavigate } from 'react-router-dom'
import { HamBurger, CartIcon, Heart, SearchIcon } from '../Icon'
import LeftDrawer from '../LeftDrawer/LeftDrawer'
import "./navBar.css"

export default function NavBar() {

    const Navigate = useNavigate()

    const [isMenuBarOpen, setIsMenuBarOpen] = useState(false)

    const toggleMenuBar = () => {
        setIsMenuBarOpen(!isMenuBarOpen)
    }

    return (
        <div>
            <nav className='navBar'>
                {isMenuBarOpen && <LeftDrawer setIsMenuOpen={setIsMenuBarOpen} />}
                <ul>
                    <li>

                        <button onClick={toggleMenuBar} className='menuBtn'>
                            <HamBurger />
                        </button>
                    </li>

                    <li className='logo'>
                        <Link to="/">
                            <img src='/images/logo.png' alt='' />
                        </Link>
                    </li>

                    <li className='searchFelid'>
                        <input type="text" placeholder="Search your products" />
                        <SearchIcon />
                    </li>
                    <li className='cart'>
                        <Link to="/cart">
                            <CartIcon />
                        </Link>
                    </li>
                    <li className='favorites'>
                        <Link to="/favorites">
                            <Heart />
                        </Link>
                    </li>
                    <li className='user'>
                        <button onClick={() => {
                            Navigate('/login');
                        }}>
                            Login/Signup
                        </button>
                    </li>
                </ul>

            </nav>
            <Outlet />
        </div>
    )
}
