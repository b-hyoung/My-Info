import React from 'react'
import './Navigation.css'
import {IoIosArrowUp} from '@react-icons/all-files/io/IoIosArrowUp'
import {IoIosArrowDown} from '@react-icons/all-files/io/IoIosArrowDown'

function Navigation() {
  return (
    <div className='Nav'>
      <div><IoIosArrowUp style={{fontSize:"20px" , fontWeight:"700"}} /></div>
      <div className='Nav_mokcha'>
        <div>소개</div>
        <div>프로젝트</div>
        <div>자기소개서</div>
      </div>
      <div><IoIosArrowDown style={{fontSize:"20px" , fontWeight:"700"}} /></div>
    </div>
  )
}

export default Navigation
