import React from 'react';
import logo from '../images/glug.png';
import nit from '../images/Arhn.png';
import nit2 from '../images/arhn.png';

export default () => {
    return <div className="bg-transparent">
        <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
            <div style={{color:"#fff", margin:"10px auto", textAlign:"center"}}><h5>Created by GNU/Linux Users' Group</h5></div>
            <img src={logo} alt="GLUG" height="50"  className="m-2" />
           
            {/* <img src={nit2} alt="GLUG" height="70" className="m-2" /> */}
        </div>
    </div>
}
