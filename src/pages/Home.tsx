import { Button, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProjectCard from '../components/Project/ProjectCard';
import ProjectForm from '../components/Project/ProjectForm';
import { AuthRootState } from '../store/auth/reducer';
import { getProjectsByAuthor } from '../store/project/actions';
import { ProjectRootState } from '../store/project/reducer';

const Home: React.FC = () => {
    const activeUserId = useSelector((store: AuthRootState) => store.auth.userActive.id)
    const dispatch = useDispatch();
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    useEffect(() => {
        dispatch(getProjectsByAuthor(activeUserId))
    }, []);

    const projects = useSelector((state: ProjectRootState) => state.project.projects);
    return (<div className='home-page'>
        <h1>Home page</h1>
        <div style={{
            display: 'flex',
            justifyContent: 'flex-start',
            flexWrap: 'wrap'
        }}>
            {projects.map((project) => {
                return <ProjectCard key={project.id} project={project} />;
            })}
        </div>
        <Button type="primary" onClick={showModal}>
            Create project
        </Button>
        <Modal
            title="Projetc form"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            okText='Yes'
            okType='primary'
            cancelText='No'
    >
        <ProjectForm project={null} />
    </Modal>
    </div >);
}

export default Home;
