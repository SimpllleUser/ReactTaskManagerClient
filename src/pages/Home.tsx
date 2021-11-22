import React, {useContext, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getMe} from '../store/users/actions';
import {AuthContext} from "../context/AuthContext";

const Home: React.FC = ({ ...value }): any => {

    return(<div className='home-page'>
        <h1>Home page</h1>
    </div> )
};

export default Home;
