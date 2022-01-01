import React from 'react';
import logo from '../images/aarhnLogo.png';
import Glogo from '../images/glug.png';
//import nit from '../images/Arhn.png';
//import nit2 from '../images/arhn.png';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

export default () => {
    return <div className="bg-transparent">
        <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
            <div style={{color:"#fff", margin:"6px auto", textAlign:"center", maxWidth:"65%"}}><h5 className="foottxt">Created by GNU/Linux Users' Group</h5></div>
            <div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
            <a href="https://www.facebook.com/nitdgplug"><FacebookIcon style={{fontSize: "30px", color:"#fff"}}/></a>
            &nbsp;
            <a href="https://github.com/lugnitdgp/"><GitHubIcon style={{fontSize: "30px", color:"#fff"}} /></a>
            {/* <a href="https://arhn.co.in/">

            <img src={logo} alt="GLUG" height="30"  className="m-2" />
            </a> */}
            <a href="https://nitdgplug.org/">

            <img src={Glogo} alt="GLUG" height="30"  className="m-2" />
            </a>
            <a href="https://www.linkedin.com/company/lugnitdgp/mycompany/"><LinkedInIcon style={{fontSize: "30px", color:"#fff"}}/></a>
            &nbsp;
            <a href="https://www.instagram.com/nitdgplug/"><InstagramIcon style={{fontSize: "30px", color:"#fff"}} /></a>
            </div>
            {/* <img src={nit2} alt="GLUG" height="70" className="m-2" /> */}
        </div>
    </div>
}
