import React from "react"

import Layout from "../components/layout"
import HeroImage from "../components/hero-image"

import "./home/home.scss"

export default function Home({data}) {
  return (
    <Layout>
      <HeroImage/>
      <div
        style={{
          
          paddingTop:"15%",
          filter: "drop-shadow(1px 1px 1px #000)"
        }}
      >
        <span 
          className="text-white big d-block"> 
          My name is Arron Moore
        </span>
        <span className="less-big text-white mt-2"> 
          I am a full stack software developer
        </span>
      </div>
    </Layout>
  )
}