import React from "react"
import DashboardLayout from "../layouts/DashboardLayout"
import axios from "axios"
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

  fetchData() {
    const { classes } = this.props
    var self = this
    axios
      .get(`${process.env.GATSBY_API_URL}quiz/leaderboard?format=json`)
      .then(response => {
        if (response.data.standings.length != 0) {
          var temp = response.data.standings.map((v, index) => {
            return (
              <List className={classes.root}>
                <ListItem>
                  <ListItemText primary={v.rank} style={{ color: "black" }} />
                  <ListItemAvatar>
                    <Avatar src={v.image} />
                  </ListItemAvatar>
                  <ListItemText primary={v.name} style={{ color: "black" }} />
                </ListItem>
              </List>
            )
          })
          self.setState({
            playerRanks: temp,
          })
        } else {
          self.setState({
            playerRanks: <div>No data to show</div>,
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
          <div className="container mt-5">
            <div className="row">
              <div className="col-lg-3"></div>
              <div className="col-lg-6 col-sm-12">
                <div className="card p-3 bg-transparent">
                  <h1 className="mx-auto d-block text-white">LeaderBoard</h1>
                  <hr />
                  {this.state.playerRanks}
                </div>
              </div>
              <div className="col-lg-3"></div>
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
