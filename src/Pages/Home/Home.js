import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navigation from '../Components/Navigation/Navigation'
import Hero from './hero/Hero'
import './Home.css'

function Home() {

  

    const navigate = useNavigate("")


    return (
        <div>
            <Navigation />
            <Hero />
            <div className='Project-main'>

            </div>
        </div>
    )
}

export default Home
