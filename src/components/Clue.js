import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card, CardHeader } from 'reactstrap';
import { func } from 'prop-types';

export default (props) => {
  const [collapse, setCollapse] = useState(false)
  const [answer, setAnswer] = useState("")

  return <div className="mt-1">
    <Card>
      <CardHeader>
        <Button onClick={(e) => setCollapse(!collapse)} className="btn btn-light btn-block collapsed" aria-expanded="true">{props.question}</Button>
      </CardHeader>
      <Collapse isOpen={collapse}>
        <CardBody>
          <input className="form-control" placeholder="Enter answer" value={answer} onChange={(e) => setAnswer(e.target.value)}></input>
          <button className="btn btn-primary mt-3" onSubmit={(e) => props.submitClue(answer)}>Submit</button>
        </CardBody>
      </Collapse>
    </Card>
  </div>
}