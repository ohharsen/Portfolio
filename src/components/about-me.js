import { Fragment } from "react";

import React from 'react'
import './about-me.scss'
import CookingImage from '../images/cooking.jpg'
import SportImage from '../images/sport.jpg'
import BooksImage from '../images/books.jpg'

export default function AboutMe(){
    var skills = ["JAVA", "JS6","HTML5", "CSS3/SASS/LESS", "React", "Redux", "MongoDB", "C++",
                  "Node.js", "AWS", "Docker", "Git", "Linux/Unix", "..."]
    return (
        <div class = "about-me">
            <h1>ABOUT ME</h1> 
            <p>I am a Computer Science student at <span>University of California San Diego</span>. 
 In the past I have worked at UC San Diego IT Services and interned at startups like <span>Herth.io</span> and <span>Instigate</span>. Soon I will be joining <span>Amazon</span> as an SDE Intern
 to put my knowledge and skills in use and learn from the best minds in the industry. In my free time I pursue my interests in Cyber Security, Machine Learning and Math and develop full stack
 applications which allow me combine my love for design and logic.</p>
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
                    alt = {<React.Fragment>I am extremely passionate about cooking
                    <br/>and consider it a true art.</React.Fragment>}/>
<HobbyFigure 
                    src={SportImage} 
                    alt = {<React.Fragment>I try to stay physically active 
                    <br/>so I take photos with basketballs.</React.Fragment>}/>
<HobbyFigure 
                    src={BooksImage}
                    alt = {<React.Fragment>I am also an avid reader. 
                    <br/>I read that this image has open copyright
                    <br/> and downloaded it.</React.Fragment>}/>
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