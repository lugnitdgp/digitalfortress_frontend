import React from "react"
import DashboardLayout from "../layouts/DashboardLayout"
import Countdown from "../styles/countdown"
import AnswerAlert from "../components/AnswerAlert"
import { navigate } from "gatsby"
import axios from "axios"
import Footer from "../components/Footer";

class Timer extends React.Component {
  constructor(props) {
      super(props)
      this.state={
          time: {}
      }
  }

  componentDidMount() {
    var self = this
    axios
      .get(`${process.env.GATSBY_API_URL}quiz/getRound?format=json`, {
        headers: {
          Authorization: `Token ${localStorage.token}`,
        },
      })
      .then(function(response) {
        if (response.data.status == 410) {
            self.setState({
                time: {
                  start: response.data.start_time,
                  end: response.data.end_time
                } 
            })
        }
      })
      .catch(function(error) {
        AnswerAlert(-1)
      })
  }

  render() {
    return (
      <DashboardLayout>
        <Countdown time={this.state.time} />
        <Footer></Footer>
      </DashboardLayout>
    )
  }
}

export default Timer
