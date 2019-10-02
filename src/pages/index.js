import React from "react"
import { Link } from "gatsby"
import logo from '../images/screencast.png';
import crown from '../images/crown.svg';

import SEO from "../components/seo"
import DashboardLayout from "../layouts/DashboardLayout";
import "../custom.css"
import Hero from '../images/hero.png';

import Typed from 'typed.js';
import GoogleSignIn from "../components/GoogleSignIn";
import FacebookSignIn from "../components/FacebookSignIn";
import GameMap from "../components/GameMap";
import Clue from "../components/Clue";

class IndexPage extends React.Component {
  componentDidMount() {
    var typed = new Typed('.element', {
      strings: ["show your talent to college.", "bring out the geek in you.", "win exciting prizes and goodies."],
      typeSpeed: 50,
      backSpeed: 50,
    });
  }

  render() {
    return <div>
      <SEO title="Home" />
      <DashboardLayout>
        <div className="jumbotron jumbotron-fluid">
        {/* <img src={Hero} alt="lkcckcf" className="float-right d-none d-lg-block align-middle" height="500" /> */}
          <div className="container">
            <h1 className="display-4">Digital Fortress</h1>
            <h3>Competition to <span className="element"></span></h3>
              <GoogleSignIn className="mr-3"/>
              <FacebookSignIn />
          </div>
        </div>
        <div className="container-fluid p-3 bg-transparent">
          <div className="row">
            <div className="col-12 col-lg-4 p-5">
              <div className="card prize">
                <div className="card-body mx-auto d-block">
                  <span className="display-1 text-center">
                    <img src={crown} alt=".." height="200" width="200" />
                  </span>
                  <hr />
                  Prizes worth Rs.2000 + Exciting Goodies
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 p-5">
              <div className="card prize">
                <div className="card-body mx-auto d-block">
                  <span className="display-1 text-center">2</span>
                  <hr />
                  Prizes worth Rs.2000 + Exciting Goodies
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 p-5">
              <div className="card prize">
                <div className="card-body mx-auto d-block">
                  <span className="display-1 text-center">3</span>
                  <hr />
                  Prizes worth Rs.2000 + Exciting Goodies
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid bg-success p-5">
          <h2 className="text-center mx-auto d-block text-white">Are you ready to enter the contest.</h2>
          <span className="text-center mx-auto d-block"><GoogleSignIn className="mt-3"/></span>
        </div>
      </DashboardLayout>
    </div>
  }
}

export default IndexPage
