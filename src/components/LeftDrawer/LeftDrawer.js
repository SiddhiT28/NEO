import React from 'react'
import { CrossIcon } from '../Icon'
import "./leftDrawer.css"

export default function LeftDrawer({ setIsMenuOpen }) {
    return (
        <div className='drawerBg'>
            <div className='drawerLeft'>
                <div className='drawerContent'>
                    <div className='header' onClick={() => setIsMenuOpen(false)}>
                        <h2>Category</h2>
                        <CrossIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}
