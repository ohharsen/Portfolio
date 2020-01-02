import { Link } from "gatsby"
import PropTypes from "prop-types"
import React,{useState, useLayoutEffect} from "react"
//useEffect
import "./header.scss";

const Header = ({ siteTitle }) => {  
  const [isOnTop, setIsOnTop] = useState(true);

  useScrollPosition(( currPos ) => {
    if (currPos.y !== 0) setIsOnTop(false);
    else setIsOnTop(true);
  })
  
  return <header className={!isOnTop ? 'active' : ''}>
    <nav>
      <div class = "logo-container">
        <Link to = '/'>
        </Link>
      </div>
      <ul class = "nav-buttons">
        <li class = "active" id="home-button"><Link to = "">Home</Link></li>
        <li>|</li>
        <li id="about-button"><Link to = "">About</Link></li>
        <li>|</li>
        <li id="projects-button"><Link to = "">Projects</Link></li>
        <li>|</li>
        <li id="experience-button"><Link to = "">Experience</Link></li>
        <li>|</li>
        <li id="contact-button"><Link to = "">Contact</Link></li>
      </ul>
    </nav>
  </header>
}

function getScrollPosition({ element, useWindow }) {
  const isBrowser = typeof window !== `undefined`
  if (!isBrowser) return { x: 0, y: 0 }

  const target = element ? element.current : document.body
  const position = target.getBoundingClientRect()

  return useWindow
    ? { x: window.scrollX, y: window.scrollY }
    : { x: position.left, y: position.top }
}

function useScrollPosition(effect, deps, element, useWindow, wait) {


  const callBack = () => {
    const currPos = getScrollPosition({ element, useWindow })
    effect(currPos)
  }
  useLayoutEffect(() => {

    window.addEventListener('scroll', callBack)

    return () => window.removeEventListener('scroll', callBack)
  })
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
