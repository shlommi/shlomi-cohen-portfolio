module.exports = {
  siteMetadata: {
    title: `Shlomi Cohen portfilo`,
    description: `Shlomi Cohen Frontend developer react developer web developer`,
    author: `shlomi cohen`,
  },
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          default: require.resolve("./src/components/layout/layout.js"),
        },
        gatsbyRemarkPlugins: [{ resolve: "gatsby-remark-images" }],
        plugins: [{ resolve: "gatsby-remark-images" }],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "projects",
        path: `${__dirname}/src/projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Shlomi Cohen`,
        short_name: `Shlomi Cohen`,
        start_url: `/`,
        background_color: `#ffff`,
        theme_color: `#2F7A79`,
        display: `minimal-ui`,
        icon: `src/images/android-chrome-192x192.png`,
      },
    },
    // `gatsby-plugin-offline`,
  ],
}
