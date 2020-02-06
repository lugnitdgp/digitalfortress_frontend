import React, { useState } from "react"
import "./countdown.css"
import { Container, Grid, withStyles } from "@material-ui/core"

const styles = theme => ({
  root: {
    marginTop: theme.spacing(5)
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
        diff = eventStartTime - today
      }

      // const diff = eventTime > today ? eventTime - today : today - eventTime;

      self.setState({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      })
    }, 1000)
  }

  render() {
    const { classes } = this.props
    return (
      <React.Fragment>
        <Container className={classes.root}>
          <Grid container justify="center">
            <Grid item>
              <div class="heading">
                {this.state.ended
                  ? "Event already ended before"
                  : "Event to be start by"}
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
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(CountDown)