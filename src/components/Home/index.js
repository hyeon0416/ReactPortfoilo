import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.css'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const sayHi = ['안','녕','하','세','요',' ','.']
  const nameArray = ['현', '승', '환', '입', '니', '다','.']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
          <AnimatedLetters letterClass={letterClass} strArray={sayHi} idx={1} />
          <br/>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={8}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={15}
            />
          </h1>
          <h2> Web Developer / JavaScript Expert </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
