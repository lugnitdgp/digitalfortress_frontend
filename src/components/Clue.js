import React, { useState } from "react"
import { func } from "prop-types"
import "../custom.css"
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
    backgroundColor: "rgba(3, 32, 44, 0.4)",
    backdropFilter: "blur(3px)",
    textAlign:"center",
    color:"#fff",
    borderRadius:"20px",
    borderBottom:"8px solid #32c8c6",
    border:"1px solid #32c8c6",
    borderLeft:"1px solid #32c8c6",
    margin:"0 auto",
    maxWidth:"250px"
  },
  btn2:{
    margin:"10px auto",
    color:"#32c8c6",
    outline:"none",
    border:"2px solid #32c8c6",
  }
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
  }

  if (props.isSolved == 1) {
    var x = (
      <Dialog
        open={open}
        onClose={e => setOpen(false)}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Clue</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Position : {props.position[1] + ", " + props.position[0]}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={e => setOpen(false)} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    )
  } else {
    var x = (
      <Dialog
        open={open}
        onClose={e => setOpen(false)}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Clue</DialogTitle>
        <DialogContent>
          <DialogContentText>{props.question}</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Enter your answer"
            type="text"
            fullWidth
            value={answer}
            onChange={e => {
              setAnswer("")
              setAnswer(e.target.value)
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={e => setOpen(false)} color="primary">
            Close
          </Button>
          <Button
            onClick={e => submit()}
            color="primary"
          >
            Check Answer
          </Button>
        </DialogActions>
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
