import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@material-ui/core"
import store from "../store/index"

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

  componentDidMount() {
    var self = this
    store.subscribe(() => {
      self.setState({
        modal: store.getState()
      })
    })
  }

  render() {
    return (
      <Dialog
        open={this.state.modal}
        onClose={e => store.dispatch({ type: 'CLOSE'})}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Rules of the Quiz</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <ol className="p-3">
              <li>Solving each round rewards you 10 points.</li>
              <li>Each Round is based on a theme which you need to figure out.</li>
              <li>Each Round consists of a main question and 4 clue questions.</li>
              <li>Answering each clue question unlocks a position on the map.</li>
              <li>These locations are hints to the main question.</li>
            </ol>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={e => this.toggle()} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
