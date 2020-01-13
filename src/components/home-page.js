import React from 'react';
import { Link } from 'react-scroll';
import './home-page.scss';
import Typed from 'react-typed';
import 'react-typed/dist/animatedCursor.css';

export default function HomePage(){
   return ( <div class = "home-page">
       <div class = "profile-image"></div>
       <Typed
            strings={['Hi! ^200 I am Arsen']}
            typeSpeed={60}
        />
       <p>I am a Software Engineer who has been in love with computers
          since the day he had his hands on them.
       </p>
       <button class = "view-work-button"><Link smooth={true} duration = {500} to = "about-me">View My Work ⇓</Link></button>
       <button class = "resume-button"><a href = "https://drive.google.com/file/d/17iYD6cV5WVIY0wqQ_IUauY1LkAXp6GMX/view?usp=sharing" target = "_blank">Resume</a></button>
    </div>)
}