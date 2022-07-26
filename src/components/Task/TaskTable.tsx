import React, { useState } from "react";
import { Button, Modal, Popconfirm, Space, Table, Tooltip } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Task, Option } from "../../types";
import TaskForm from "./TaskForm";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../store/task/actions";

const TaskTable: React.FC<{ tasks: Task[] }> = ({ tasks }) => {
  const dispatch = useDispatch();

  const [taskModalForm, setTaskModalForm] = useState(false);
  const [currentTask, setCurrentTask] = useState<Task | null>(null);

  const onEditTask = (id: number) => {
    const selectedTask = tasks.find((task: Task) => task.id === id) || null;
    setCurrentTask(selectedTask);
    setTaskModalForm(true);
  };
  const onDeleteTask = (task: Task) => {
    dispatch(deleteTask(task));
  };
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      render: (option: Option) => option.name,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (option: Option) => option.name,
    },
    {
      title: "Priority",
      dataIndex: "priority",
      key: "Priority",
      render: (option: Option) => option.name,
    },
    {
      title: "Actions",
      dataIndex: "priority",
      key: "Priority",
      render: (priority: Option, task: Task) => (
        <>
        <Space size='small'>
          <Button
            type="primary"
            size="small"
            onClick={() => onEditTask(task.id)}
            icon={<EditOutlined key="edit" />}
          >
            Edit
          </Button>
          <Popconfirm
            title="Do you wanna delete this task ?"
            onConfirm={() => onDeleteTask(task)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="primary" size="small">
              Delete
            </Button>
          </Popconfirm>
          </Space>
        </>
      ),
    },
  ];

  return (
    <>
      <Modal
        title="Task form"
        visible={Boolean(currentTask?.id) && taskModalForm}
        onOk={() => setTaskModalForm(false)}
        onCancel={() => setTaskModalForm(false)}
        footer={null}
      >
        <TaskForm
          projectId={currentTask?.projectId || null}
          task={currentTask}
          sendFormData={() => setTaskModalForm(false)}
        />
      </Modal>
      <Table dataSource={tasks} columns={columns} bordered />
    </>
  );
};

export default TaskTable;
