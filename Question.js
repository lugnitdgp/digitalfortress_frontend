import React, { useState } from "react"
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  CardActions,
  Button,
  TextField,
  makeStyles,
  useTheme
} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  spacing: {
    padding: theme.spacing(1)
  },
  buttons: {
    float: "right"
  }
}));

export default function Question(props) {
  const [answer, setAnswer] = useState("")
  const classes = useStyles();
  const theme = useTheme();

  return (
    
       <Card style={{borderRadius: 8,boxShadow: 10,elevation: 2,backgroundColor: 'black',color: 'white',opacity: .75}}>
      <CardContent>
        <Typography variant="h5" component="h5" className={classes.spacing}>{props.question.question}</Typography>
        <TextField
        variant="outlined"
          fullWidth
          label="Enter your answer"
          value={answer}
          onChange={e => setAnswer(e.target.value)}
        ></TextField>
        <CardActions className={classes.spacing}>
          <Button
            variant="contained"
            color="primary"
            onClick={e => {
              setAnswer("")
              props.submitRound(answer)
            }}
          >
            Submit
          </Button>
        </CardActions>
      </CardContent>
      </Card>
    
  )
}
