import React, {useContext, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

// import {getMe} from '../store/users/actions';
// import {AuthContext} from "../context/AuthContext";
// import {AuthState} from "../store/auth/reducer";
import {usersState} from "../store/users/reducer";
import {Button} from "antd";
import ProjectForm from "../components/Project/ProjectForm";
import {User} from "../interfaces";

const Projects: React.FC = ({ ...value }): any => {

    const currentUser: User = useSelector((state: any) => state.users).currentUser;
    const authorId = currentUser.id;
    const isModalVisible = true;
    // useEffect(() => {
    //     if (!userState) return;
    //     dispatch(getMe());
    // }, [authState]);

    return(<div className='home-page'>
        <h1>Projects page<Button type="primary">Create</Button></h1>
        <ProjectForm isModalVisible={isModalVisible} authorId={authorId} />
    </div> )
};

export default Projects;
