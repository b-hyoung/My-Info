import React, { useEffect, useState } from 'react'
import './Project.css'
import { MdReceipt } from '@react-icons/all-files/md/MdReceipt'
import { FaGithub } from '@react-icons/all-files/fa/FaGithub'


function Project({ref}) {

    const gitEriwa = 'https://github.com/djgnfj-svg/view'
    const gitReSee = 'https://github.com/djgnfj-svg/Resee_project'
    const gitClover = 'https://github.com/djgnfj-svg/Clover'

    const one = 'eriwa'
    const two = 'ReSee'
    const thr = 'Clover'

    const [view, setView] = useState(0)

    const handleviewViewMore = (e) => {
        if (e === one) {
            setView(one)
        } else if (e === two) {
            setView(two)
        } else if (e === thr) {
            setView(thr)
        } else if (e === undefined) {
            setView(0)
        }
    }


    return (
        <div className='Project' ref={ref}>
            <header>
                <h1><MdReceipt />프로젝트 경험</h1>
            </header>
            <div className='Project_info'>
                <div className={view === one ? 'Project_Eriwa' : 'Project_Eri'}>
                    {view !== one ? (
                        <>
                            <h1>Eriwa</h1>
                            <div>
                                게임사에서 api를 제공받아<br /> 개발한 유저 전적검색 사이트입니다.
                                <ul>
                                    <li>개발 인원 : 2 명 <br />프론트(본인) ,백엔드</li>
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
                                <button className='Eri_Btn' onClick={() => handleviewViewMore(one)}>View More...</button>
                            </div>
                        </>
                    ) :
                        (
                            <>
                                <h1>Eriwa</h1>
                                <div className='Detail_Eriwa'>
                                    게임사에서 api를 제공받아<br /> 개발한 유저 전적검색 사이트입니다.
                                    <div style={{ padding: "2rem 2rem" }}>
                                        <ul className='Detail_develop'>
                                            <li>개발 인원 : 2 명 <br /> 프론트(본인) , 백엔드</li>
                                            <li>기간 : 04월15일 ~ 05월20일</li>
                                        </ul>
                                        <div className='Detail_git'>
                                            <FaGithub style={{ height: "30px", width: "30px" }} />Github : <a onClick={() => window.open(gitEriwa, ['_blank'])}>{gitEriwa}</a>
                                        </div>
                                        <h2>* 프로젝트 기능</h2>
                                        <div className='Detail_description'>
                                            op.gg / dak.gg 를 참고하여 제작한사이트로<br />
                                            쿼리파라미터로 검색기능을 구현했고 Restful Api로 통신했습니다<br />
                                            개인의 전적을 그래프로 나타냈으며 , 상태관리로 모드(솔로,듀오)별 정보를 보여주도록 구현했습니다.
                                        </div>
                                    </div>
                                    <button className='Eriwa_Btn' onClick={() => handleviewViewMore(undefined)}>Close</button>
                                </div>
                            </>
                        )}
                </div>
                <div className={view === two ? 'Project_Eriwa' : 'Project_ReS'}>
                    {view !== two ? (
                        <>
                            <h1>ReSee</h1>
                            <div>
                                노트 앱으로 기록하고 다시보자는<br />
                                기획으로 만든 마크다운 웹앱입니다.
                                <ul>
                                    <li>개발 인원 : 2 명 <br /> 프론트(본인) , 백엔드</li>
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
                                    회원가입 즉각피드백을구현하며 <br />
                                    사용자 UX에 관심이 많아진 프로젝트였습니다.
                                </div>
                                <button className='Eri_Btn' onClick={() => handleviewViewMore(two)}>View More...</button>
                            </div>
                        </>
                    ) : (
                        <>
                            <h1>ReSee</h1>
                            <div className='Detail_Eriwa'>
                                자기가 쓴 글이나 사진을 기록한 후<br />
                                복습주기를 정해서 다시보자라는 기획으로 제작된 웹입니다.
                                <div style={{ padding: "2rem 2rem" }}>
                                    <ul className='Detail_develop'>
                                        <li>개발 인원 : 2 명 <br /> 프론트(본인) , 백엔드</li>
                                        <li>기간 : 06월17일 ~ 07월19일</li>
                                    </ul>
                                    <div className='Detail_git'>
                                        <FaGithub style={{ height: "30px", width: "30px" }} />Github : <a onClick={() => window.open(gitReSee, ['_blank'])}>{gitReSee}</a>
                                    </div>
                                    <h2>* 프로젝트 기능</h2>
                                    <div className='Detail_description'>
                                        회원가입은 유저에게 즉시 피드백이 가능하도록 정규표현식을 이용해 검사 후 <br />
                                        화면 밖 클릭 시 서버에서 전송되도록 설정해 즉각 피드백 시스템을 구현했습니다.<br />
                                        로그인은 보안을위해 jwt방식을 이용했으며 <br />
                                        텍스트창에 사진이나 스크린샷과 마크다운기능을 넣고싶어 toaste ul Edit 라이브러리를 이용했습니다.
                                    </div>
                                </div>
                                <button className='Eriwa_Btn' onClick={() => handleviewViewMore(undefined)}>Close</button>
                            </div>
                        </>
                    )}
                </div>
                <div className={view === thr ? 'Project_Eriwa' : 'Project_Clo'}>
                    {view !== thr ? (
                        <>
                            <h1>Clover</h1>
                            <div>
                                소모임을 가입하고싶거나 <br />
                                사람을 찾는 커뮤니티 웹앱입니다.
                                <ul>
                                    <li>개발 인원 : 2 명 <br /> 프론트(본인) , 백엔드</li>
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
                                    쿼리를 이용한 카테고리검색과 <br />
                                    권한에 따른 클럽 관리자 페이지를 구현했습니다.
                                </div>
                                <button className='Eri_Btn' onClick={() => handleviewViewMore(thr)}>View More...</button>
                            </div>
                        </>
                    ) : (
                        <>
                            <h1>Clover</h1>
                            <div className='Detail_Eriwa'>
                                소모임을 가입하고싶거나 <br />
                                사람을 찾는 커뮤니티 웹앱입니다.
                                <div style={{ padding: "2rem 2rem" }}>
                                    <ul className='Detail_develop'>
                                        <li>개발 인원 : 2 명 <br /> 프론트(본인) , 백엔드</li>
                                        <li>기간 : 08월03일 ~ 08월30일</li>
                                        <li>해당 프로젝트에서 깃플로우 방식을 도입해봤고 , 페이지 별로 나눠 작업하여 내가만든기능이 팀원이 만든 기능과 코드가 겹치지않고
                                            만일 겹쳤다고해도 각자의 브런치에서 해결한 뒤 하나에 합친다는 방식이 좋았습니다. </li>
                                    </ul>
                                    <div className='Detail_git'>
                                        <FaGithub style={{ height: "30px", width: "30px" }} />Github : <a onClick={() => window.open(gitClover, ['_blank'])}>{gitClover}</a>
                                    </div>
                                    <h2>* 프로젝트 기능</h2>
                                    <div className='Detail_description'>
                                        네이버쇼핑을 참고하여 쿼리파라미터를 이용하여 <br />
                                        클릭 시마다 클럽들 정보를 보여주는 카테고리 서치를 구현했습니다.<br />
                                        jwt방식을 이용해 일부토큰이 있다면 페이지 자동로그인을 시켜주고   <br />
                                        해당토큰으로 권한을 발급하여 클럽 썸네일 및 소개 수정 및 해체를 구현했습니다.
                                    </div>
                                </div>
                                <button className='Eriwa_Btn' onClick={() => handleviewViewMore(undefined)}>Close</button>
                            </div>
                        </>
                    )}
                </div>
                {view !== 0 && (
                    <div className='Project_list'>
                        {view !== one && (
                            <div onClick={() => handleviewViewMore(one)}>Eriwa</div>
                        )}
                        {view !== two && (
                            <div onClick={() => handleviewViewMore(two)}>ReSee</div>
                        )}{view !== thr && (
                            <div onClick={() => handleviewViewMore(thr)}>Clover</div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Project
