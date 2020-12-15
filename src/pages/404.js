import React from "react"

import SEO from "../components/seo"
import "../bootstrap.css"

const NotFoundPage = () => (
  <div style={{textAlign:"center", width:"100%", marginTop:"100px"}}>
    <SEO title="404: Not found" />
    
        
          <h1 className="text-white" style={{fontSize:"25px"}}>NOT FOUND</h1>
          <p className="text-white">You just hit a route that doesn&#39;t exist... the sadness.</p>
       
   
  </div>
)

export default NotFoundPage
