import { Card } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
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
    } = useSelector(
        (store: ProjectRootState) => store.project.projectsDetail[Number(id)] || '',
    );

    return (<>
        <Card >
            <Meta title={title} description={description} />
        </Card>
    </>);
}

export default ProjectDetail;
