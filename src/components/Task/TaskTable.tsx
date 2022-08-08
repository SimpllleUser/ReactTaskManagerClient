import React, { useState } from "react";
import { Button, Modal, Popconfirm, Space, Table, Tooltip } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Task, Option } from "../../types";
import TaskForm from "./TaskForm";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, getTaskById } from "../../store/task/actions";
import { TaskRootState } from "../../store/task/reducer";
import Taskdetail from "./TaskDetail";
import OptionLabel from "../OptionLabel";

const TaskTable: React.FC<{ tasks: Task[] }> = ({ tasks }) => {
  const dispatch = useDispatch();

  const [taskModalForm, setTaskModalForm] = useState(false);
  const [taskModalDetail, setTaskModalDetail] = useState(false);
  const [currentTask, setCurrentTask] = useState<Task | null>(null);
  const [currentTaskId, setCurrentTaskId] = useState<number>(NaN);
  const tasksDetail = useSelector((store: TaskRootState) => store.task.tasksDetail);

  const onEditTask = (id: number) => {
    const selectedTask = tasks.find((task: Task) => task.id === id) || null;
    setCurrentTask(selectedTask);
    setTaskModalForm(true);
  };
  const onDeleteTask = (task: Task) => {
    dispatch(deleteTask(task));
  };
  const onShowDetail = (id: number) => {
    if (!tasksDetail[id]) dispatch(getTaskById(id))
    setCurrentTaskId(id)
  }

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (id: number) => <Button type="link" onClick={() => onShowDetail(id)} >{id}</Button>,
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (title: string, task: Task) => <Button type="link" onClick={() => onShowDetail(task.id)}>{title}</Button>,
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
      render: (option: Option) => <OptionLabel option={option} />,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (option: Option) => <OptionLabel option={option} />,
    },
    {
      title: "Priority",
      dataIndex: "priority",
      key: "Priority",
      render: (option: Option) => <OptionLabel option={option} />,
    },
    {
      title: "Actions",
      dataIndex: "priority",
      key: "Priority",
      render: (_: Option, task: Task) => (
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
              <Button
                type="primary"
                size="small"
                icon={<DeleteOutlined key="edit" />}
              >
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
      <Modal
        title="Detail task"
        width='auto'
        visible={Boolean(currentTaskId) && Boolean(tasksDetail[currentTaskId]?.id)}
        onOk={() => setCurrentTaskId(NaN)}
        onCancel={() => setCurrentTaskId(NaN)}
        footer={null}
      >
        <Taskdetail task={tasksDetail[currentTaskId]} />
      </Modal>
      <Table dataSource={tasks} columns={columns} bordered />
    </>
  );
};

export default TaskTable;
