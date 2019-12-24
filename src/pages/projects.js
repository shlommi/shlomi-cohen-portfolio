import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import useProjects from "../hooks/use-projects"
import Never from "../components/never"
import Wave from "../components/wave"

export default () => {
  const projects = useProjects()

  return (
    <Layout>
      <Never />
      <Wave />
      <h1>The Latest from the Blog</h1>
      {projects.map(project => (
        <article key={project.slug}>
          <h2>
            <Link to={project.slug}>{project.title}</Link>
          </h2>
          <p>{project.excerpt}</p>
          <p>
            <Link to={project.slug}>Read more &rarr;</Link>
          </p>
        </article>
      ))}
    </Layout>
  )
}
