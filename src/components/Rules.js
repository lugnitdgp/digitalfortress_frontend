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
              <li>Solving each round rewards you 10 points.</li>
              <li>Each Round is based on a theme which you need to figure out.</li>
              <li>Each Round consists of a main question and 4 clue questions.</li>
              <li>Answering each clue question unlocks a position on the map.</li>
              <li>These locations are hints to the main question.</li>
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
