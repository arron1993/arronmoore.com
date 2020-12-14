import React from "react"
import Header from "../header"
import BackgroundImage from "gatsby-background-image"

import s from "./layout.module.scss"
import "../../style/style.scss"

export default class Layout extends React.Component {
  constructor(props) {
    super()
    this.background = props.background
  }
  render() {
    return (
      <>
        <BackgroundImage
          Tag={`div`}
          fluid={this.background}
          className={s.background}
        >
          <Header />
          <main className={`container`}>{this.props.children}</main>
        </BackgroundImage>
      </>
    )
  }
}
