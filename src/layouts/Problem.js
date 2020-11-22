import React from "react"
import Question from "../components/Question"
import axios from "axios"
import AnswerAlert from "../components/AnswerAlert"
import { navigate } from "gatsby"
import GameMap from "../components/GameMap"
import Clue from "../components/Clue"
import { div, withStyles, Container, Grid } from "@material-ui/core"
import Loader from "../styles/loader"
import "../glitch.css"

const styles = theme => ({
  root: {
    padding: theme.spacing(1),
  },
  centerRow: {
    justifyContent: "center",
  },
  clueContainer:{
    maxWidth:"900px",
    width:"95%",
    margin:"10px auto",
  },
  map:{
    borderRadius:"20px",
    margin:"10px auto",
    maxWidth:"900px",
    width:"95%",
    position:"relative",
    height:"50vh"
  }
})

class Problem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      round: null,
      clues: null,
      center: [0.0, 0.0],
      positions: null,
    }

    this.submitRound = this.submitRound.bind(this)
    this.submitClue = this.submitClue.bind(this)
    this.fetchRound = this.fetchRound.bind(this)
    this.fetchClues = this.fetchClues.bind(this)
  }

  componentDidMount() {
    this.fetchRound()
  }

  fetchRound() {
    var self = this
    console.log(this.state)
    axios
      .get(`${process.env.GATSBY_API_URL}quiz/getRound?format=json`, {
        headers: {
          Authorization: `Token ${localStorage.token}`,
        },
      })
      .then(function(response) {
        if (response.data.status == 200) {
          self.setState((state, props) => ({
            round: response.data.question,
            // center: response.data.center
          }))
          self.fetchClues()
        } else if (response.data.status == 404) {
          navigate("/completed")
        } else if (response.data.status == 410) navigate("/timer")
        else {
          AnswerAlert(-1)
        }
      })
      .catch(function(error) {
        AnswerAlert(-1)
      })
  }

  fetchClues() {
    var self = this
    axios
      .get(`${process.env.GATSBY_API_URL}quiz/getClue?format=json`, {
        headers: {
          Authorization: `Token ${localStorage.token}`,
        },
      })
      .then(function(response) {
        var clues = response.data.clues.map(v => ({
          id: v.id,
          isSolved: v.solved,
          question: v.question,
          position: v.position,
        }))
        var positions = []
        for (let i = 0; i < response.data.clues.length; i++) {
          console.log(response.data[i])
          if (response.data.clues[i].solved == 1)
            positions.push(response.data.clues[i].position)
        }

        console.log(positions)
        self.setState((state, props) => ({
          clues: clues,
        }))
        self.setState((state, props) => ({
          positions: positions,
        }))
      })
      .catch(function(error) {
        AnswerAlert(-1)
      })
  }

  submitRound(answer) {
    var self = this
    axios
      .post(
        `${process.env.GATSBY_API_URL}quiz/checkRound`,
        {
          answer: answer,
        },
        {
          headers: {
            Authorization: `Token ${localStorage.token}`,
          },
        }
      )
      .then(response => {
        if (response.data.status == 200 && response.data.detail == 1) {
          AnswerAlert(1)
          self.fetchRound()
        } else if (response.data.status == 500) AnswerAlert(0)
        else if (response.data.status == 404) navigate("/completed")
        else if (response.data.status == 410) navigate("/timer")
        else AnswerAlert(-1)
      })
      .catch(err => AnswerAlert(-1))
  }

  submitClue(answer, id) {
    var self = this
    axios
      .post(
        `${process.env.GATSBY_API_URL}quiz/checkClue`,
        {
          clue_id: id,
          answer: answer,
        },
        {
          headers: {
            Authorization: `Token ${localStorage.token}`,
          },
        }
      )
      .then(response => {
        if (response.data.status == 200 && response.data.detail == 1) {
          AnswerAlert(1)
          self.setState((state, props) => ({
            positions: [...state.positions, response.data.position],
          }))
          self.fetchClues()
        } else if (response.data.status == 500) AnswerAlert(0)
        else AnswerAlert(-1)
      })
      .catch(response => AnswerAlert(-1))
  }

  render() {
    const { classes } = this.props
    var self = this
    if (this.state.clues !== null) {
      var cluesArr = this.state.clues.map((v, index) => {
        return (
          <Grid item xs={12} sm={3} lg={3}>
            <Clue
              question={v.question}
              id={v.id}
              index = {index+1}
              submitClue={self.submitClue}
              key={index}
              isSolved={v.isSolved}
              position={v.position}
            ></Clue>
          </Grid>
        )
      })
      return (
        <Container>
          <Container className={classes.root}>
            <Grid container justify="center">
              <div
                style={{fontSize:"30px",
                color:"#fff",
                textTransform:"uppercase"}}
                className="glitch" data-text={`Round No. ${this.state.round.round_number}`}
              >
                Round No. {this.state.round.round_number}
              </div>
            </Grid>
            <Question
              question={this.state.round}
              submitRound={this.submitRound}
            />
          </Container>
          {/* <div className="row justify-content-center">
                <div
                style={{fontSize:"6vmin",
                color:"#fff",
                textTransform:"uppercase"}}
                  
                className="glitch" data-text="Clues"
                >
                  Clues
                </div>
              </div> */}
          <Grid container spacing={2} className={classes.clueContainer}>
            {cluesArr}
          </Grid>
          
              <div className={classes.map}>
                <GameMap
                  positions={this.state.positions}
                  centerLoc={this.state.center}
                />
              </div>
            
        </Container>
      )
    } else
      return (
        <div className="container p-5">
          {/* <div
            className="spinner-border mx-auto d-block m-5 text-light"
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div> */}
          <Loader />
        </div>
      )
  }
}

export default withStyles(styles)(Problem)
