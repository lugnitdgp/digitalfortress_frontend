import React from "react"
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props"
// import "../custom.css"
import { navigate } from "gatsby"
import FacebookAuth from "react-facebook-auth"
import axios from "axios"
import { Avatar, Typography, Grid, Button, makeStyles } from "@material-ui/core"
import { Facebook } from "@material-ui/icons"
import "../styles/social.css"

export default class FacebookSignIn extends React.Component {
  constructor(props) {
    super(props)
  }

  setData(res) {
    localStorage.email = res.email
    localStorage.image = res.picture.data.url
    localStorage.name = res.name
    navigate("/dashboard/")
  }

  MyFacebookButton = ({ onClick }) => (
    <div className="social-btns">
      <button className="btn facebook" onClick={onClick}>
        <i className="fa fa-facebook" />
      </button>
    </div>
  )

  authenticate = response => {
    var self = this
    axios
      .post(
        `${process.env.GATSBY_API_URL}quiz/auth/register`,
        {
          accesstoken: response.accessToken,
          expiration_time: `${response.data_access_expiration_time}`,
          userID: response.id,
          type: "2",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function(res) {
        if (res.data.status != 402) self.setData(response)
        else {
          axios
            .post(
              `${process.env.GATSBY_API_URL}quiz/auth/login`,
              {
                accesstoken: response.accessToken,
                expiration_time: `${response.data_access_expiration_time}`,
                userID: response.id,
                type: "2",
              },
              {
                headers: {
                  "Content-Type": "application/json",
                },
              }
            )
            .then(resValue => {
              localStorage.token = resValue.data.token
              localStorage.email = resValue.data.user.email
              localStorage.name = resValue.data.user.name
              localStorage.image = resValue.data.user.imageLink

              navigate("/dashboard/")
            })
        }
      })
    // Api call to server so we can validate the token
  }

  render() {
    return (
      <FacebookAuth
        appId={process.env.GATSBY_FACEBOOK_APPID}
        callback={this.authenticate}
        component={this.MyFacebookButton}
      />
    )
    //</div>
    /*{return <FacebookLogin
            appId="393676568001815"
            autoLoad={false}
            fields="name,email,picture"
            callback={(res) => { this.setData(res) }}
            className="p-3 float-right"
            render={renderProps => (
                <button onClick={renderProps.onClick} className="m-2 align-middle loginBtn loginBtn--facebook">Facebook</button>
            )} />*/
  }
}
