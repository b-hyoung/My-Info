import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navigation from '../Components/Navigation/Navigation'
import Hero from './hero/Hero'
import './Home.css'
import Project from './Project/Project'

function Home() {

  

    const navigate = useNavigate("")


    return (
        <div>
            <Navigation />
            <Hero />
            <Project />
        </div>
    )
}

export default Home
