import React from "react"
import { graphql } from "gatsby"

export default ({ data }) => (
  <img 
    className="position-absolute"
    style={{
        width:"100vw",
        top:"0",
        left:"0",
        height:"100vh",
        zIndex: "-10"
    }}
        src='/images/nasa.jpg'></img>
)
