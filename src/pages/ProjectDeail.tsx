import { Card } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import TaskTable from '../components/Task/TaskTable';
import { getProjectById } from '../store/project/actions';
import { ProjectRootState } from '../store/project/reducer';
const { Meta } = Card;

const ProjectDetail: React.FC = () => {
    const { id }: { id: string } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProjectById(Number(id)))
    }, []);
    const {
        title = '',
        description = '',
        tasks = [],
    } = useSelector(
        (store: ProjectRootState) => store.project.projectsDetail[Number(id)] || '',
    );

    return (<>
        <Card >
            <Meta title={title} description={description} />
        </Card>
        <TaskTable tasks={tasks} />
    </>);
}

export default ProjectDetail;
