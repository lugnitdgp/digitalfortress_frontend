import React from "react"
import { Link } from "gatsby"
// import logo from '../images/screencast.png';
// import gold from '../images/gold.svg';

import SEO from "../components/seo"
import DashboardLayout from "../layouts/DashboardLayout"
import "../custom.css"
import Hero from "../images/hero.png"

import Typed from "typed.js"
import GoogleSignIn from "../components/GoogleSignIn"
import FacebookSignIn from "../components/FacebookSignIn"
import GameMap from "../components/GameMap"
import Clue from "../components/Clue"
import logo from "../images/logodf.png"

class IndexPage extends React.Component {
  componentDidMount() {
    var typed = new Typed(".element", {
      strings: [
        "show your talent to college.",
        "bring out the geek in you.",
        "win exciting prizes and goodies.",
      ],
      typeSpeed: 50,
      backSpeed: 50,
    })
  }

  render() {
    return (
      <div>
        <SEO title="Home" />
        <DashboardLayout>
          <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <img src={logo} height="80" />
              <h3>
                Competition to <span className="element"></span>
              </h3>
            </div>
          </div>
          <div className="container-fluid a p-5">
            <h2 className="text-center mx-auto d-block text-white">
              Are you ready to enter the contest?
            </h2>
            <span className="text-center mx-auto d-block">
              <GoogleSignIn className="mt-3 mr-3" />
              <FacebookSignIn />
            </span>
          </div>
        </DashboardLayout>
      </div>
    )
  }
}

export default IndexPage
