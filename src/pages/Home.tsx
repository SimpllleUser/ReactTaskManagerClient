import { Button, Col, Modal, Row } from 'antd';
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
    return (<div className='home-page' style={{ padding: '12px' }}>
        <div style={{ padding: '12px' }}>
        <Row justify="space-around" align="middle">
            <Col span={6}>
                <div>Home page</div>
            </Col>
            <Col span={6}>
                <Button type="primary" onClick={showModal}>
                    Create project
                </Button>
            </Col>
        </Row>
        </div>
        <div style={{
            display: 'flex',
            justifyContent: 'flex-start',
            flexWrap: 'wrap'
        }}>
            {projects.map((project) => {
                return <ProjectCard key={project.id} project={project} />;
            })}
        </div>

        <Modal
            title="Projetc form"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
        >
            <ProjectForm project={null} sendFormData={handleCancel} />
        </Modal>
    </div >);
}

export default Home;
