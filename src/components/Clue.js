import React, { useState } from "react"
import { func } from "prop-types"
import "../custom.css"
import "../muipaper.css"
import clsx from "clsx"
import {
  Card,
  CardContent,
  CardActionArea,
  makeStyles,
  div,
  CardActions,
  IconButton,
  Collapse,
  Grid,
  Button,
  TextField,
  Divider,
  InputBase,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core"
import {
  ExpandMore,
  Menu,
  Search,
  Directions,
  Send,
  Check,
  Close,
} from "@material-ui/icons"
import { red } from "@material-ui/core/colors"

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  gfont:{
    fontFamily: "'Audiowide', cursive",
    color:"rgb(150, 160, 255)",
    outline:"none"
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  flex: {
    flexGrow: 1,
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  spacing: {
    margin: theme.spacing(1),
  },
  smallspacing: {
    marginRight: theme.spacing(1),
  },
  pad: {
    padding: theme.spacing(1),
    fontSize:"18px",
    fontWeight:"500",
    textTransform:"uppercase"
  },
  pad2: {
    padding: theme.spacing(1),
    fontSize:"16px",
    fontWeight:"400",
  },
  divider: {
    height: 28,
    margin: 4,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  cardColor: {
    backgroundColor: "rgba(7,7,125, 0.55)",
    backdropFilter: "blur(3px)",
    textAlign:"center",
    color:"#fff",
    borderRadius:"20px",
    borderBottom:"8px solid rgb(150, 160, 255)",
    border:"1px solid rgb(150, 160, 255)",
    borderLeft:"1px solid rgb(150, 160, 255)",
    margin:"10px auto",
    maxWidth:"250px"
  },
  btn2:{
    margin:"10px auto",
    color:"rgb(150, 160, 255)",
    outline:"none",
    border:"2px solid rgb(150, 160, 255)",
    fontFamily: "'Audiowide', cursive",
  },
  dialog:{
    backgroundColor: "rgba(7,7,125, 0.4)",
    
    textAlign:"center",
  },
  diaIn:{
    backgroundColor: "rgba(7,7,125, 0.55)",
    backdropFilter: "blur(3px)",
    textAlign:"center",
    color:"#fff",
    borderRadius:"20px",
    borderBottom:"8px solid rgb(150, 160, 255)",
    border:"1px solid rgb(150, 160, 255)",
    borderLeft:"1px solid rgb(150, 160, 255)",
    margin:"0 auto",
    maxWidth:"500px",
    padding:"30px",
    textAlign:"center"
  },
  input: {
    backgroundColor:"rgba(0,0,0,0)",
    border:"none",
    borderBottom:"2px solid rgb(150, 160, 255)",
    width:"90%",
    maxWidth:"400px",
    outline:"none",
    color:"#fff",
    textAlign:"center",
    margin:"10px auto"
  },
}))

export default props => {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)
  const [answer, setAnswer] = useState("")
  const [open, setOpen] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const submit = () => {
    setOpen(false)
    props.submitClue(answer, props.id)
    setAnswer("")
  }

  if (props.isSolved == 1) {
    var x = (
      <Dialog
        open={open}
        onClose={e => setOpen(false)}
        aria-labelledby="form-dialog-title"
        className={classes.dialog}
      >
         <div className={classes.diaIn}>
        <div id="form-dialog-title" className={classes.gfont}>CLUE</div>
        
          <div style={{margin:"10px auto"}}>
            Position : {props.position[1] + ", " + props.position[0]}
          </div>
       
          <Button onClick={e => setOpen(false)} className={classes.gfont} style={{border:"1px solid #32c8c6"}}>
            Close
          </Button>
          </div>
      </Dialog>
    )
  } else {
    var x = (
      <Dialog
        open={open}
        onClose={e => setOpen(false)}
        aria-labelledby="form-dialog-title"
        className={classes.dialog}
      >
      <div className={classes.diaIn}>
        <div id="form-dialog-title" className={classes.gfont}>CLUE</div>
        
          <div style={{margin:"10px auto"}}>{props.question}</div>
          <input
            autoFocus
            margin="dense"
            id="name"
            placeholder="Enter your answer"
            type="text"
            
            className={classes.input}
            value={answer}
            onChange={e => {
              setAnswer("")
              setAnswer(e.target.value)
            }}
          />
        
          <Button onClick={e => setOpen(false)} 
          className={classes.gfont}
          style={{border:"1px solid rgb(150, 160, 255)"}}
          >
            Close
          </Button>
          &nbsp;&nbsp;
          <Button
            onClick={e => {submit(); setAnswer("")}}
            className={classes.gfont}
            style={{border:"1px solid rgb(150, 160, 255)"}}
          >
            Check Answer
          </Button>
          </div>
      </Dialog>
    )
  }

  return (
    <div className={classes.cardColor}>
     
        <div className={classes.pad}>
          Clue No. {props.index}{" "}
        </div>
        {props.isSolved ? (
          <div className={classes.pad2}>
            <Check
              className={classes.smallspacing}
              style={{ color: "green" }}
            />
            <span>Solved</span>
          </div>
        ) : (
          <div className={classes.pad2}>
            <Close className={classes.smallspacing} style={{ color: "red" }} />
            <span>Not Solved</span>
          </div>
        )}
        <Button
          className={classes.btn2}
          onClick={e => setOpen(true)}
          variant="outlined"
        >
          Open Clue
        </Button>
        <CardActionArea>{x}</CardActionArea>
      
    </div>
  )
}
