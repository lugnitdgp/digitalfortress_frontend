import React, { useState, useEffect } from "react"
import Swal from "sweetalert2"
import { navigate } from "gatsby"
import {
  Avatar,
  Typography,
  Grid,
  Button,
  makeStyles,
  Hidden,
} from "@material-ui/core"
import { Facebook } from "@material-ui/icons"

const useStyles = makeStyles(theme => ({
  spacing: {
    margin: theme.spacing(1),
  },
}))
export default props => {
  var [isLogged, setLogged] = useState(0)
  var [name, setName] = useState("")
  var [image, setImage] = useState("")
  const classes = useStyles()

  useEffect(() => {
    if (localStorage.email) {
      setLogged(1)
      setName(localStorage.name)
      setImage(localStorage.image)
    }
  })

  function logOut() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success m-1",
        cancelButton: "btn btn-danger m-1",
      },
      buttonsStyling: false,
    })

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "Do you want to log out of this competition",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Log out!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then(result => {
        if (result.value) {
          localStorage.clear()
          swalWithBootstrapButtons.fire(
            "Success",
            "Your have been logged out.",
            "success"
          )
          navigate("/")
        }
      })
  }

  if (isLogged == 1)
    return (
      <Button color="primary" onClick={e => logOut()}>
        <Avatar src={image} className={classes.spacing} />
        <Hidden smDown>
          <Typography style={{ color: "white" }}>{name}</Typography>
        </Hidden>
      </Button>
    )
  else
    return (
      <Hidden smDown>
        <Button color="primary">
          <Facebook style={{ color: "white" }} className={classes.spacing} />
          <Typography style={{ color: "white" }}>Facebook</Typography>
        </Button>
      </Hidden>
    )
}
