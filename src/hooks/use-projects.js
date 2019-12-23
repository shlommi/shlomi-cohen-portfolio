import { graphql, useStaticQuery } from "gatsby"

const useProjects = () => {
  const result = useStaticQuery(graphql`
    {
      allMdx(filter: { fileAbsolutePath: { regex: "/src/projects/" } }) {
        nodes {
          frontmatter {
            title
            slug
          }
          excerpt
        }
      }
    }
  `)

  return result.allMdx.nodes.map(post => ({
    title: post.frontmatter.title,
    slug: post.frontmatter.slug,
    excerpt: post.excerpt,
  }))
}

export default useProjects
