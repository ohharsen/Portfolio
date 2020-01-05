import React from 'react'
import Particles from "react-particles-js"
import {Link} from 'gatsby'

import './projects.scss'

import ProjectThumbnailImage from '../images/project-thumbnail.png'
import { SSL_OP_NO_TLSv1_1 } from 'constants';

export default function Projects(){
    return (
        <div class = "projects">
          <div class = "projects-header">
          <Particles 
                width = "100%"
                height = "50vh"
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
            <h1>Projects</h1>
          </div>
           
            <div class = "thumbnails-container">
              <ProjectThumbnail 
                title = "Best Project Ever"
                description = {` This website is so good it
                                 will make your wife wet and yo mam is
                                 a hoe so you better get used to it nigga.
                                 Enough bitching about stuff yoooo.`}
                technologies = "React, Redux, Node, HTML5, CSS3, JavaScript, C++"
              />
              <ProjectThumbnail 
                title = "Best Project Ever"
                description = {` This website is so good it
                                 will make your wife wet and yo mam is
                                 a hoe so you better get used to it nigga.
                                 Enough bitching about stuff yoooo.`}
                technologies = "React, Redux, Node, HTML5, CSS3, JavaScript, C++"
              />
              <ProjectThumbnail 
                title = "Best Project Ever"
                description = {` This website is so good it
                                 will make your wife wet and yo mam is
                                 a hoe so you better get used to it nigga.
                                 Enough bitching about stuff yoooo.`}
                technologies = "React, Redux, Node, HTML5, CSS3, JavaScript, C++"
              />
            </div>
        </div>
    )
}

function ProjectThumbnail(params){
  return(
    <div class = "thumbnail">
      <a href = "https://www.google.com/" target="_blank"><img src={ProjectThumbnailImage} />  
        <h4 class = "title">{params.title}</h4>
        <hr class = "project-section-divider" /> 
        <p class = "description">{params.description}</p>
        <hr class = "project-section-divider" />
        <i class = "technologies">{params.technologies}</i>
      </a>
    </div>
  )
}