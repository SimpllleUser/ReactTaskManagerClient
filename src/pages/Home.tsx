import React, { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getMe} from "../store/users/actions";
import {AuthState} from "../store/auth/reducer";

const Home: React.FC = () => {
    const dispatch = useDispatch();
    const authState = useSelector(({ auth }: AuthState) => auth);
    useEffect(() => {
       if (authState.token.length) dispatch(getMe());
    }, [authState]);


    return(<div className='home-page'>
        <h1>Home page</h1>
    </div> )
};

export default Home;
