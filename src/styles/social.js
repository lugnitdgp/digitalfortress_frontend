import React from "react"
import "./social.css"
import {Helmet} from "react-helmet";

export default function Social() {
  return (
    <div className="social-btns">
        
      <button className="btn facebook">
        <i className="fa fa-facebook" />
      </button>
      <a className="btn google" href="#">
        <i className="fa fa-google" />
      </a>
    </div>
  )
}
