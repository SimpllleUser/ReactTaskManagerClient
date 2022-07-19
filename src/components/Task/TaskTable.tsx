import React from 'react';
import { Table } from 'antd';
import { Task } from '../../types';


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
    {
        title: 'Priority',
        dataIndex: 'priority',
        key: 'Priority',
        // Type Option
        render: (_: any, value: any) => value.priority.name,
    },
];

const TaskTable: React.FC<{ tasks: Task[] }> = ({ tasks }) => (<>
    <Table dataSource={tasks} columns={columns} bordered />
</>);

export default TaskTable;
