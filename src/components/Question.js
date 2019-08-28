import React, { useState } from 'react';

export default function Question(props) {
  const [answer, setAnswer] = useState("")

  return <div className="card">
    <div className="card-header">
      <img src="https://img.icons8.com/color/48/000000/document.png" className="float-left" alt="Document-Icon" />
      <span className="align-middle">{props.question}</span>
    </div>
    <div className="card-body">
      <div className="row">
        <div className="col-10"><input className="form-control" placeholder="Enter your answer" value={answer} onChange={(e) => setAnswer(e.target.value)} /></div>
        <div className="col-2">
          <button className="btn btn-success float-right pl-3" onClick={(e) => props.submitRound(answer)}>
            Submit
          <img src="https://img.icons8.com/plasticine/26/000000/idea.png" alt="daf" className="float-right d-none d-lg-block"/>
          </button>
        </div>
      </div>
    </div>
  </div>
};