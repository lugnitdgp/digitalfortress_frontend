import React, { useState } from "react"
import "./countdown.css"
import { Container, Grid, withStyles } from "@material-ui/core"
import "../glitch.css"
import Loader from "../styles/loader"

const styles = theme => ({
  root: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(20)
  }
})
class CountDown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      ended: true,
      loaded: false,
    }
  }

  componentDidMount() {
    var self = this
    setInterval(function() {
      let eventStartTime = new Date(self.props.time.start).getTime()
      let eventEndTime = new Date(self.props.time.end).getTime()
      const today = new Date().getTime()
      var diff = today - eventEndTime

      if (eventStartTime - today > 0) {
        self.setState({ ended: false })
        self.setState({ loaded : true })
        diff = eventStartTime - today
      }

      self.setState({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
        
      })

      self.setState({ loaded : true })

    }, 1000)

  }

  render() {
    const { classes } = this.props
    return (
      <React.Fragment>
        {this.state.loaded ? 
        <Container className={classes.root}>
          <Grid container justify="center">
            <Grid item>
              <div 
              style={{
                textAlign:"center",
                margin:"0 auto",
                textTransform:"uppercase",
                fontSize:"25px",
                marginTop:"50px"
              }}
              className="glitch" data-text={this.state.ended
                  ? "Event already ended before"
                  : "The Event will start in"}>
                {this.state.ended
                  ? "Event already ended before"
                  : "The Event will start in"}
              </div>
              <div id="timer">
                <div class="days">
                  <div class="numbers">{this.state.days}</div>
                  days
                </div>
                <div class="hours">
                  <div class="numbers">{this.state.hours}</div>
                  hours
                </div>
                <div class="minutes">
                  <div class="numbers">{this.state.minutes}</div>
                  minutes
                </div>
                <div class="seconds">
                  <div class="numbers">{this.state.seconds}</div>
                  seconds
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
        : <Loader/>}
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(CountDown)