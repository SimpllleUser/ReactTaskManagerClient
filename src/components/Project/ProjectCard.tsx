import React from "react";
import { Button, Card } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { ProjectBase } from "../../types";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteProject } from "../../store/project/actions";
import "../../assets/scss/project-card.scss";

const ProjectCard: React.FC<{ project: ProjectBase }> = ({ project }) => {
  const dispatch = useDispatch();
  return (
    <Card
      className="project-card"
      hoverable
      title={project.title}
      extra={[<Link to={`project/${project.id}`}>Detail</Link>]}
      style={{ minWidth: "300px" }}
    >
      <div className="project-card__description">{project.description}</div>
      <div className="project-card__actions">
      <Button
              type="primary"
              onClick={() => dispatch(deleteProject(project.id))}
              icon={<DeleteOutlined key="delete"/>}
              size='small'
            >Delete</Button>
      </div>
      {/* <Meta description={project.description} /> */}
    </Card>
  );
};

export default ProjectCard;
