import { Fragment } from "react";

import React from 'react'
import './about-me.scss'
import CookingImage from '../images/me-cooking.png'

export default function AboutMe(){
    var skills = ["JAVA", "JS6","HTML5", "CSS3", "React", "Redux", "C++", "C",
                  "Docker", "SEX", "Git", "Linux/Unix", "..."]
    return (
        <div class = "about-me">
            <h1>ABOUT ME</h1> 
            <p>I am a Computer Science student at <span>University of California San Diego </span> 
 In the past I have interned both at large companies like <span>Amazon</span> and
small startups like <span>Herth.io</span>.  Currently I am looking for some warm
hole where I can stick my dick so we can all have a happy and 
wonderful live where everyone is satisfied with their lives cuz who
wouldn't be having such a yuge dick in them</p>
            <h2>Things I am good at...</h2>
            <div class = "skills-container">
                {skills.map((skill) => (
                    <SkillTag 
                        key = {skill}
                        skill = {skill}    
                    />
                    )
                )}
            </div>
            <br/>
            <h2>Things I do when not coding...</h2>
            <div class = "hobbies">
                <HobbyFigure 
                    src={CookingImage} 
                    alt = {<React.Fragment>I fuck so good 
                    <br/>I will drag your wife to bed in no time</React.Fragment>}/>
<HobbyFigure 
                    src={CookingImage} 
                    alt = {<React.Fragment>I play billiard so good 
                    <br/>I will drag your wife to bed in no time</React.Fragment>}/>
<HobbyFigure 
                    src={CookingImage}
                    alt = {<React.Fragment>I fuck so good 
                    <br/>I will drag your wife to bed in no time</React.Fragment>}/>
            </div>
        </div>
    )
}

function SkillTag(params){
    return(
        <div class = "skill-tag">
            {params.skill}
        </div>
    )
}

function HobbyFigure(params){
    return (
        <figure> 
            <img src = {params.src} alt = {params.alt}/>
            <figcaption>{params.alt}</figcaption>
        </figure>
    )
}