import React from "react"
import NavBar from "../components/Navbar"
import "../bootstrap.css"
import "../firefly.css"
import Helmet from "react-helmet"
import "../styles/background.css"
import Rules from "../components/Rules"

export default class DashboardLayout extends React.Component {
  render() {
    return (
      <div className="dashboard" style={{ overflowX: "hidden" }}>
        <Helmet>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
          />
          <link
            rel="stylesheet"
            href="https://www.marcoguglie.it/Codepen/AnimatedHeaderBg/demo-1/css/demo.css"
          />
          <script src="https://www.marcoguglie.it/Codepen/AnimatedHeaderBg/demo-1/js/EasePack.min.js" />
        </Helmet>
        <NavBar />
        <div style={{height:"80px"}}></div>
        <div class="firefly"></div>
        <div class="firefly"></div>
        <div class="firefly"></div>
        <div class="firefly"></div>
        <div class="firefly"></div>
        <div class="firefly"></div>
        <div class="firefly"></div>
        <div class="firefly"></div>
        <div class="firefly"></div>
        <div class="firefly"></div>
        <div class="firefly"></div>
        <div class="firefly"></div>
        <div class="firefly"></div>
        <div class="firefly"></div>
        <div class="firefly"></div>
        
        {this.props.children}
        <Rules />
      </div>
    )
  }
}
