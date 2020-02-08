import React from 'react';
import logo from '../images/glug.png';
import nit from '../images/Arhn.png';
import nit2 from '../images/arhn.png';

export default () => {
    return <div className="bg-transparent p-3">
        <span className="text-center mx-auto d-block text-white"><b>Designed and Developed by</b> GNU/Linux Users Group, NIT Durgapur</span>
        <div className="row justify-content-center">
            <img src={nit} alt="GLUG" height="90"  className="m-2" />
           
            <img src={nit2} alt="GLUG" height="80" className="m-2" />
        </div>
    </div>
}
