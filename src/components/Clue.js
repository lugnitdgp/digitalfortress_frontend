import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card, CardHeader } from 'reactstrap';
import { func } from 'prop-types';
import '../custom.css';

export default (props) => {
  const [collapse, setCollapse] = useState(false)
  const [answer, setAnswer] = useState("")
  if(props.isSolved==1)
  {
    var x= <CardBody>
      <span className="ml-2">Position : {props.position[0] + ", " + props.position[1]}</span>
    </CardBody>
    
  }
  else{
    var x = <CardBody>
    <input className="form-control" placeholder="Enter answer" value={answer} onChange={(e) => setAnswer(e.target.value)}></input>
    <button className="btn btn-primary mt-3" onClick={(e) => props.submitClue(answer, props.id)}>Submit</button>
  </CardBody>
  }

  return <div className="mt-1">
    <Card>
      <CardHeader>
        <Button onClick={(e) => setCollapse(!collapse)} className="btn btn-light btn-block collapsed" aria-expanded="true">{props.question}</Button>
      </CardHeader>
      <Collapse isOpen={collapse}>
        {x}
      </Collapse>
    </Card>
  </div>
}
