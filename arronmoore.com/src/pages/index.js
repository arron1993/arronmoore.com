import React from "react"

import Layout from "../components/layout"

import "./home/home.scss"

export default function Home({data}) {
  return (
    <Layout pageName="home">
      <div
        className="text-center text-lg-left"
        style={{
          paddingTop:"15%",
          filter: "drop-shadow(1px 1px 1px #000)"
        }}
      >
        <div 
          className="text-white text-big d-block"> 
          My name is Arron Moore
        </div>
        <div className="text-normal text-white mt-3"> 
          I am a full stack software developer
        </div>
      </div>
    </Layout>
  )
}