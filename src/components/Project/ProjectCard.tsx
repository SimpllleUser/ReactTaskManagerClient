import React from 'react';
import { Card } from 'antd';
import { Project } from '../../types';
import { Link } from 'react-router-dom';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
const { Meta } = Card;

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (<Card
    hoverable
    title={project.title}
    extra={ <Link to={`project/${project.id}`}>Detail</Link>}
    actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    style={{ minWidth: '300px' }}
>
    <Meta description={project.description} />
</Card>)

export default ProjectCard;
