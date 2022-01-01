import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@material-ui/core"
import store from "../store/index";
import {withStyles} from "@material-ui/core";

const styles = theme => ({
  card: {
    maxWidth: 345,
  },
  gfont:{
    fontFamily: "'Audiowide', cursive",
    color:"#bb79da",
    outline:"none"
  },
  btn2:{
    margin:"10px auto",
    color:"#bb79da",
    outline:"none",
    border:"2px solid #bb79da",
    fontFamily: "'Audiowide', cursive",
  },
  dialog:{
    backgroundColor: "rgba(3, 3, 144, 0.3)",
    textAlign:"center",
  },
  diaIn:{
    backgroundColor: "rgba(44, 1, 70, 0.404)",
    backdropFilter: "blur(3px)",
    textAlign:"center",
    color:"#fff",
    borderRadius:"20px",
    borderBottom:"8px solid #bb79da",
    border:"1px solid #bb79da",
    borderLeft:"1px solid #bb79da",
    margin:"0 auto",
    maxWidth:"500px",
    padding:"25px",
    textAlign:"center"
  },
})

class Rules extends React.Component {
  
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
        className={this.props.classes.dialog}
      >
        <div className={this.props.classes.diaIn}>
        <div style={{fontSize:"18px"}} className={this.props.classes.gfont}>RULES OF THE QUIZ</div>
        
          
          <ol style={{margin:"10px auto", textAlign:"left"}}>
              <li>Solving each round rewards you 10 points.</li>
              <li>Each Round is based on a theme which you need to figure out.</li>
              <li>Each Round consists of a main question and a few clue questions.</li>
              <li>Answering each clue question unlocks a position on the map.</li>
              <li>These locations/shapes/street-views are hints to the main question.</li>
              <li>The leaderboard will be inactive during sample rounds.</li>
            </ol>
          
        
        
          <Button onClick={e => this.toggle()} className={this.props.classes.btn2} >
            Close
          </Button>
        
        </div>
      </Dialog>
    );
  }
}

export default withStyles(styles)(Rules)