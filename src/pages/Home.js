import React from 'react'
import { ChevronRight } from '../components/Icon'
import "./home.css"

export default function Home() {
    return (
        <main className='main'>
            <section className='onGoingSale'>
                <div className='saleLabel'>
                    <p>On going sale</p>
                    <ChevronRight />
                </div>
                <ul>
                    <li>
                        10% OFF
                    </li>
                    <li>
                        20% OFF
                    </li>
                    <li>
                        30% OFF
                    </li>
                    <li>
                        50% OFF
                    </li>
                    <li>
                        70% OFF
                    </li>
                </ul>
            </section>
            <section className='newArrivals'>
                <div className='newArrivalsLabel'>
                    <p>New Arrivals</p>
                    <ChevronRight />
                </div>
                <ul>
                    {
                        [1, 2, 3].map((index, item) => (
                            <li key={index}>
                                <img src="/images/demoImageBook.png" alt="" />
                                <p>The DA Vinci Code</p>
                                <p>₹ 5,192.00</p>
                            </li>
                        ))
                    }
                </ul>

            </section>
        </main>
    )
}
