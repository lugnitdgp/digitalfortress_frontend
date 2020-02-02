import React from "react"
import DashboardLayout from "../layouts/DashboardLayout"
import axios from "axios"
import "../styles/leaderboard.css"
import AnswerAlert from "../components/AnswerAlert"
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  withStyles,
} from "@material-ui/core"
import Loader from "../styles/loader"

const useStyles = theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    // backgroundColor:"#546e7a",
  },
})

class LeaderBoard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      playerRanks: [],
    }
    this.fetchData = this.fetchData.bind(this)
  }

  componentDidMount() {
    this.fetchData()
  }

  FirstPosition({ name, image, score }) {
    return (
      <div class="one item">
        <div class="pos">1</div>
        <div
          class="pic"
          style={{ backgroundImage: "url(" + image + ")" }}
        ></div>
        <div class="name">{name}</div>
        <div class="score">{score}</div>
      </div>
    )
  }
  SecondPosition({ name, image, score }) {
    return (
      <div class="two item">
        <div class="pos">2</div>
        <div
          class="pic"
          style={{ backgroundImage: "url(" + image + ")" }}
        ></div>
        <div class="name">{name}</div>
        <div class="score">{score}</div>
      </div>
    )
  }
  ThirdPosition({ name, image, score }) {
    return (
      <div class="three item">
        <div class="pos">3</div>
        <div
          class="pic"
          style={{ backgroundImage: "url(" + image + ")" }}
        ></div>
        <div class="name">{name}</div>
        <div class="score">{score}</div>
      </div>
    )
  }

  fetchData() {
    const { classes } = this.props
    var self = this
    axios
      .get(`${process.env.GATSBY_API_URL}quiz/leaderboard?format=json`)
      .then(response => {
        if (response.data.standings.length != 0) {
          self.setState({
            playerRanks: response.data.standings,
          })
        } else {
          self.setState({
            playerRanks: [],
          })
        }
      })
      .catch(error => {
        AnswerAlert(-1)
      })
  }
  render() {
    const { classes } = this.props

    if (this.state.playerRanks.length !== 0)
      return (
        <DashboardLayout>
          {/* <div className="card bg-transparent"> */}
          
          {/* </div> */}
          <div className="center">
          <h1 className="mx-auto d-block md-5 text-white">LeaderBoard</h1>
          <hr ></hr>
            <div class="top3">
            {
                <this.SecondPosition
                  name={this.state.playerRanks[1].name}
                  image={this.state.playerRanks[1].image}
                  score={this.state.playerRanks[1].score}
                />
              }
              {
                <this.FirstPosition
                  name={this.state.playerRanks[0].name}
                  image={this.state.playerRanks[0].image}
                  score={this.state.playerRanks[0].score}
                />
              }
              {
                <this.ThirdPosition
                  name={this.state.playerRanks[2].name}
                  image={this.state.playerRanks[2].image}
                  score={this.state.playerRanks[2].score}
                />
              }
            </div>
            <div class="list">
              {this.state.playerRanks.map((v, index) => {
                return (<React.Fragment>
                  {v.rank > 3 ? (
                    <div class="item">
                      <div class="pos">{v.rank}</div>
                      <div
                        class="pic"
                        style={{ backgroundImage: "url(" + v.image + ")" }}
                      ></div>
                      <div class="name">{v.name}</div>
                      <div class="score">{v.score}</div>
                    </div>
                  ) : null}
                </React.Fragment>)
              })}
            </div>
          </div>
        </DashboardLayout>
      )
    else
      return (
        <DashboardLayout>
          <Loader />
        </DashboardLayout>
      )
  }
}

export default withStyles(useStyles)(LeaderBoard)
