import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProjectsByAuthor } from '../store/project/actions';
import { ProjectRootState } from '../store/project/reducer';

const Home: React.FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        console.log('!');
        dispatch(getProjectsByAuthor(1))
    }, []);
    
    const projects = useSelector((state: ProjectRootState) => state.project.projects);
    return (<div className='home-page'>
        <h1>Home page</h1>
        { JSON.stringify(projects, null, 4) }
    </div>);
}

export default Home;
