import { Link } from "react-scroll"
import PropTypes from "prop-types"
import React,{useState, useLayoutEffect} from "react"
import HamburgerMenu from "react-hamburger-menu"

import "./header.scss";

const Header = ({ siteTitle }) => {  
  const [isOnTop, setIsOnTop] = useState(true);

  const [isHamburgerOpen, setHamburger] = useState(false);

  useScrollPosition(( currPos ) => {
    if (currPos.y !== 0) setIsOnTop(false);
    else setIsOnTop(true);
    if(Math.abs(document.querySelector('#home-page').getBoundingClientRect().top) <= window.innerHeight/1.8){
      toggleActive('home-page')
    }
    else if(Math.abs(document.querySelector('#about-me').getBoundingClientRect().top) <= window.innerHeight/1.8){
      toggleActive('about-me')
    }
    else if(Math.abs(document.querySelector('#projects').getBoundingClientRect().top) <= window.innerHeight/1.8){
      toggleActive('projects')
    }
    else if(Math.abs(document.querySelector('#experience').getBoundingClientRect().top) <= window.innerHeight/1.8){
      toggleActive('experience')
    }
    if(Math.abs(document.querySelector('#contact').getBoundingClientRect().top) <= window.innerHeight/1.5){
      toggleActive('contact')
    }
  }, null, null, true)
  
  function handleHambrugerClick(){
    setHamburger(!isHamburgerOpen)
    var menu = document.querySelector(".mobile-menu");
    if(menu.className === "mobile-menu" || menu.className === "mobile-menu closed"){
      menu.className = "mobile-menu open"
    }  
    else{
      menu.className = "mobile-menu closed"
    }

  }

  return <header className={!isOnTop ? 'active' : ''}>
    <nav>
    <Link smooth={true} duration = {300} to = "home-page">
      <div class = "logo-container">
      </div>
    </Link>
      <ul class = "nav-buttons">
        <li class = "active" id="home-button"><Link smooth={true} duration = {300} to = "home-page">Home</Link></li>
        <li>|</li>
        <li id="about-button"><Link smooth={true} duration = {300} to = "about-me">About</Link></li>
        <li>|</li>
        <li id="projects-button"><Link smooth={true} duration = {300} to = "projects">Projects</Link></li>
        <li>|</li>
        <li id="experience-button"><Link smooth={true} duration = {300} to = "experience">Experience</Link></li>
        <li>|</li>
        <li id="contact-button"><Link smooth={true} duration = {300} to = "contact">Contact</Link></li>
      </ul>
      <div class = "hamburger">
        <HamburgerMenu
          isOpen={isHamburgerOpen}
          menuClicked={handleHambrugerClick}
          width={20}
          height={20}
          strokeWidth={1}
          rotate={0}
          color='black'
          borderRadius={0}
          animationDuration={0.2}
      />
    </div>
    </nav>
    <ul className = "mobile-menu">
      <li className = "active"><Link to = "home-page" smooth={true} duration = {300}>Home</Link></li>
      <li><Link to = "about-me" smooth={true} duration = {300}>About Me</Link></li>
      <li><Link to = "projects" smooth={true} duration = {300}>Projects</Link></li>
      <li><Link to = "experience" smooth={true} duration = {300}>Experience</Link></li>
      <li><Link to = "contact" smooth={true} duration = {300}>Contact</Link></li>
    </ul>
  </header>
}

function getScrollPosition({ element, useWindow }) {
  const isBrowser = typeof window !== `undefined`
  if (!isBrowser) return { x: 0, y: 0 }

  const target = element ? element.current : document.body
  const position = target.getBoundingClientRect()
  var winheight= window.innerHeight || (document.documentElement || document.body).clientHeight
  var pctScrolled = Math.floor(window.scrollY/winheight * 100)
  return useWindow
    ? { x: window.scrollX, y: pctScrolled  }
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

function toggleActive(cur){
  var items = ['home-page', 'about-me', 'projects', 'experience', 'contact'];
  var nav = document.querySelector('.nav-buttons');
  var mobile = document.querySelector('.mobile-menu');
  
  items.forEach((item, index) =>{
    if(item == cur){
      nav.childNodes[index*2].className = 'active'; 
      mobile.childNodes[index].className = 'active';
    }
    else{
      nav.childNodes[index*2].className = ''; 
      mobile.childNodes[index].className = '';
    }
  });
}

export default Header
