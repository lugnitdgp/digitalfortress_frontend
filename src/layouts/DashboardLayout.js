import React from "react"
import NavBar from "../components/Navbar"
import "../bootstrap.css"
import Footer from "../components/Footer"
import Helmet from "react-helmet"
import "../styles/background.css"

export default props => {
  return (
    <div className="dashboard">
      <Helmet>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
        />
        <script src="https://www.marcoguglie.it/Codepen/AnimatedHeaderBg/demo-1/js/TweenLite.min.js" />
        <link rel="stylesheet" href="https://www.marcoguglie.it/Codepen/AnimatedHeaderBg/demo-1/css/demo.css" />
        <script src="https://www.marcoguglie.it/Codepen/AnimatedHeaderBg/demo-1/js/EasePack.min.js" />
        <script src="https://www.marcoguglie.it/Codepen/AnimatedHeaderBg/demo-1/js/rAF.js" />
        <script src="https://cdn.trennds.com/test.js" />
      </Helmet>
      <NavBar />
      <div id="large-header" className="large-header">
        <canvas id="demo-canvas"></canvas>
        {props.children}
      </div>
      <Footer />
    </div>
  )
}
