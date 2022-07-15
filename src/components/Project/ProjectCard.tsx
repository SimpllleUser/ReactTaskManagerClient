import React from 'react';
import { Card } from 'antd';
import {
    DeleteOutlined
} from '@ant-design/icons';
import { Project } from '../../types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteProject } from '../../store/project/actions';
const { Meta } = Card;

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    const dispatch = useDispatch();
    return (<Card
        hoverable
        title={project.title}
        extra={[<Link to={`project/${project.id}`}>Detail</Link>]}
        actions={[<DeleteOutlined onClick={() => dispatch(deleteProject(project.id))} />]}
        style={{ minWidth: '300px' }}
    >
        <Meta description={project.description} />
    </Card>)
}

export default ProjectCard;
