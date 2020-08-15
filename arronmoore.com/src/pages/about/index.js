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
          paddingTop:"10%",
          fontSize: "2rem"
        }}
      >
        <div className="row">
          <div className="col-12 col-lg-6 mt-5 text-shadow py-3 blur"> 
            Born in Grimsby, studied in Nottingham but now living in Coventry.
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-6 offset-0 offset-lg-6 text-shadow"> 
            Received a Masters degree in Computer Science from Nottingahm Trent University in 2016
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-6 mt-5 text-shadow"> 
            With {number_words[years]} years professional experience using Python, Angular, and a wide variety of other technologies
          </div>
        </div>
      </div>
    </Layout>
  )
}