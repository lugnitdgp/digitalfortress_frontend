import React from "react"
// import "./header.css"
import Helmet from "react-helmet"

export default function HeaderScreen() {
//   document.body.addEventListener("mousemove", evt => {
//     const mouseX = evt.clientX
//     const mouseY = evt.clientY

//     gsap.set(".cursor", {
//       x: mouseX,
//       y: mouseY,
//     })

//     gsap.to(".shape", {
//       x: mouseX,
//       y: mouseY,
//       stagger: -0.1,
//     })
//   })

  return (
    <div>
        <Helmet>
            {/* <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/gsap-latest-beta.min.js" /> */}
        </Helmet>
      <div className="cursor" />
      <div className="shapes">
        <div className="shape shape-1" />
        <div className="shape shape-2" />
        <div className="shape shape-3" />
      </div>
      <div className="content">
        <h1>Digital Fortress</h1>
      </div>
    </div>
  )
}
