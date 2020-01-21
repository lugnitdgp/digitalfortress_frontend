import React from 'react';
import Question from '../components/Question';
import axios from 'axios';
import AnswerAlert from '../components/AnswerAlert';
import { navigate } from 'gatsby';
import data from '../env.json';
import GameMap from '../components/GameMap';
import Clue from '../components/Clue';

export default class Problem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      round: null,
      clues: null,
      positions: null
    };

    this.submitRound = this.submitRound.bind(this);
    this.submitClue = this.submitClue.bind(this);
    this.fetchRound = this.fetchRound.bind(this);
    this.fetchClues = this.fetchClues.bind(this);
  }

  componentDidMount() {
    this.fetchRound();
  }

  fetchRound() {
    var self = this;
    console.log(this.state.email)
    axios.get(`${data.api}quiz/getRound?format=json`, {
      headers: {
        "Authorization": `Token ${localStorage.token}`
      }
    }).then(function (response) {
      if (response.data.status == 200) {
        self.setState((state, props) => ({
          round: response.data.question,
        }));
        self.fetchClues();
      } else if (response.data.status == 404) {
        navigate('/completed')
      } else {
        AnswerAlert(-1)
      }
    }).catch(function (error) {
      AnswerAlert(-1)
    });

  }

  fetchClues() {
    var self = this;
    axios.get(`${data.api}quiz/getClue?format=json`, {
      headers: {
        "Authorization": `Token ${localStorage.token}`
      }
    }).then(function (response) {
      var clues = response.data.clues.map((v) => ({
        id: v.id,
        isSolved: v.solved,
        question: v.question,
        position: v.position
      }))
      var positions = []
      for (let i = 0; i < response.data.clues.length; i++) {
        console.log(response.data[i])
        if (response.data.clues[i].solved == 1) positions.push(response.data.clues[i].position)
      }

      console.log(positions)
      self.setState((state, props) => ({
        clues: clues
      }));
      self.setState((state, props) => ({
        positions: positions
      }));
    }).catch(function (error) {
      AnswerAlert(-1)
    });
  }

  submitRound(answer) {
    var self = this
    axios.post(`${data.api}quiz/checkRound`, {
      "answer": answer
    },
      {
        headers: {
          "Authorization": `Token ${localStorage.token}`
        }
      }).then((response) => {
        if (response.data.status == 200 && response.data.detail == 1) {
          AnswerAlert(1);
          self.fetchRound();
        }
        else if (response.data.status == 500) AnswerAlert(0);
        else if (response.data.status == 404) navigate('/completed');
        else AnswerAlert(-1);
      }).catch((err) => AnswerAlert(-1))
  }

  submitClue(answer, id) {
    var self = this
    axios.post(`${data.api}quiz/checkClue`, {
      "clue_id": id,
      "answer": answer
    },
      {
        headers: {
          "Authorization": `Token ${localStorage.token}`
        }
      }).then((response) => {
        if (response.data.status == 200 && response.data.detail == 1) {
          AnswerAlert(1)
          self.setState((state, props) => ({
            positions: [...state.positions, response.data.position]
          }))
          self.fetchClues()
        }
        else if (response.data.status == 500) AnswerAlert(0)
        else AnswerAlert(-1)
      }).catch((response) => AnswerAlert(-1))
  }

  render() {
    var self = this
    if (this.state.clues !== null) {
      var cluesArr = this.state.clues.map((v, index) => {
        return <Clue question={v.question} id={v.id} submitClue={self.submitClue} key={index} isSolved={v.isSolved} position={v.position}></Clue>
      })
      return <div>
        <div className="container p-3">
          <div className="row justify-content-center md-2">
            <span style={{ color: "white", fontSize: "3rem", fontFamily: "'Mansalva', cursive" }}>Round No. {this.state.round.round_number}</span>
            <hr />
          </div>
          <div className="row mx-auto d-block">
            <Question question={this.state.round} submitRound={this.submitRound} />
          </div>
        </div>
        <div className="container p-3" style={{height: "700px"}}>
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="row justify-content-center">
                <span style={{ color: "white", fontSize: "3rem", fontFamily: "'Mansalva', cursive" }}>Clues</span>
              </div>
              {cluesArr}
            </div>
            <div className="col-12 col-lg-6">
              <div className="row justify-content-center">
                <span style={{ color: "white", fontSize: "3rem", fontFamily: "'Mansalva', cursive" }}>Map</span>
              </div>
              <GameMap positions={this.state.positions} />
            </div>
          </div>
        </div>
      </div>
    }
    else
      return <div className="container p-5">
        <div className="spinner-border mx-auto d-block m-5 text-light" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div >
  }
}
