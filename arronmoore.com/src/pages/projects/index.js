import React from "react"

import Layout from "../../components/layout"

import "./projects.scss"

export default function Projects({data}) {

  return (
    <Layout pageName="projects">
       <div className="row mt-2">
         <div class="col-12 row text-small">
           <div className="col-12 text-center text-normal py-4"> This Website </div>
           <div className="col-6">
             Technologies
             <ul>
               <li>React</li>
                <li>Gatsby</li>
                <li>AWS</li>
             </ul>
           </div>
           <div className="col-6">
             <div>
              Built myself as a way to teach myself the basics of React and the Gatsby framework.
            </div>
            <div className="pt-3">
                Behind the scenes I used it as an opportunity to teach myself more about AWS. It is deployed using an AWS CodePipeline to
                build a docker container that is deployed into ECS using a blue/green deployment.
                Extremely over engineered for a site such as this.
            </div>
          </div>
          
           
         </div>
       </div>
    </Layout>
  )
}