import { Button, Col, Modal, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { PlusOutlined } from '@ant-design/icons';
import ProjectForm from '../components/Project/ProjectForm';
import TaskTable from '../components/Task/TaskTable';
import { getProjectById } from '../store/project/actions';
import { ProjectRootState } from '../store/project/reducer';

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
        status = { id: 9999, name: '' },
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
        {/* <Card actions={
            [
                <EditOutlined
                    key="edit"
                    onClick={showModal} />
            ]
        }>
            <Meta title={title} description={description} />
            <div>
                {status?.name}
            </div>
        </Card> */}
        <Row justify="space-around" align="middle" style={{ padding: '12px 0px' }}>
            <Col span={4}><b>{title}</b></Col>
            <Col span={4}>{description}</Col>
            <Col span={4}>{status?.name}</Col>
            <Col span={4}><Button  type="primary" icon={<PlusOutlined/>} >Task</Button></Col>
        </Row>
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
