import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import HomePage from "../components/home-page"
import AboutMe from "../components/about-me"
import Projects from "../components/projects"
import Experience from "../components/experience"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomePage />
    <hr id = "about-me"/>
    <hr />
    <AboutMe />
    <hr id = "projects"/>
    <br/>
    <Projects />
    <hr id = "experience"/>
    <hr />
    <Experience />
    <hr id = "contact"/>
    
  </Layout>
)

export default IndexPage
