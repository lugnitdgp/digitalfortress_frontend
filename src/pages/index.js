import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import DashboardLayout from "../layouts/DashboardLayout"
import Typed from "typed.js"
import GoogleSignIn from "../components/GoogleSignIn"
// import FacebookSignIn from "../components/FacebookSignIn"
// import GithubSignin from "../components/GithubLogin"
import logo from "../images/logodf.png"
import { Hidden, Container, withStyles, Grid } from "@material-ui/core"
import Countdown from "../styles/countdown"
import Social from "../styles/social"
import HeaderScreen from "../styles/header"
import Rules from "../components/Rules"
import Footer from "../components/Footer";

var styles = theme => ({
  root: {
    padding: theme.spacing(0),
  },
  container:{
    
    height: "70vh",
    width:"100vw",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column"
  },
  icongrid:{
    width:"100%",
    textAlign:"center",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
  }
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
              <div className={classes.container}>

                <div>
                  <img src={logo} className="dfimg" />
                </div>
                
                <h3 className="dftxt" style={{color:"#fff", textAlign:"center"}}>
                  Competition to <span className="element"></span>
                </h3>

                <div className={classes.icongrid}>
                    <GoogleSignIn />
                    {/* <FacebookSignIn />
                    <GithubSignin /> */}
                </div>

              </div>
            
            
            <Footer />
         
          
        </DashboardLayout>
      </div>
    )
  }
}

export default withStyles(styles)(IndexPage)
