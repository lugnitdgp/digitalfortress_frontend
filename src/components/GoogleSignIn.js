import React from 'react';
import GoogleLogin from 'react-google-login';
import '../custom.css'
import axios from 'axios';
import { navigate } from "gatsby";

export default class GoogleSignIn extends React.Component {
  constructor(props) {
    super(props)
    this.setData = this.setData.bind(this)
  }

  registerUser(idToken) {
    axios.post(`${process.env.GATSBY_API_URL}quiz/auth/register`, {
      "accesstoken": idToken,
      "type": "1"
    }, {
      headers: {
        "Content-Type": "application/json"
      }
    }).then((res) => {
      if (res.data.status == 402) {
        axios.post(`${process.env.GATSBY_API_URL}quiz/auth/login`, {
          "accesstoken": idToken,
          "type": "1"
        }, {
          headers: {
            "Content-Type": "application/json"
          }
        }).then((res) => {
          localStorage.token = res.data.token;
          navigate("/dashboard/")
        }).catch((res) => console.log(res))
      } else {
        console.log("User registered successfully");
        localStorage.token = res.data.token;
        navigate("/dashboard/")
      }
    })
  }

  componentDidMount() {
    if (localStorage.email) {
      navigate("/dashboard/")
    }
  }

  setData(res) {
    console.log(res.tokenId)
    this.registerUser(res.tokenId)
    localStorage.email = res.profileObj.email;
    localStorage.image = res.profileObj.imageUrl;
    localStorage.name = res.profileObj.name;

  }
  MyGoogleButton = ({ onClick }) => (
        
    <button onClick={onClick} className="m-2 align-middle loginBtn loginBtn--google">
        GOOGLE+
    </button>
    
   );


  render() {
    return <GoogleLogin
      clientId={process.env.GATSBY_GOOGLE_LOGIN_CLIENT_ID}
      //buttonText="GOOGLE+"
      
      onSuccess={(res) => { this.setData(res) }}
      onFailure={(res) => { console.log(res) }}
      cookiePolicy={'single_host_origin'}
      className={this.props.className}
    />;
  }
}
