import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card, CardHeader } from 'reactstrap';
import { func } from 'prop-types';
import '../custom.css';

export default (props) => {
  const [collapse, setCollapse] = useState(false)
  const [answer, setAnswer] = useState("")
  if (props.isSolved == 1) {
    var x = <CardBody>
      <span className="ml-2">Position : {props.position[0] + ", " + props.position[1]}</span>
    </CardBody>

  }
  else {
    var x = <CardBody>
      <div className="row">
        <div className="col col-10">
          <input className="form-control" placeholder="Enter answer" value={answer} onChange={(e) => setAnswer(e.target.value)}></input>
        </div>
        <div className="col col-2">
          <button className="btn clue-submit" onClick={(e) => props.submitClue(answer, props.id)} style={{ float: "right" }}>Submit</button>
        </div>
      </div>
    </CardBody>
  }

  return <div className="mt-1">
    <Card>
      <CardHeader>
        <button onClick={(e) => setCollapse(!collapse)} className="clue-btn collapsed" aria-expanded="true" style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "1.2rem" }}>{props.question}</button>
      </CardHeader>
      <Collapse isOpen={collapse}>
        {x}
      </Collapse>
    </Card>
  </div>
}
