import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import HomePage from "../components/home-page"
import AboutMe from "../components/about-me"
import Projects from "../components/projects"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomePage />
    <br/>
    <hr/>
    <br/>
    <AboutMe />
    <Projects />
  </Layout>
)

export default IndexPage
