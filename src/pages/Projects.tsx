import React, {useContext, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

// import {getMe} from '../store/users/actions';
// import {AuthContext} from "../context/AuthContext";
// import {AuthState} from "../store/auth/reducer";
import {usersState} from "../store/users/reducer";

const Projects: React.FC = ({ ...value }): any => {

    const userState: usersState = useSelector((state: any) => state.users);
    // useEffect(() => {
    //     if (!userState) return;
    //     dispatch(getMe());
    // }, [authState]);

    return(<div className='home-page'>
        <h1>Projects page</h1>
    </div> )
};

export default Projects;
