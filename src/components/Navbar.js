/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import GoogleSignIn from '../components/GoogleSignIn';
import logo from '../images/logodf.png';
import { Link } from "gatsby"
import FacebookSignIn from './FacebookSignIn';
import { navigate } from "gatsby";
import '../custom.css';
import Rules from '../components/Rules';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import Logout from './Logout';


export default class NavBar extends React.Component {
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
    return <div className="navbar-inner">
      <Navbar expand="md" style={{backgroundColor: 'rgba(154, 89, 240, 0.2)'}}>
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
      </Navbar>
    </div>
  }
}