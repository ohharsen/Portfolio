//import { Link } from "gatsby"
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
    <div
      style={{
        margin: `0 auto`,
        display: 'flex',
        listStyle: 'none',
        padding: `1rem`,
        justifyContent: 'space-between',

      }}
    >
      <div></div>
      <div></div>
    </div>
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
