import { Button, Col, Modal, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { PlusOutlined, EditOutlined } from '@ant-design/icons';
import ProjectForm from '../components/Project/ProjectForm';
import TaskTable from '../components/Task/TaskTable';
import { getProjectById } from '../store/project/actions';
import { ProjectRootState } from '../store/project/reducer';
import TaskForm from '../components/Task/TaskForm';
// import { getTaskById } from '../store/task/actions';
// import { TaskRootState } from '../store/task/reducer';

const ProjectDetail: React.FC = () => {
    const { id }: { id: string } = useParams();
    const dispatch = useDispatch();
    const [projectModalForm, setProjectModalForm] = useState(false);
    const [taskModalForm, setTasktModalForm] = useState(false);
    useEffect(() => {
        dispatch(getProjectById(Number(id)))
        // dispatch(getTaskById(1))
    }, []);
    const project = useSelector(
        (store: ProjectRootState) => store.project.projectsDetail[Number(id)] || '',
    );
    // const task = useSelector(
    //     (store: TaskRootState) => store.task.tasksDetail[Number(1)] || '',
    // );

    const { title = '',
        description = '',
        status = { id: 9999, name: '' },
        tasks = [], } = project;

    return (<>
        <Row justify="space-around" align="middle" style={{ padding: '12px 0px' }}>
            <Col span={4}><b>{title}</b></Col>
            <Col span={4}>{description}</Col>
            <Col span={4}>{status?.name}</Col>
            <Col span={4}>
                <Button
                    type="primary"
                    onClick={() => setProjectModalForm(true)}
                    icon={
                        <EditOutlined key="edit" />
                    } >Edit</Button>
                <Button
                    type="primary"
                    icon={
                        <PlusOutlined />
                    }
                    onClick={() => setTasktModalForm(true)} >Task</Button>
            </Col>
        </Row>
        <Row>
            <Modal
                title="Projetc form"
                visible={projectModalForm}
                onOk={() => setProjectModalForm(false)}
                onCancel={() => setProjectModalForm(false)}
                footer={null}
            >
                <ProjectForm
                    project={project}
                    sendFormData={() => setProjectModalForm(false)} />
            </Modal>
            <Modal
                title="Task form"
                visible={taskModalForm}
                onOk={() => setTasktModalForm(false)}
                onCancel={() => setTasktModalForm(false)}
                footer={null}
            >
                <TaskForm
                    task={null}
                    sendFormData={() => setTasktModalForm(false)} />
            </Modal>
        </Row>
        <TaskTable tasks={tasks} />
    </>);
}

export default ProjectDetail;
