import React from "react"

import Layout from "../../components/layout"

import "./photography.scss"

export default function Photography({data}) {

  return (
    <Layout pageName="photography">
       <div class='row'>
         <div class='col-6'>
          <img  width="100%" src="https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/117726109_592209944789217_1467225375489691945_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_cat=109&_nc_ohc=c2yZRL-9GRMAX9OqAG2&oh=f15d21458f5acdf31481e3121e56f119&oe=5F60D8F3" />

         </div>
        <div class='col-6'>
            text
        </div>
       </div>

       <div class='row'>
         <div class='col-6'>
         text

         </div>
        <div class='col-6'>
            
            <img  width="100%" src="https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-15/e35/c241.0.957.957a/s320x320/117134739_318054325988098_8620176928834735479_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_cat=110&_nc_ohc=uJjpJC-m0DIAX8Vlpah&oh=46ac4f3f7c281a36397ec90d4cbefea3&oe=5F5EC6DE" />
        </div>
       </div>
    </Layout>
  )
}