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
import store from "../store/leaderboard"

const useStyles = theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
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
    var self = this
    this.fetchData()
    store.subscribe(() => {
      self.setState({
        playerRanks: store.getState()
      })
    })
  }

  FirstPosition({ name, image, score }) {
    return (
      <div className="one item">
        <div className="pos">1</div>
        <div
          className="pic"
          style={{ backgroundImage: "url(" + image + ")" }}
        ></div>
        <div className="name">{name}</div>
        <div className="score" style={{color: "black"}}>{score}</div>
      </div>
    )
  }
  SecondPosition({ name, image, score }) {
    return (
      <div className="two item">
        <div className="pos">2</div>
        <div
          className="pic"
          style={{ backgroundImage: "url(" + image + ")" }}
        ></div>
        <div className="name">{name}</div>
        <div className="score" style={{color: "black"}}>{score}</div>
      </div>
    )
  }
  ThirdPosition({ name, image, score }) {
    return (
      <div className="three item">
        <div className="pos">3</div>
        <div
          className="pic"
          style={{ backgroundImage: "url(" + image + ")" }}
        ></div>
        <div className="name">{name}</div>
        <div className="score" style={{color: "black"}}>{score}</div>
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
          store.dispatch({ type: "INCREMENT", data: response.data.standings })
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
    const list = this.state.playerRanks
    const mystyle = {
      color: "black",
   };

    if (list.length !== 0) {
      return (
        <DashboardLayout>
          <div className="center">
            <h1 className="mx-auto d-block md-5 text-black">LeaderBoard</h1>
            <hr></hr>
            <div className="top3">
              {
                <this.SecondPosition
                  name={list[1].name}
                  image={list[1].image}
                  score={list[1].score}
                />
              }
              {
                <this.FirstPosition
                  name={list[0].name}
                  image={list[0].image}
                  score={list[0].score}
                />
              }
              {
                <this.ThirdPosition
                  name={list[2].name}
                  image={list[2].image}
                  score={list[2].score}
                />
              }
            </div>
            <div className="list">
              {list.map((v, index) => {
                return (
                  <React.Fragment key={v.rank}>
                    {v.rank > 3 ? (
                      <div className="item">
                        <div className="pos">{v.rank}</div>
                        <div
                          className="pic"
                          style={{ backgroundImage: "url(" + v.image + ")" }}
                        ></div>
                        <div className="name">{v.name}</div>
                        <div className="score" style={mystyle}>{v.score}</div>
                      </div>
                    ) : null}
                  </React.Fragment>
                )
              })}
            </div>
          </div>
        </DashboardLayout>
      )
    } else
      return (
        <DashboardLayout>
          <Loader />
        </DashboardLayout>
      )
  }
}

export default withStyles(useStyles)(LeaderBoard)
