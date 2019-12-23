exports.createPages = async ({ actions, graphql }) => {
  const result = await graphql(`
    {
      allMdx(filter: { fileAbsolutePath: { regex: "/src/projects/" } }) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  result.data.allMdx.nodes.forEach(project => {
    actions.createPage({
      path: project.frontmatter.slug,
      component: require.resolve("./src/templates/project.js"),
      context: {
        slug: project.frontmatter.slug,
      },
    })
  })
}
