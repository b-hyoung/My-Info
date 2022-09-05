import React from 'react'
import profileImg from './img/profile.jpeg'
import { useNavigate } from 'react-router-dom'
import './Hero.css'
import { FaGithub } from '@react-icons/all-files/fa/FaGithub'
import { FaBookReader } from '@react-icons/all-files/fa/FaBookReader'
import { MdEmail } from '@react-icons/all-files/md/MdEmail'
import { RiVipDiamondFill } from '@react-icons/all-files/ri/RiVipDiamondFill'
import { MdReceipt } from '@react-icons/all-files/md/MdReceipt'
import { BsTools } from '@react-icons/all-files/bs/BsTools'
import { BsPhone } from '@react-icons/all-files/bs/BsPhone'


function Hero() {

    const Email = 'youqlrqod@gmail.com'
    const velogUrl = 'https://velog.io/@h-young'
    const githunUrl = 'https://www.githun/b-hyoung'


    const handleClickClipBoard = async () => {
        try {
            navigator.clipboard.writeText(Email)
            alert("이메일 복사 완료")
        } catch (error) {
            alert("복사 실패")
        }
    }


  return (
    <div className='hero-main'>
                <header>
                    <h1><span>UI / UX</span> 에 관심이 많고<br />
                        에러해결에 <span>짜릿함</span>을 느끼는<br />
                        프론트엔드 개발자 <span style={{ color: "#F95700" }}>박형석</span>입니다.</h1>
                </header>
                <div className='profile_info'>
                    <div className='profile_img'>
                        <img src={profileImg} />
                    </div>
                    <div className='profile_Link'>
                        <ul>
                            <li><FaGithub /> Github :&nbsp;<a onClick={() => window.open(githunUrl, ['_blank'])}>{githunUrl}</a></li>
                            <li><FaBookReader /> Velog :&nbsp; <a onClick={() => window.open(velogUrl, ['_blank'])}>{velogUrl}</a></li>
                            <li><MdEmail /> Email :&nbsp; <a onClick={() => handleClickClipBoard()}>{Email}</a></li>
                            <li><BsPhone /> PhonNum :&nbsp;<a >010-1234-5678</a></li>
                        </ul>
                    </div>
                </div>
                <div className='profile_skill'>
                    <div className='skill'>
                        <div className='list_skill'><RiVipDiamondFill />&nbsp;Skill</div>
                        <ul >
                            <li>HTML / CSS3</li>
                            <li>JavaScript ES6++</li>
                            <li>JQuery</li>
                            <li>React , Redux</li>
                            <li>TypeScript / Study ..ing</li>
                            <li>AWS</li>
                        </ul>
                    </div>
                    <div className='tool'>
                        <div className='list_skill'><BsTools />&nbsp;Tool</div>
                        <ul>
                            <li>Vs Code</li>
                            <li>Notion</li>
                        </ul>
                    </div>
                    <div className='project'>
                        <div className='list_skill'><MdReceipt />&nbsp;Project</div>
                        <ul>
                            <li>Eriwa</li>
                            <li>ReSee</li>
                            <li>Clover</li>
                        </ul>
                    </div>
                </div>
            </div>
  )
}

export default Hero
