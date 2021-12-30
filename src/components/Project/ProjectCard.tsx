import React from 'react';
import {Card} from "antd";
import {Project} from "../../interfaces";

const ProjectCard: React.FC<any> = ({project}: { project: Project }) => (  <Card title={project.title} style={{ width: 300 }}>
    {project.description}
</Card>);

export default ProjectCard;
