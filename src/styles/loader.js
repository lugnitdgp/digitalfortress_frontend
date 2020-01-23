import React from "react"
import "./loader.css"

export default function Loader() {
  return (
    <div className="spooky-castle">
      <div className="circle" />
      <div className="castle-wrap">
        <div className="ground ground-a" />
        <div className="ground" />
        <div className="castle-hill" />
        <div className="castle">
          <i className="story floor-a">
            <i className="window">
              <i className="detail" />
            </i>
            <i className="story floor-b">
              <i className="top">
                <i className="flag" />
              </i>
              <i className="window">
                <i className="detail" />
              </i>
            </i>
          </i>
          <i className="story floor-c">
            <i className="top">
              <i className="flag" />
            </i>
            <i className="window">
              <i className="detail" />
            </i>
          </i>
          <i className="story floor-d">
            <i className="top">
              <i className="flag" />
            </i>
            <i className="window">
              <i className="detail" />
            </i>
          </i>
          <i className="window wind">
            <i className="detail" />
          </i>
          <i className="window main">
            <i className="window">
              <i className="detail arrow" />
              <i className="detail arrow" />
              <i className="detail arrow" />
            </i>
          </i>
        </div>
      </div>
    </div>
  )
}
