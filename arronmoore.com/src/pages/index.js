import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

import s from "./home/home.module.scss"

class HomePage extends React.Component {
  constructor(props) {
    super()
  }

  render() {
    return (
      <Layout background={this.props.data.nasa.childImageSharp.fluid}>
        <div className="d-flex h-100 w-100 mt-5 text-center justify-content-center">
          <div>
            <h1 className="text-white"> My Name is Arron Moore</h1>
            <h4 className="text-white">I am a full stack Software Developer</h4>
          </div>
        </div>
      </Layout>
    )
  }
}
export const query = graphql`
  query {
    nasa: file(relativePath: { eq: "home/c_nasa.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default HomePage
