import React from 'react';
import GoogleLogin from 'react-google-login';
import '../custom.css'
import axios from 'axios';
import { navigate } from "gatsby";
import data from '../env.json';

export default class GoogleSignIn extends React.Component {
  constructor(props) {
    super(props)
    this.setData = this.setData.bind(this)
  }

  registerUser(idToken) {
    axios.post(`${data.api}quiz/auth/register`, {
      "accesstoken": idToken,
      "type": "1"
    }, {
      headers: {
        "Content-Type": "application/json"
      }
    }).then((res) => {
      if (res.data.status == 402) {
        axios.post(`${data.api}quiz/auth/login`, {
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
      clientId="535154977870-aq118ipvnqf56418dhubf4r235m48mr3.apps.googleusercontent.com"
      //buttonText="GOOGLE+"
      
      onSuccess={(res) => { this.setData(res) }}
      onFailure={(res) => { console.log(res) }}
      cookiePolicy={'single_host_origin'}
      className={this.props.className}
    />;
  }
}
