import React from 'react';
import { Card } from 'antd';
import { Project } from '../../types';
const { Meta } = Card;

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (<Card
    hoverable
    style={{ minWidth: '300px' }}
>
    <Meta title={project.title} description={project.description} />
</Card>)

export default ProjectCard;
