import React from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import '../custom.css'
import { navigate } from "gatsby";

export default class FacebookSignIn extends React.Component {
    constructor(props) {
        super(props)
    }
    
    setData(res) {
        localStorage.email = res.email;
        localStorage.image = res.picture.data.url;
        localStorage.name = res.name;
        navigate("/dashboard/")
    }

    render() {
        return <FacebookLogin
            appId="393676568001815"
            autoLoad={false}
            fields="name,email,picture"
            callback={(res) => { this.setData(res) }}
            className="p-3 float-right"
            render={renderProps => (
                <button onClick={renderProps.onClick} className="m-2 align-middle loginBtn loginBtn--facebook">Facebook</button>
            )} />
    }
}