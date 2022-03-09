import React from 'react'
import { CrossIcon } from '../Icon'
import "./leftDrawer.css";
import { Link } from 'react-router-dom'

export default function LeftDrawer({ setIsMenuOpen, isMenuBarOpen }) {


    const CategoryList = [
        {
            name: "Children Books",
            path: "/children-books"
        },
        {
            name: "Teen Fiction",
            path: "/teen-fiction"
        },
        {
            name: "Fiction & Non-Fiction",
            path: "/fiction-non-fiction"
        },
        {
            name: "New Books",
            path: "/new-books"
        },
        {
            name: "Best Selling Authors",
            path: "/best-selling-authors"
        },
        {
            name: "Informative / Activity",
            path: "/informative-activity"
        },
        {
            name: "Books On Offer",
            path: "/books-on-offer"
        },
        {
            name: "Editors Picks",
            path: "/editor-picks"
        },
        {
            name: "Biography, Auto Biography & Memories",
            path: "/biography-auto-biography-memories"
        },

        {
            name: "Cooking, Food & Wine",
            path: "/cooking-food-wine"
        },
        {
            name: "History & Politics",
            path: "/history-politics"
        },
        {
            name: "Sports",
            path: "/sports"
        },
    ]

    return (
        <div className='drawerBg' style={{ left: isMenuBarOpen ? "0" : "-100%" }} onClick={() => setIsMenuOpen(false)}>
            <div className='drawerLeft' style={{ left: isMenuBarOpen ? "0" : "-100px" }} >
                <div className='drawerContent' onClick={(e) => {
                    e.stopPropagation()
                }}>
                    <div className='header' onClick={() => setIsMenuOpen(false)}>
                        <h2>Category</h2>
                        <CrossIcon />
                    </div>
                    <div className='categoryList'>
                        <ul>
                            {
                                CategoryList.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <Link to={item.path}>
                                                {item.name}
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
