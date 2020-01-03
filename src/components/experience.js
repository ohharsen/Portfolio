import React from 'react'

import './experience.scss'

import AmazonImage from '../images/amazon-logo.png';
import GCCImage from '../images/GCC-logo.png';
import UCImage from '../images/UC-logo.png';

export default function Experience(){
    return (
        <div className = "experience">
            <h1>Experience</h1>
            <div className = "detailed-experience">
                <div className = "work-experience">
                    <h3>Work Experience</h3>
                    <ExperienceSection 
                        imageURL = {AmazonImage}
                        expTitle = "Amazon - SDE Intern"
                        date = "Jun 2019 - Aug 2019"
                        bullets = {[
                            `Built RESTful API using Node JS/Express to do CRUD operations on users' data and panorama images saved on AWS S3 bucket`,
                            ` Set up the authentication system for the website using Passport JS middleware`,
                            ` Created scraper to gather data on real estate. Scraped data on over 11,600 properties in California`,
                            ` Leveraged knowledge in JavaScript, Node.js, Express.js, MongoDB, Git, Passport JS, OAuth 2, AWS`
                            ]}
                    />
                    <ExperienceSection 
                        imageURL = {UCImage}
                        expTitle = "UC San Diego IT - Customer Support Technician"
                        date = "Jun 2019 - Aug 2019"
                        bullets = {[
                            `Built RESTful API using Node JS/Express to do CRUD operations on users' data and panorama images saved on AWS S3 bucket`,
                            ` Set up the authentication system for the website using Passport JS middleware`,
                            ` Created scraper to gather data on real estate. Scraped data on over 11,600 properties in California`,
                            ` Leveraged knowledge in JavaScript, Node.js, Express.js, MongoDB, Git, Passport JS, OAuth 2, AWS`
                            ]}
                    />
                </div>
                <div className = "education-experience">
                    <h3>Education Experience</h3>
                    <ExperienceSection 
                        imageURL = {UCImage}
                        expTitle = "UC San Diego - Computer Science"
                        date = "Gradutating Jun 2021"
                        bullets = {[
                            `Built RESTful API using Node JS/Express to do CRUD operations on users' data and panorama images saved on AWS S3 bucket`,
                            ` Set up the authentication system for the website using Passport JS middleware`,
                            ` Created scraper to gather data on real estate. Scraped data on over 11,600 properties in California`,
                            ` Leveraged knowledge in JavaScript, Node.js, Express.js, MongoDB, Git, Passport JS, OAuth 2, AWS`
                            ]}
                    />
                </div>
            </div>
        </div>
    )
}

function ExperienceSection(params){
    return (<section 
        style = {{
            backgroundImage: `url(${params.imageURL})`,
            paddingLeft: "65px",
            backgroundPosition: "left top"
        }} 
        className = "experience-section"
    >
        <h4>{params.expTitle}</h4>
        <h5>{params.date}</h5>
        <ul>
            {params.bullets.map((bullet, index) => (
                <li key = {index}>
                    {bullet}
                </li>
            ))}
        </ul>
    </section>)
}