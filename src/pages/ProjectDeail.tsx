import { Button, Card, Modal, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { EditOutlined } from '@ant-design/icons';
import ProjectForm from '../components/Project/ProjectForm';
import TaskTable from '../components/Task/TaskTable';
import { getProjectById } from '../store/project/actions';
import { ProjectRootState } from '../store/project/reducer';
const { Meta } = Card;

const ProjectDetail: React.FC = () => {
    const { id }: { id: string } = useParams();
    const dispatch = useDispatch();
    const [isModalVisible, setIsModalVisible] = useState(false);
    useEffect(() => {
        dispatch(getProjectById(Number(id)))
    }, []);
    const project = useSelector(
        (store: ProjectRootState) => store.project.projectsDetail[Number(id)] || '',
    );

    const { title = '',
        description = '',
        tasks = [], } = project;

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (<>
        <Card actions={
            [
                <EditOutlined
                    key="edit"
                    onClick={showModal} />
            ]
        }>
            <Meta title={title} description={description} />
        </Card>
        <Row>
            <Modal
                title="Projetc form"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
            >
                <ProjectForm
                    project={project}
                    sendFormData={handleCancel} />
            </Modal>
        </Row>
        <TaskTable tasks={tasks} />
    </>);
}

export default ProjectDetail;
