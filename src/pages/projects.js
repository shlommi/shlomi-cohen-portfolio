import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout/layout"
import useProjects from "../hooks/use-projects"
import Never from "../components/never"
import Wave from "../components/wave"
import HeadingProject from "../components/heading-project"
import { green, white_green } from "../theme/_variables"
import SEO from "../components/seo"

export default () => {
  const projects = useProjects()

  return (
    <Layout>
      <SEO
        title="Projects"
        keywords={["shlomi cohen", "applications", "react.js", "gatsby.js"]}
      />
      <Never />
      <Wave />
      <h3>The Latest from the Projects</h3>
      {projects.map(project => (
        <Article key={project.slug}>
          <HeadingProject>
            <Link to={project.slug}>{project.title}</Link>
          </HeadingProject>
          <p>{project.excerpt}</p>
          <ReadMoreWrapper>
            <Link to={project.slug}>READ MORE ›</Link>
          </ReadMoreWrapper>
        </Article>
      ))}
    </Layout>
  )
}

const ReadMoreWrapper = styled.p`
  margin-top: 1rem;
  a {
    color: ${green};
    display: block;
    padding: 0 0.15rem;
    font-size: 0.85rem;
    letter-spacing: 0.05em;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
  }

  &a:focus,
  a:hover,
  a:active {
    background-color: ${green};
    color: ${white_green};
    border-radius: 0.25rem;
    outline: 0px;
    text-decoration: none;
  }
`
const Article = styled.article`
  padding-bottom: 1.25rem;
  margin-top: 2rem;
  border-bottom: 1px solid rgba(26, 41, 37, 0.2);
`
