import React from 'react'
import Particles from "react-particles-js"

import './contact.scss'

import LinkedinIcon from '../images/Linkedin.png'
import GitHubIcon from '../images/GitHub.png'
import EmailIcon from '../images/Email.png'
export default function Contact(){
    return (<div class = "contact">
        <Particles 
                width = "100%"
                height = "100%"
                style = {{position: "absolute", left: 0, top: 0}}
                params = {{"particles": {
                          "number": {
                            "value": 380,
                            "density": {
                              "enable": true,
                              "value_area": 800
                            }
                          },
                          "color": {
                            "value": "#ffffff"
                          },
                          "shape": {
                            "type": "circle",
                            "stroke": {
                              "width": 0,
                              "color": "#000000"
                            },
                            "polygon": {
                              "nb_sides": 5
                            },
                            "image": {
                              "src": "img/github.svg",
                              "width": 100,
                              "height": 100
                            }
                          },
                          "opacity": {
                            "value": 0.5,
                            "random": false,
                            "anim": {
                              "enable": false,
                              "speed": 1,
                              "opacity_min": 0.1,
                              "sync": false
                            }
                          },
                          "size": {
                            "value": 3,
                            "random": true,
                            "anim": {
                              "enable": false,
                              "speed": 40,
                              "size_min": 0.1,
                              "sync": false
                            }
                          },
                          "line_linked": {
                            "enable": true,
                            "distance": 150,
                            "color": "#ffffff",
                            "opacity": 0.4,
                            "width": 1
                          },
                          "move": {
                            "enable": true,
                            "speed": 6,
                            "direction": "none",
                            "random": false,
                            "straight": false,
                            "out_mode": "out",
                            "bounce": false,
                            "attract": {
                              "enable": false,
                              "rotateX": 600,
                              "rotateY": 1200
                            }
                          }
                        },
                        "interactivity": {
                          "detect_on": "canvas",
                          "events": {
                            "onhover": {
                              "enable": true,
                              "mode": "grab"
                            },
                            "onclick": {
                              "enable": true,
                              "mode": "push"
                            },
                            "resize": true
                          },
                          "modes": {
                            "grab": {
                              "distance": 140,
                              "line_linked": {
                                "opacity": 1
                              }
                            },
                            "bubble": {
                              "distance": 400,
                              "size": 40,
                              "duration": 2,
                              "opacity": 8,
                              "speed": 3
                            },
                            "repulse": {
                              "distance": 200,
                              "duration": 0.4
                            },
                            "push": {
                              "particles_nb": 4
                            },
                            "remove": {
                              "particles_nb": 2
                            }
                          }
                        },
                        "retina_detect": true
                      }}
            />
            <div className = "contact-content">
                <h1>CONTACT ME</h1>
                <SocialMedia />
                <p>Email: arsenohanyan@gmail.com</p>
                <p>Tel: 818-518-7085</p>
                <br />
                <br />
                <p>© Arsen Ohanyan</p>
            </div>
    </div>)
}

function SocialMedia(){
    return(<div className = "social-media">
        <a href = "https://www.linkedin.com/in/ohharsen" target = "_blank"><img src = {LinkedinIcon}/></a>
        <a href = "https://github.com/4R53N" target = "_blank"><img src = {GitHubIcon}/></a>
        <a href = "mailto:arsenohanyan@gmail.com"><img src = {EmailIcon}/></a>
    </div>)
}