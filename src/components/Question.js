import React, { useState } from "react"
import {
  Card,
  CardHeader,
  CardContent,
  div,
  CardActions,
  Button,
  TextField,
  makeStyles,
  useTheme
} from "@material-ui/core"
import AudioHint from "./AudioHint"

const useStyles = makeStyles(theme => ({
  spacing: {
    padding: "20px"
  },
  buttons: {
    float: "right"
  },
  cardColor: {
    backgroundColor: "rgba(3, 32, 44, 0.4)",
    backdropFilter: "blur(3px)",
    textAlign:"center",
    color:"#fff",
    maxWidth:"900px",
    width:"95%",
    margin:"10px auto",
    borderRadius:"20px",
    borderBottom:"8px solid #32c8c6",
    border:"1px solid #32c8c6",
    borderLeft:"1px solid #32c8c6",
  },
  textstyle: {
    padding: "20px",
    fontSize:"16px",
  },
  input: {
    backgroundColor:"rgba(0,0,0,0)",
    border:"none",
    borderBottom:"2px solid #32c8c6",
    width:"90%",
    maxWidth:"400px",
    outline:"none",
    color:"#fff",
    textAlign:"center"
  },
  btn:{
    backgroundColor:"#32c8c6",
    color:"rgba(3, 32, 44, 1)",
    outline:"none",
    fontFamily: "'Audiowide', cursive",
  },
  img:{
    width:"90%",
    maxWidth:"500px",
    margin: "10px auto",
    borderRadius:"15px"
    }
}));

export default function Question(props) {
  const [answer, setAnswer] = useState("")
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.cardColor}>
      
  <div>{props.question.image ? <div><img alt="." src={`${process.env.GATSBY_API_URL}` + props.question.image} className={classes.img} /></div> : <div></div>}</div>
        <div color="white" className={classes.textstyle}>{props.question.question}</div>
        <div>{props.question.audio ? <div><AudioHint audioUrl={`${process.env.GATSBY_API_URL}` + props.question.audio}/></div> : <div></div>}</div>     
        <input
        variant="outlined"
          className={classes.input}
          placeholder="Enter your answer"
          value={answer}
          onChange={e => setAnswer(e.target.value)}
        ></input>
        <div className={classes.spacing}>
          <Button
            className={classes.btn}
            variant="contained"
            onClick={e => {
              setAnswer("")
              props.submitRound(answer)
            }}
          >
            
            Submit
          </Button>
        </div>
      
    </div>
  )
}
