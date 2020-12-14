import React from "react"
import { render } from "react-dom"

import Layout from "../../components/layout"
import PhotographyImage from "../../components/photography-image"

import s from "./photography.module.scss"

export default class PhotographyPage extends React.Component {
  constructor(props) {
    super()
  }

  render() {
    return (
      <Layout background={this.props.data.camera.childImageSharp.fluid}>
        <div className="row no-gutters py-4 text-center">
          <div className="col-12" className="text-center">
            <div className="text-white">
              <h4>
                In my free time I take pictures of race cars, plants and insects
              </h4>
            </div>
            <div className="pt-2 text-white">
              <h5>
                I use a Nikon D3200, a Sigma 150-600mm telephoto lens and a
                Tamron 80mm macro lens
              </h5>
            </div>
          </div>
        </div>

        <div className="row no-gutters">
          <PhotographyImage
            src="/images/photography/c_tf.jpg"
            title="GTE TF Sport Aston Martin Ventage"
            location="WEC, Silvertone, September 2019 "
            side="left"
          />

          <PhotographyImage
            src="/images/photography/c_rowe.jpg"
            title="GT3 Rowe Racing Porsche 911"
            location="Blancpain, Silverstone, May 2019 "
            side="right"
          />
          <PhotographyImage
            src="/images/photography/c_bee.jpg"
            title="A Bee"
            location="Back Garden, Grimsby, July 2020"
            side="left"
          />
        </div>
      </Layout>
    )
  }
}
export const query = graphql`
  query {
    camera: file(relativePath: { eq: "photography/camera.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
