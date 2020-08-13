import React from "react"

import Layout from "../../components/layout"

import "./about.scss"

export default function About({data}) {
  const number_words = {
    4: "four",
    5: "five",
    6: "six",
  }
  const years = new Date().getFullYear() - 2016
  return (
    <Layout pageName="about">
      <div
        
        style={{
          paddingTop:"15%",
          fontSize: "2rem"
        }}
      >
        <div className="row">
          <div className="col-6"> 
            I received my Masters degree in Computer Science from Nottingahm Trent University in 2016
          </div>
        </div>
        <div className="row">
          <div className="offset-6 col-6 mt-5"> 
            I have {number_words[years]} years professional experience using Python, Angular, and a wide variety of other technologies
          </div>
        </div>
      </div>
    </Layout>
  )
}