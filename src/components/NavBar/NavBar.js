import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { HamBurger, CartIcon, Heart, SearchIcon } from '../Icon'
import "./navBar.css"

export default function NavBar() {
    return (
        <div>
            <nav className='navBar'>
                <ul>
                    <li>

                        <button className='menuBtn'>
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
                        <button>
                            Login/Signup
                        </button>
                    </li>
                </ul>

            </nav>
            <Outlet />
        </div>
    )
}
