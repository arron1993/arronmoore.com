import React from "react"

import Layout from "../../components/layout"

import "./about.scss"

export default function About({data}) {
  const number_words = {
    4: "Four",
    5: "Five",
    6: "Six",
  }
  const years = new Date().getFullYear() - 2016

  return (
    <Layout pageName="about">
      <div
        className="text-normal"
        style={{
          paddingTop:"10%",
         }}
      >
        <div className="row">
          <div className="col-12 col-lg-6 my-2 text-shadow py-3"> 
            Born in Grimsby, studied in Nottingham but now living in Coventry.
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-6 my-2 offset-0 offset-lg-6 text-shadow"> 
            Received a Masters degree in Computer Science from Nottingahm Trent University in 2016
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-6 my-2 text-shadow"> 
            {number_words[years]} years professional experience using Python, Angular, and a wide variety of other technologies
          </div>
        </div>
      </div>
    </Layout>
  )
}