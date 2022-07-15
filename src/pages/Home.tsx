import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProjectCard from '../components/Project/ProjectCard';
import { AuthRootState } from '../store/auth/reducer';
import { getProjectsByAuthor } from '../store/project/actions';
import { ProjectRootState } from '../store/project/reducer';

const Home: React.FC = () => {
    const activeUserId = useSelector((store: AuthRootState) => store.auth.userActive.id)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProjectsByAuthor(activeUserId))
    }, []);

    const projects = useSelector((state: ProjectRootState) => state.project.projects);
    return (<div className='home-page'>
        <h1>Home page</h1>
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        { projects.map((project) => {
            return <ProjectCard key={project.id} project={project} />;
        }) }
        </div>
    </div>);
}

export default Home;
