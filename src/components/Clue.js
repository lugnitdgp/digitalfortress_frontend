import React, { useState } from "react"
import { func } from "prop-types"
import "../custom.css"
import clsx from "clsx"
import {
  Card,
  CardContent,
  CardActionArea,
  makeStyles,
  Typography,
  CardActions,
  IconButton,
  Collapse,
  Grid,
} from "@material-ui/core"
import { ExpandMore } from "@material-ui/icons"
import { red } from '@material-ui/core/colors';

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
    flexGrow: 1
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}))

export default props => {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)
  const [answer, setAnswer] = useState("")

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  if (props.isSolved == 1) {
    var x = (
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <span className="ml-2">
            Position : {props.position[1] + ", " + props.position[0]}
          </span>
        </CardContent>
      </Collapse>
    )
  } else {
    var x = (
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <div className="row">
            <div className="col col-10">
              <input
                className="form-control"
                placeholder="Enter answer"
                value={answer}
                onChange={e => {
                  setAnswer("")
                  setAnswer(e.target.value)
                }}
              ></input>
            </div>
            <div className="col col-2">
              <button
                className="btn clue-submit"
                onClick={e => props.submitClue(answer, props.id)}
                style={{ float: "right" }}
              >
                Submit
              </button>
            </div>
          </div>
        </CardContent>
      </Collapse>
    )
  }

  return (
    <div className="mt-1">
      <Card>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={11}>
            <Typography className={classes.flex}>{props.question}</Typography>
            </Grid>
            <Grid item xs={1}>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMore />
            </IconButton>
            </Grid>
          </Grid>
          <CardActionArea>{x}</CardActionArea>
        </CardContent>
      </Card>
    </div>
  )
}
