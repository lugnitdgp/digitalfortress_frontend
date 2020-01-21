/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import GoogleSignIn from '../components/GoogleSignIn';
import logo from '../images/logodf.png';
import { Link } from "gatsby"
import FacebookSignIn from './FacebookSignIn';
import { navigate } from "gatsby";
// import '../custom.css';
import Rules from '../components/Rules';
import { AppBar, Toolbar, IconButton, Typography, withStyles, Button } from "@material-ui/core";
import { Menu } from '@material-ui/icons'
import Logout from './Logout';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  grow: {
    flexGrow: 1,
  },
  button: {
    float: "right"
  }
});

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileImage: "",
      name: "",
      isOpen: false
    }
    this.setProfile = this.setProfile.bind(this)
    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  componentDidMount() {
    this.setProfile();
  }

  setProfile() {
    if (localStorage.email) {
      this.setState({
        profileImage: localStorage.image,
        name: localStorage.name
      })
    }
  }

  toggleNavbar() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { classes } = this.props;

    return <div className="navbar-inner">
      {/* <Navbar expand="md" style={{backgroundColor: 'rgba(154, 89, 240, 0.2)'}}>
        <NavbarBrand>
          <Link to="/">
            <a className="navbar-brand" href="#">
              <img src={logo} height={40} className="d-inline-block align-top" alt="Logo" /></a>
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar} className="toggler" />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink>
                <Link to="/">
                  <a className="nav-link text-white" href="#">Home <span className="sr-only">(current)</span></a>
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Rules />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/leaderboard/">
                  <a className="nav-link text-white" href="#">LeaderBoard</a>
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Logout />
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar> */}
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Menu />
          </IconButton>
          
          <img src={logo} height={40} className="d-inline-block align-top" alt="Logo" />
          <div className={classes.grow} />
          <Link to="/" style={{color: "white"}}><Button color="inherit">Home</Button></Link>
          <Link to="/leaderboard/" style={{color: "white"}}><Button color="inherit">LeaderBoard</Button></Link>
          
          <Logout />
        </Toolbar>
      </AppBar>
    </div>
  }
}

export default withStyles(styles)(NavBar);