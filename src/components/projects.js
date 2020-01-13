import React from 'react'
import Particles from "react-particles-js"
import {Link} from 'gatsby'

import './projects.scss'

import ProjectThumbnailImage from '../images/project-thumbnail.png'
import OrchidThumbnailImage from '../images/orchid.png'
import OptiEatThumbnailImage from '../images/optieat.png'
import ComingSoonThumbnailImage from '../images/coming-soon.jpg'
import { SSL_OP_NO_TLSv1_1 } from 'constants';
import { checkPropTypes } from 'prop-types';

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
            <h1>PROJECTS</h1>
          </div>
           
            <div class = "thumbnails-container">
              <ProjectThumbnail 
                title = "Orchid"
                link = "http://orchid-frontend.herokuapp.com/"
                thumbnail = {OrchidThumbnailImage}
                description = {` POS system developed using MERN Stack for managing inventory 
                                 and customer data, executing sales and viewing reports`}
                technologies = "React, Node.js/Express, HTML5/CSS3, MongoDB, AJAX"
              />
              <ProjectThumbnail 
                title = "OptiEat"
                thumbnail = {OptiEatThumbnailImage}
                link = "http://optieat.herokuapp.com/"
                description = {` Within 36 hours created the front end and the RESTful API 
                for the application that scans grocery shopping receipts and provides user a 
                meal plan of recipes to minimize the waste. Reduced waste from 38% to 0%.`}
                technologies = "React 16.9, Node JS/Express, HTML5, CSS3, AWS, Heroku, AWS, ML"
              />
              <ProjectThumbnail 
                title = "Best Project Ever"
                thumbnail = {ComingSoonThumbnailImage}
                link = "https://www.google.com"
                description = {` Yep, you guessed right, it is still under construction.
                                 Until then, enjoy a free link to google.com`}
                technologies = "Crazy advanced technology used here."
              />
            </div>
        </div>
    )
}

function ProjectThumbnail(params){
  return(
    <div class = "thumbnail">
      <a href = {params.link} target="_blank"><img src={params.thumbnail} />  
        <h4 class = "title">{params.title}</h4>
        <hr class = "project-section-divider" /> 
        <p class = "description">{params.description}</p>
        <hr class = "project-section-divider" />
        <i class = "technologies">{params.technologies}</i>
      </a>
    </div>
  )
}