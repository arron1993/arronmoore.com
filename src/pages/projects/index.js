import React from "react"

import Layout from "../../components/layout"

import s from "./projects.module.scss"

export default class ProjectsPage extends React.Component {
  constructor(props) {
    super()
  }

  render() {
    return (
      <Layout
        background={this.props.data.laptop.childImageSharp.fluid}
      ></Layout>
    )
  }
}

export const query = graphql`
  query {
    laptop: file(relativePath: { eq: "projects/laptop.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
