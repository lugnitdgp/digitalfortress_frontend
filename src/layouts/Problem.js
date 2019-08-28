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
    axios.get(`${data.api}quiz/getRound?email=${localStorage.email}`).then(function (response) {
      if (response.data.status == 200) {
        self.setState((state, props) => ({
          round: response.data.question,
        }));
        self.fetchClues();
      } else if (response.data.status == 500) {
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
    console.log(this.state.email)
    axios.get(`${data.api}quiz/getClues?email=${localStorage.email}`).then(function (response) {
        var clues = response.data.map((v) => ({
            id: v.id,
            isSolved: v.isSolved,
            question: v.question
        }))
        var positions = response.data.filter((v) => { if (v.isSolved == 1) return true; return false; })
        positions = response.data.map((v) => {
          return v.position
        })
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

  }

  submitClue(answer) {

  }

  render() {
    if (this.state.clues !== null) {
      var cluesArr = this.state.clues.map((v, index) => {
        return <Clue question={v.question} key={index}></Clue>
      })
    return <div>
      <div className="container p-3">
        <div className="row mx-auto d-block">
          <Question question={this.state.round} submitRound={this.submitRound} />
        </div>
      </div>
      <div className="container p-3">
        <div className="row">
          <div className="col-6">
            {cluesArr}
          </div>
          <div className="col-6 p-3">
            <GameMap positions={this.state.positions}/>
          </div>
        </div>
      </div>
    </div>
    }
    else
  return<div className = "container p-5">
        <div className="spinner-border mx-auto d-block m-5 text-light" role="status">
  <span className="sr-only">Loading...</span>
</div>
      </div >
  }
}