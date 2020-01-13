import React from 'react'

import './experience.scss'

import AmazonImage from '../images/amazon-logo.png';
import GCCImage from '../images/GCC-logo.png';
import HerthImage from '../images/herth.png';
import UCImage from '../images/UC-logo.png';

export default function Experience(){
    return (
        <div className = "experience">
            <h1>EXPERIENCE</h1>
            <div className = "detailed-experience">
                <div className = "work-experience">
                    <h3>Work Experience</h3>
                    <ExperienceSection 
                        imageURL = {AmazonImage}
                        expTitle = "Incoming SDE Intern at Amazon"
                        date = "Dec 2019 - Present"
                        bullets = {[
                            ]}
                    />
                    <ExperienceSection 
                        imageURL = {UCImage}
                        expTitle = "UC San Diego IT - Customer Support Technician"
                        date = "Jun 2019 - Aug 2019"
                        bullets = {[
                            ` With a team of other technicians, successfully executed the transition of over 60,000 users to two-step authentication within a month`,
                            ` Assisted over 10,000 Fall 2019 incoming students with setting up network configurations`,
                            ` Cooperated with 79 other IT Departments to efficiently solve users' problems`,
                            ` Leveraged knowledge in Network/Hardware Architecture, Security Practices, Communication Skills`
                            ]}
                    />
                    <ExperienceSection 
                        imageURL = {HerthImage}
                        expTitle = "Herth - Back End Developer Intern"
                        date = "Jun 2018 -Aug 2018"
                        bullets = {[
                            ` Built RESTful API using Node JS/Express to do CRUD operations on users' data and panorama images saved on AWS S3 bucket`,
                            ` Set up the authentication system for the website using Passport JS middleware`,
                            ` Created scraper to gather data on real estate. Scraped data on over 11,600 properties in California`,
                            ` Leveraged knowledge in JavaScript, Node.js, Express.js, MongoDB, Git, Passport JS, OAuth 2, AWS`
                            ]}
                    />

                    <ExperienceSection 
                        imageURL = {GCCImage}
                        expTitle = "Glendale Community College - Mathematics Tutor"
                        date = "Sep 2018 – Jan 2019"
                        bullets = {[
                            ` Tutored over 200 students individually or in small groups and helped them improve their math skills`,
                            ` Had many tutees grow from receiving Cs in tests to getting As and receiving mathematics honors`,
                            ` Helped students become independent problems solvers`,
                            ` Assisted with math problems in all levels ranging from elementary algebra to multi-variable calculus`
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
                            `GPA: 3.9`,
                            `Provost's Honor`,
                            ]}
                    />
                    <ExperienceSection 
                        imageURL = {GCCImage}
                        expTitle = "Glendale Community College - Computer Science"
                        date = "Feb 2017 - May 2019"
                        bullets = {[
                            `GPA: 4.0`,
                            `Selected for the GCC AS Scholarship for 3 semesters in a row for academic excellence and community involvement`,
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