import React, { useState } from "react"
import "./countdown.css"

export default function Countdown({ time }) {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [newtime, setNewtime] = useState("")

  React.useEffect(() => {
    setInterval(function() {
      let fourthOfJuly = new Date(time).getTime()
      const today = new Date().getTime()
      const diff = fourthOfJuly - today

      setDays(Math.floor(diff / (1000 * 60 * 60 * 24)))
      setHours(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
      setMinutes(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)))
      setSeconds(Math.floor((diff % (1000 * 60)) / 1000))
    }, 1000);
  })
  
  return (
    <React.Fragment>
      <div>
        <div className="container">
          <div className="balloon white">
            <div className="star-red" />
            <div className="face">
              <div className="eye" />
              <div className="mouth happy" />
            </div>
            <div className="triangle" />
            <div className="string" />
          </div>
          <div className="balloon red">
            <div className="star" />
            <div className="face">
              <div className="eye" />
              <div className="mouth happy" />
            </div>
            <div className="triangle" />
            <div className="string" />
          </div>
          <div className="balloon blue">
            <div className="star" />
            <div className="face">
              <div className="eye" />
              <div className="mouth happy" />
            </div>
            <div className="triangle" />
            <div className="string" />
          </div>
          <div id="timer">
            <div class="days">
              <div class="numbers">{days}</div>
              days
            </div>
            <div class="hours">
              <div class="numbers">{hours}</div>
              hours
            </div>
            <div class="minutes">
              <div class="numbers">{minutes}</div>
              minutes
            </div>
            <div class="seconds">
              <div class="numbers">{seconds}</div>
              seconds
            </div>
          </div>
          <h1>Event CountDown Timer</h1>
        </div>
      </div>
    </React.Fragment>
  )
}
