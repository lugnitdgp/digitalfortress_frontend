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
  Button,
  TextField,
  Divider,
  InputBase,
  Paper
} from "@material-ui/core"
import { ExpandMore, Menu, Search, Directions, Send, Check, Close } from "@material-ui/icons"
import { red } from "@material-ui/core/colors"

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    borderRadius: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
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
    marginRight: theme.spacing(1)
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
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: "100%",
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
          <Typography>
            Position : {props.position[1] + ", " + props.position[0]}
          </Typography>
        </CardContent>
      </Collapse>
    )
  } else {
    var x = (
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          
          <Paper component="form" className={classes.root}>
            <InputBase
              className={classes.input}
              placeholder="Enter your answer"
              inputProps={{ "aria-label": "search google maps" }}
              value={answer}
                onChange={e => {
                  setAnswer("")
                  setAnswer(e.target.value)
                }}
            />
            <Divider className={classes.divider} orientation="vertical" />
            <Button
              className={classes.iconButton}
              aria-label="search"
              onClick={e => props.submitClue(answer, props.id)}
            >
              {/* <Send /> */}
              Send
            </Button>
            
          </Paper>
        </CardContent>
      </Collapse>
    )
  }

  return (
      <Card className={classes.spacing}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={10}>
              <Typography variant="h6" component="h6" className={classes.flex}>{props.question}</Typography>
              {props.isSolved ? 
              <span><Check className={classes.smallspacing} style={{color: "green"}} /><span>Solved</span></span>
               : <span><Close className={classes.smallspacing} style={{color: "red"}} /><span>Not Solved</span></span>}
            </Grid>
            <Grid item xs={2}>
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
  )
}
