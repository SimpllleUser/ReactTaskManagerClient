import React from "react";
import { Button, Card, Popconfirm } from "antd";
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
      title={<div className="project-card__title">
        <Link to={`project/${project.id}`}>{project.title}</Link>
      </div>}
      style={{ minWidth: "300px" }}
    >
      <div className="project-card__description">{project.description}</div>
      <div className="project-card__actions">
        <Popconfirm
          title="Do you wanna delete this project ?"
          onConfirm={() => dispatch(deleteProject(project.id))}
          okText="Yes"
          cancelText="No"
        >
          <Button
            type="primary"
            size="small"
            icon={<DeleteOutlined key="edit" />}
          >
            Delete
          </Button>
        </Popconfirm>

      </div>
    </Card>
  );
};

export default ProjectCard;
