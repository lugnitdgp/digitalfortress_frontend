import React from "react"

import SEO from "../components/seo"
import "../bootstrap.css"

const NotFoundPage = () => (
  <div>
    <SEO title="404: Not found" />
    <div className="container">
      <div className="row">
        <div className="card bg-transparent">
          <h1 className="text-white">NOT FOUND</h1>
          <p className="text-white">You just hit a route that doesn&#39;t exist... the sadness.</p>
        </div>
      </div>
    </div>
  </div>
)

export default NotFoundPage
