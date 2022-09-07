import React from 'react'
import './MyInfo.css'
import { BsFillInfoCircleFill } from '@react-icons/all-files/bs/BsFillInfoCircleFill'

function MyInfo() {
  return (
    <div className='my_info'>
      <h1><BsFillInfoCircleFill />자기 소개</h1>
      <div className='info_list'>
        <div>
          <h2>Q. 당신은 어떤 개발자인가요?</h2>
          <div className='info_detail'>
            저는 사용자의 경험을 기반으로 웹만드는걸 좋아하는 프론트엔드 개발자 박형석입니다.<br />
            React 라이브러리에서 원페이지 렌더링에 흥미를 느껴서 해당 라이브러리로 개발중입니다. <br />
            프로젝트를 하며 새로운 라이브러리를 배우는 것을 즐겨해서 프로젝트마다 새로운 기능을 넣고<br />
            그 속에서 오류를 찾아내면서 그 오류를 해결했을때의 짜릿함을 즐기는 개발자입니다. <br />
          </div>
        </div>
        <div>
          <h2>Q. 당신은 어떤 개발자가 되고싶나요?</h2>
            <div className='info_detail'>
              돈을 많이버는 개발자가 되고싶습니다<br />
              돈이란 성장에 재미를 느낄수 있는 큰 원동력이자 저의가치라고 생각합니다.<br />
              저는 그 원동력으로 빠른성장을 해서 경력이상의 가치있는 개발자가 되고싶습니다.
            </div>
        </div>
        <div>
          <h2>Q. 그런 개발자가 되기위해 어떤 노력을 하고 계신가요?</h2>
            <div className='info_detail'>
              사람인 , 원티드 , 워크넷 등 여러가지 취업포털사이트를 보며<br />
              최근 취업시장에 필요한 기술을들 보고 유튜브 , 구글링을 통해 프로젝트에 사용해보고있으며 , <br />
              사용하며 익혀지지않는부분은 강의구매로 클론코딩을하여 익혀서 프로젝트에 적용시키고있습니다. <br />
            </div>
        </div>
      </div>
    </div>
  )
}

export default MyInfo
