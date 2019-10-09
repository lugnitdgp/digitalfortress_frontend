import React from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import '../custom.css'
import { navigate } from "gatsby";
import FacebookAuth from 'react-facebook-auth';
import axios from 'axios';
import data from '../env.json';

export default class FacebookSignIn extends React.Component {
    constructor(props) {
        super(props)
    }

    setData(res) {
        localStorage.email = res.email;
        localStorage.image = res.picture.data.url;
        localStorage.name = res.name;
        // navigate("/dashboard/")
    }

  
       MyFacebookButton = ({ onClick }) => (
        
        <button onClick={onClick} className="m-2 align-middle loginBtn loginBtn--facebook">
            FACEBOOK
        </button>
        
       );
    

    authenticate = (response) => {
        axios.post(`${data.api}quiz/auth/register`, {
            "accesstoken": response.accessToken,
            "expiration_time": `${response.data_access_expiration_time}`,
            "userID": response.id,
            "type": "2"
          }, {
            headers: {
              "Content-Type": "application/json"
            }
          }).then((res) => console.log(res))
        console.log(response.data_access_expiration_time);
        // Api call to server so we can validate the token
    };

    render() {
        return <FacebookAuth
            appId="393676568001815"
            callback={this.authenticate}
            component={this.MyFacebookButton}
        />
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
