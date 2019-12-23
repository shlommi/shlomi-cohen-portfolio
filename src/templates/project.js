import React from "react"
import Helmet from "react-helmet"
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
    <p>
      <Link to="/projects">&larr; back to all Projects</Link>
    </p>
  </Layout>
)

export default ProjectTemplate
