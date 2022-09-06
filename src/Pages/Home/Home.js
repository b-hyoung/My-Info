import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Navigation from '../Components/Navigation/Navigation'
import Hero from './Section/hero/Hero'
import './Home.css'
import Project from './Section/Project/Project'
import MyInfo from './Section/MyInfo/MyInfo'

function Home() {

    const navigate = useNavigate("")
    const project = useRef(null)


    return (
        <div>
            <Navigation ref={project} />
            <div style={{marginBottom:"100px"}}>
                <Hero  />
            </div>
            <div id='project'>
                <Project ref={project} />
            </div>
            <div id='MyInfo'>
                <MyInfo  />
            </div>
        </div>
    )
}

export default Home
