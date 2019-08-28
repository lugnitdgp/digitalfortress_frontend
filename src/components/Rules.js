import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import '../bootstrap.css';

export default class Rules extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <a className="nav-link text-white pointer" onClick={this.toggle}>Rules</a>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Rules of the Quiz</ModalHeader>
          <ModalBody>
            <ol className="p-3">
              <li>The quiz comprises of 3 levels with 10 questions each.</li>
              <li>Each question carries 10 marks.</li>
              <li>The one who finishes the quiz first is the winner.</li>
              <li>You can go to the next question only after getting the current question correct.</li>
              <li>Answers should be in lowercase and without spaces.</li>
              <li>A level can be played only between its start and end timings.</li>
            </ol>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
