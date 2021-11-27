import React, { useState, useEffect } from "react"
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
import DashboardLayout from "../layouts/DashboardLayout"
import "../glitch.css"

const useStyles = makeStyles(theme => ({
    main:{
        textAlign:"center",
        margin:"100px auto",
        width:"80%",
        maxWidth:"600px",
        fontSize:"21px",
        color:"#fff",
        backgroundColor: "rgba(3, 32, 44, 0.4)",
    backdropFilter: "blur(3px)",
    border:"1px solid #32c8c6",
    borderRadius:"20px",
    padding:"20px",
    
            }
}));

export default function Completed() {
    const classes = useStyles();
  return (
    <DashboardLayout>
      <div className={classes.main}>
        <div className="glitch" data-text="Congratulations">Congratulations</div>
<br/>
        <div >
        You have cleared all levels till now!
More coming soon.
        </div>
      </div>
    </DashboardLayout>
  )
}
