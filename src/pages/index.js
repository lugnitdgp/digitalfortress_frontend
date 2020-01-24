import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import DashboardLayout from "../layouts/DashboardLayout"
import Typed from "typed.js"
import GoogleSignIn from "../components/GoogleSignIn"
import FacebookSignIn from "../components/FacebookSignIn"
import logo from "../images/logodf.png"
import { Hidden, Container, withStyles, Grid } from "@material-ui/core"
import Countdown from "../styles/countdown"
import Social from "../styles/social"
import HeaderScreen from "../styles/header"

var styles = theme => ({
  root: {
    padding: theme.spacing(3),
  },
})

class IndexPage extends React.Component {
  componentDidMount() {
    var typed = new Typed(".element", {
      strings: [
        "show your talent to college.",
        "bring out the geek in you.",
        "win exciting prizes and goodies.",
      ],
      typeSpeed: 50,
      backSpeed: 50,
    })
  }

  render() {
    const { classes } = this.props
    return (
      <div>
        <SEO title="Home" />
        <DashboardLayout>
          <Container className={classes.root}>
            <div className="jumbotron jumbotron-fluid">
              <div className="container">
                <Hidden smUp>
                  <img src={logo} height="60" />
                </Hidden>
                <Hidden smDown>
                  <img src={logo} height="80" />
                </Hidden>
                <h3>
                  Competition to <span className="element"></span>
                </h3>
                <Grid container>
                  <Grid item>
                    <GoogleSignIn />
                  </Grid>
                  <Grid item>
                    <FacebookSignIn />
                  </Grid>
                </Grid>
              </div>
            </div>
            <div className="jumbotron jumbotron-fluid"></div>
          </Container>
        </DashboardLayout>
      </div>
    )
  }
}

export default withStyles(styles)(IndexPage)
