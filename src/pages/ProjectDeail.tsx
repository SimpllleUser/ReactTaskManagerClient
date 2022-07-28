import { Button, Col, Modal, Row, Space, Collapse  } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { PlusOutlined, EditOutlined } from "@ant-design/icons";
import ProjectForm from "../components/Project/ProjectForm";
import TaskTable from "../components/Task/TaskTable";
import { getProjectById } from "../store/project/actions";
import { ProjectRootState } from "../store/project/reducer";
import TaskForm from "../components/Task/TaskForm";
import { getTasksByProjectId } from "../store/task/actions";
import { TaskRootState } from "../store/task/reducer";
import UserTable from "../components/User/UserTable";

const { Panel } = Collapse;

const ProjectDetail: React.FC = () => {
  const { id }: { id: string } = useParams();
  const dispatch = useDispatch();
  const [projectModalForm, setProjectModalForm] = useState(false);
  const [taskModalForm, setTasktModalForm] = useState(false);
  useEffect(() => {
    dispatch(getProjectById(Number(id)));
    dispatch(getTasksByProjectId(Number(id)));
  }, []);
  const project = useSelector(
    (store: ProjectRootState) => store.project.projectsDetail[Number(id)] || ""
  );
  const tasks = useSelector(
    (store: TaskRootState) => store.task.tasksByProject[Number(id)] || ""
  );

  const {
    title = "",
    description = "",
    status = { id: 9999, name: "" },
  } = project;

  return (
    <>
      <Row
        justify="space-around"
        align="middle"
        style={{ padding: "12px 0px" }}
      >
        <Col span={4}>
          <b>{title}</b>
        </Col>
        <Col span={4}>{description}</Col>
        <Col span={4}>{status?.name}</Col>
        <Col span={4}>
          <Space size="small">
            <Button
              type="primary"
              size="small"
              onClick={() => setProjectModalForm(true)}
              icon={<EditOutlined key="edit" />}
            >
              Edit
            </Button>
            <Button
              type="primary"
              size="small"
              icon={<PlusOutlined />}
              onClick={() => setTasktModalForm(true)}
            >
              Task
            </Button>
          </Space>
        </Col>
      </Row>
      <Collapse accordion>
      <Panel header="Team" key="1">
        <UserTable projectId={project.id} users={project.team} ></UserTable>
      </Panel>
    </Collapse>
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
            sendFormData={() => setProjectModalForm(false)}
          />
        </Modal>
        <Modal
          title="Task form"
          visible={taskModalForm}
          onOk={() => setTasktModalForm(false)}
          onCancel={() => setTasktModalForm(false)}
          footer={null}
        >
          <TaskForm
            projectId={project.id}
            task={null}
            sendFormData={() => setTasktModalForm(false)}
          />
        </Modal>
      </Row>
      <TaskTable tasks={tasks} />
    </>
  );
};

export default ProjectDetail;
