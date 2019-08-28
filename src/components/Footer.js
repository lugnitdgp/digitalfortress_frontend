import React from 'react';
import logo from '../images/glug.png';
import nit from '../images/nit.svg';

export default () => {
    return <div className="bg-transparent p-3">
        <span className="text-center mx-auto d-block text-white"><b>Hosted and Created by:</b> GNU Linux Users Group, NIT Durgapur</span>
        <div className="row justify-content-center">
            <img src={logo} alt="GLUG" height="50" className="m-2" />
            <img src={nit} alt="GLUG" height="50" className="m-2" />
        </div>
    </div>
}