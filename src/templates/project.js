import React from "react"
import Helmet from "react-helmet"
import styled from "styled-components"
import { green } from "../theme/_variables"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout/layout"

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      excerpt
      body
    }
  }
`

const ProjectTemplate = ({ data }) => (
  <Layout>
    <Helmet>
      <title>{data.mdx.frontmatter.title}</title>
      <meta name="description" content={data.mdx.excerpt} />
    </Helmet>
    <h1>{data.mdx.frontmatter.title}</h1>
    <MDXRenderer>{data.mdx.body}</MDXRenderer>
    <AllProjectLink>
      <Link to="/projects"> ‹ back to all Projects</Link>
    </AllProjectLink>
  </Layout>
)

export default ProjectTemplate

const AllProjectLink = styled.p`
  a {
    color: ${green};
    display: block;
    padding: 0 0.15rem;
    margin-top: 2rem;
    font-size: 0.85rem;
    letter-spacing: 0.05em;
    font-weight: 600;
    text-align: left;
    text-transform: uppercase;
    text-decoration: none;
  }
`
