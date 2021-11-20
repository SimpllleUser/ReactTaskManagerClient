import React, { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getMe} from "../store/users/actions";
import {usersState} from "../store/users/reducer";

const Home: React.FC = () => {
    const dispatch = useDispatch();
    // const currentUser = useSelector(({users}: { users: usersState }) => users.currentUser)
    useEffect(() => {
        dispatch(getMe());
    }, []);


    return(<div className='home-page'>
        <h1>Home page</h1>
    </div> )
};

export default Home;
