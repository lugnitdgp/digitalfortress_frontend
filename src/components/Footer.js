import React from 'react';
import logo from '../images/glug.png';
import nit from '../images/nit.svg';

export default () => {
    return <div className="bg-transparent p-3" style={{position: "fixed", bottom: "0%", left: "50%", transform: "translateX(-50%)"}}>
        <span className="text-center mx-auto d-block text-white"><b>Designed and Developed by</b> GNU/Linux Users Group, NIT Durgapur</span>
        <div className="row justify-content-center">
            <img src={logo} alt="GLUG" height="50" className="m-2" />
            <img src={nit} alt="GLUG" height="50" className="m-2" />
        </div>
    </div>
}