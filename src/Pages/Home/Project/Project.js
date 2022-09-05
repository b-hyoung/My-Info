import React, { useState } from 'react'
import './Project.css'
import { MdReceipt } from '@react-icons/all-files/md/MdReceipt'


function Project() {

    const [click , setClick] = useState("")

    const handleClickViewMore = () => {
        if(click){
            setClick(false)
        }else{
            setClick(true)
        }
    }

    return (
        <div className='Project'>
            <header>
                <h1><MdReceipt />프로젝트 경험</h1>
            </header>
            <div className='Project_info'>
                <div className={click ? 'Project_Eri' : 'Project_Eriwa'}>
                    <h1>Eriwa</h1>
                    <div>
                        게임사에서 api를 제공받아<br /> 개발한 유저 전적검색 사이트입니다.
                        <ul>
                            <li>개발 인원 : 2명</li>
                            <li>기간 : 04월15일 ~ 05월20일</li>
                        </ul>
                    <h3>Front-End</h3>
                    <ul>
                        <li>HTML/CSS3 </li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>React-BootStrap</li>
                    </ul>
                    <h3>프로젝트 후기</h3>
                    <div className='hugi'>
                        처음 제작했던 리액트 앱으로  <br />
                        오각형 차트나 그래프를 구현하며<br />
                        HTML / CSS의 이해도가 많이 올라갔습니다. <br />
                        모드별 정보를 가져오고 그 정보를 보여주며 <br />
                        상태관리를 이해할 수 있던 좋은 프로젝트였습니다.
                    </div>
                    <button className='Eri_Btn' onClick={() => handleClickViewMore()}>View More...</button>
                    </div>
                </div>
                <div className='Project_ReS'>
                    <h1>ReSee</h1>
                    <div>
                        노트 앱으로 기록하고 다시보자는<br />
                        기획으로 만든 마크다운 웹앱입니다.
                        <ul>
                            <li>개발 인원 : 2명</li>
                            <li>기간 : 06월17일 ~ 07월19일</li>
                        </ul>
                    <h3>Front-End</h3>
                    <ul>
                        <li>HTML/CSS3 </li>
                        <li>JavaScript ES6++</li>
                        <li>React</li>
                        <li>React-BootStrap</li>
                    </ul>
                    <h3>프로젝트 후기</h3>
                    <div className='hugi'>
                        부트스트랩이나 구글아이콘 , 리액트 마크다운<br />
                        여러가지 라이브러리를 사용해봤던 앱으로<br />
                        jwt방식 로그인이나 정규표현식을 이용한<br /> 
                        회원가입 즉각피드백을구현하며 <br/>
                        사용자 UX에 재미를 느낀 프로젝트 였습니다.
                    </div>
                    <button className='Eri_Btn' onClick={() => handleClickViewMore()}>View More...</button>
                    </div>
                </div>
                <div className='Project_Clo'>
                    <h1>Clover</h1>
                    <div>
                        소모임을 가입하고싶거나 <br />
                        사람을 찾는 커뮤니티 웹앱입니다.
                        <ul>
                            <li>개발 인원 : 2명</li>
                            <li>기간 : 08월03일 ~ 08월30일</li>
                        </ul>
                    <h3>Front-End</h3>
                    <ul>
                        <li>HTML/CSS3 </li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>React-BootStrap</li>
                    </ul>
                    <h3>프로젝트 후기</h3>
                    <div className='hugi'>
                        해당 프로젝트에서는 네이버검색방식인 <br />
                        쿼리를 이용한 카테고리검색을 구현해봤는데<br />

                    </div>
                    <button className='Eri_Btn' onClick={() => handleClickViewMore()}>View More...</button>
                    </div>
                </div>
                <div className='Project_list'>
                    <div>ReSee</div>
                    <div>Clover</div>
                </div>
            </div>
        </div>
    )
}

export default Project
