import React from "react";
import { Button, Row, Space, Table } from "antd";
import { User } from "../../types";

const UserTable: React.FC<{ users: User[] }> = ({ users }) => {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Login",
      dataIndex: "login",
      key: "login",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
  ];

  return (
    <>
    <Row>
      {/* <Modal
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
      </Modal> */}
      <Space style={{ marginBottom: 16 }}>
        <Button onClick={() => {}}>Edit</Button>
      </Space>
      </Row>
      <Table dataSource={users} columns={columns} bordered />
      
    </>
  );
};

export default UserTable;
