import React from "react"

import Layout from "../../components/layout"

import s from "./about.module.scss"

export default class AboutPage extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Layout background={this.props.data.bulb.childImageSharp.fluid}></Layout>
    )
  }
}

export const query = graphql`
  query {
    bulb: file(relativePath: { eq: "about/bulb.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
