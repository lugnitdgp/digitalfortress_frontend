import React from "react"
import { navigate } from "gatsby"
import GitHubLogin from 'github-login';
import axios from "axios"
import "../styles/social.css"

export default class GitHubSignin extends React.Component {
  constructor(props) {
    super(props)
  }

  setData(res) {
    localStorage.email = res.data.user.email
    localStorage.image = res.data.user.imageLink
    localStorage.name = res.data.user.first_name
    localStorage.token = res.data.token
    navigate("/dashboard/")
  }

  MyFacebookButton = ({ onClick }) => (
    <div className="social-btns">
      <button className="btn facebook" onClick={onClick}>
        <i className="fa fa-facebook" />
      </button>
    </div>
  )

  onFailure = response => {
      console.log(response.code)
  }

  componentDidMount() {
    let params = new URLSearchParams(document.location.search.substring(1));
    let code = params.get("code");
    //var code = "" + window.location.href.match(/?code=(.*)/) && window.location.href.match(/?code=(.*)/)[1];
    if (code) {
      
      console.log(code);
      var self = this
      axios
        .post(
          `${process.env.GATSBY_API_URL}quiz/auth/register`,
          {
            // accesstoken: resp.accessToken,
            // expiration_time: `${resp.data_access_expiration_time}`,
            // userID: resp.id,
            type: "2",
            accesscode: code
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then(function(res) {
          console.log(res)
          if (res.data.status != 402) {
            self.setData(res)
            
          }
          else {
            axios
              .post(
                `${process.env.GATSBY_API_URL}quiz/auth/login`,
                {
                  // accesstoken: response.accessToken,
                  // expiration_time: `${response.data_access_expiration_time}`,
                  // userID: response.id,
                  type: "2",
                  accesscode: code
                },
                {
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              )
              .then(resValue => {
                localStorage.email = resValue.data.user.email
    localStorage.image = resValue.data.user.imageLink
    localStorage.name = resValue.data.user.first_name
    localStorage.token = resValue.data.token
  
                navigate("/dashboard/")
              })
          }
        })
    }

  }
  // authenticate() {
  //   var self = this
    
   
   
  //   // axios
  //   //   .post(
  //   //       `https://github.com/login/oauth/access_token`,
  //   //       {
  //   //           client_id: "",
  //   //           client_secret: "",
  //   //           code: response.code,
  //   //           redirect_uri: "http://localhost:5000/"
  //   //       },
  //   //     //   {
  //   //     //     headers: {
  //   //     //       "Content-Type": "application/json",
  //   //     //     },
  //   //     //   }
  //   //   )
  //   //   .then(function(resp) {
  //   //   axios
  //   //   .get(
  //   //       `https://api.github.com/user`,
  //   //       {
  //   //         headers: {
  //   //           "Authorization": `token ${response.access_token}`,
  //   //         },
  //   //       }
  //   //   )
  //     .then(function(response) {
  //       console.log(response);
  //       axios
  //       .post(
  //         `${process.env.GATSBY_API_URL}quiz/auth/register`,
  //         {
  //           // accesstoken: resp.accessToken,
  //           // expiration_time: `${resp.data_access_expiration_time}`,
  //           // userID: resp.id,
  //           type: "2",
  //           accesscode: response.code
  //         },
  //         {
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       )
  //       .then(function(res) {
  //         console.log(res)
  //         if (res.data.status != 402) self.setData(res)
  //         else {
  //           axios
  //             .post(
  //               `${process.env.GATSBY_API_URL}quiz/auth/login`,
  //               {
  //                 // accesstoken: response.accessToken,
  //                 // expiration_time: `${response.data_access_expiration_time}`,
  //                 // userID: response.id,
  //                 type: "2",
  //                 accesscode: response.code
  //               },
  //               {
  //                 headers: {
  //                   "Content-Type": "application/json",
  //                 },
  //               }
  //             )
  //             .then(resValue => {
  //               localStorage.token = resValue.data.token
  //               localStorage.email = resValue.data.user.email
  //               localStorage.name = resValue.data.user.first_name
  //               localStorage.image = resValue.data.user.imageLink
  
  //               navigate("/dashboard/")
  //             })
  //         }
  //       })
  //   //   }
  //   })
    
  //   // Api call to server so we can validate the token
  // }

  render() {
    return (
    //   <FacebookAuth
    //     appId={process.env.GATSBY_FACEBOOK_APPID}
    //     callback={this.authenticate}
    //     component={this.MyFacebookButton}
    //   />
      // <GitHubLogin 
      // clientId=""
      // onSuccess={this.authenticate}
      // onFailure={this.onFailure}
      // valid={true}
      // redirectUri="http://localhost:5000/"
      // />
      
        <div className="social-btns"><a href={`https://github.com/login/oauth/authorize?client_id=662de834d46fdb1ecae7&scope=user&redirect_uri=https://df.nitdgplug.org/`}><button className="btn github"><i className="fa fa-github" /></button></a></div>
      
    )

  }
}
