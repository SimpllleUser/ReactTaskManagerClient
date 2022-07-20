import React, { useState } from 'react';
import { Button, Modal, Table } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { Task, Option } from '../../types';
import TaskForm from './TaskForm';

const TaskTable: React.FC<{ tasks: Task[] }> = ({ tasks }) => {
    const [taskModalForm, setTaskModalForm] = useState(false);
    const [currentTask, setCurrentTask] = useState<Task | null>(null);
    const onEditTask = (id: number) => {
        const selectedTask = tasks.find((task: Task) => task.id === id) || null;
        console.log(selectedTask);
        setCurrentTask(selectedTask);
        setTaskModalForm(true);
    };
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
            // Type Option
            render: (_: any, value: any) => value.type.name,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            // Type Option
            render: (_: any, value: any) => value.status.name,
        },
        // {
        //     title: 'Priority',
        //     dataIndex: 'priority',
        //     key: 'Priority',
        //     // Type Option
        //     render: (_: any, value: any) => value.priority.name,
        // },
        {
            title: 'Actions',
            dataIndex: 'priority',
            key: 'Priority',
            render: (priority: Option, task: Task) => <>
            { JSON.stringify(priority, null, 4) }
                <Button
                        type="primary"
                        onClick={() => onEditTask(task.projectId)}
                        icon={
                            <EditOutlined key="edit" />
                        } >Edit</Button>
                <button>Delete</button>
            </>,
        },
    ];
    
    return  (<>
    <Modal
                title="Projetc form"
                visible={Boolean(currentTask?.id) && taskModalForm}
                onOk={() => setTaskModalForm(false)}
                onCancel={() => setTaskModalForm(false)}
                footer={null}
            >
                <h1>TEst { JSON.stringify(currentTask, null, 4) } </h1>
                <TaskForm
                    projectId={currentTask?.projectId || null}
                    task={currentTask}
                    sendFormData={() => setTaskModalForm(false)} />
            </Modal>
        <Table dataSource={tasks} columns={columns} bordered />
    </>)
};

export default TaskTable;
