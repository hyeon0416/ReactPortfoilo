import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.css'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={28}
            />
          </h1>
          <p>
            안녕하세요. 저는 현승환이라고 합니다. 웹개발을 주로 하고 있으며 게임개발과 보안과 블록체인에 관심이 많습니다.
          </p>
          <p align="LEFT">
            주로 사용하는 언어는 자바스크립트 입니다. node.js를 이용해 간단한 웹 서버를 구축 할수있으며, 
            AWS를 이용해 베포를 진행 할수있습니다.
            사용하는 OS는 유닉스 기반의 맥OS를 사용 하고 있으며, 리눅스와 윈도우 사용가능 합니다.
          </p>
          <p>
            최근에는 nft 게임을 만들기 위해서 솔리디티를 사용하여 스마트 계약을 생성 했고,
            웹게임에도 관심이 많아서 phaser를 손대고 있습니다.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
