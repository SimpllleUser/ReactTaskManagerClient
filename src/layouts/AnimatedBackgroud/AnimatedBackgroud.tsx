import React from 'react';
import './AnimatedBackgroud.css';


const AnimatedBackgroud: React.FC = ({ children }) => {


    return <div>   <div className="context">
        {children}
    </div>


        <div className="area" >
            <ul className="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    </div>;
};

export default AnimatedBackgroud;

