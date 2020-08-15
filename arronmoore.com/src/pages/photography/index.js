import React from "react"

import Layout from "../../components/layout"
import PhotographyImage from "../../components/photography-image"

import "./photography.scss"

export default function Photography({data}) {

  return (
    <Layout pageName="photography">
      <div className='row py-4 text-center'>
        <div className='col-12' className="text-center">
          <div className="text-normal"> In my free time I take pictures of race cars, plants and insects</div>
          <div className="pt-2 text-small"> I use a Nikon D3200, a Sigma 150-600mm  telephoto lens and a Tamron 80mm macro lens</div>
        </div>  
      </div>

       <div className='row'>
        <PhotographyImage 
          src='/images/photography/c_tf.jpg'
          title="GTE TF Sport Aston Martin Ventage"
          location="WEC, Silvertone, September 2019 "
          side="left" />

          <PhotographyImage 
            src='/images/photography/c_rowe.jpg'
            title="GT3 Rowe Racing Porsche 911"
            location="Blancpain, Silverstone, May 2019 "
            side="right" />
          <PhotographyImage src='/images/photography/c_bee.jpg' title="A Bee" location="Back Garden, Grimsby, July 2020" side="left" />
        </div>
    </Layout>
  )
}