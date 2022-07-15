import React from 'react';
import { Card } from 'antd';
import { Project } from '../../types';
import { Link } from 'react-router-dom';
const { Meta } = Card;

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (<Card
    hoverable
    title={project.title}
    extra={ <Link to={`project/${project.id}`}>Detail</Link>}
    style={{ minWidth: '300px' }}
>
    <Meta description={project.description} />
</Card>)

export default ProjectCard;
