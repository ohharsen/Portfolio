import React from 'react';
import {Link} from 'gatsby';
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
           since he could get his hands on it. Currently, I am interning
           at Amazon Inc. and I have a strong interest in Cyber Security,
           Augmented Reality and Math. 
       </p>
       <button class = "view-work-button"><Link to = "">View My Work ⇓</Link></button>
       <button class = "resume-button"><Link to = "">Resume</Link></button>
    </div>)
}