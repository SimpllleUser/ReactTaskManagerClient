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
        title: 'Date created',
        dataIndex: 'createdAt',
        key: 'createdAt',
    },
    {
        title: 'Date updated',
        dataIndex: 'updatedAt',
        key: 'updatedAt',
    },

];

const TaskTable: React.FC<{ tasks: Task[] }> = ({ tasks }) => (<>
    <Table dataSource={tasks} columns={columns} bordered />
</>);

export default TaskTable;
