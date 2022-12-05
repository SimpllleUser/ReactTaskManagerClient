import React, { useEffect, useState } from "react";
import { Button, Modal, Row, Space, Table, Transfer } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { User } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../store/user/actions";
import { UserRootState } from "../../store/user/reducer";
import { TransferDirection, TransferItem } from "antd/lib/transfer";
import { addUsersToProject, removeUsersFromProject } from "../../store/project/actions";

const UserTable: React.FC<{
  projectId: number;
  authorId: number;
  users: User[]
}> = ({
  projectId,
  authorId,
  users }) => {
    const dispatch = useDispatch();
    const getUser = ({ id, name }: User): TransferItem => ({ key: id.toString(), title: name });
    const allUsers = useSelector((store: UserRootState) => store.user.users);
    const transfetAllUsers: TransferItem[] = allUsers.map(getUser)?.map((user: TransferItem) => ({
      ...user,
      disabled: Number(user.key) === authorId,
    }));
    const transfetProjectUsers: TransferItem[] = users.map(getUser);
    const [teamEditModal, setTeamEditModal] = useState(false);
    const [targetKeys, setTargetKeys] = useState<any>(transfetProjectUsers.map(({ key }) => key));
    const [selectedKeys, setSelectedKeys] = useState<any>([]);

    useEffect(() => {
      if (teamEditModal) dispatch(getUsers());
    }, [teamEditModal]);

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



    const handleChange = (
      newTargetKeys: any[],
      direction: TransferDirection,
      moveKeys: string[],
    ) => {
      setTargetKeys(newTargetKeys);
      const actionsByDirection = { left: removeUsersFromProject, right: addUsersToProject };
      dispatch(actionsByDirection[direction]({ projectId, userIds: moveKeys })); // moveKeys
    };

    const handleSelectChange = (sourceSelectedKeys: string[], targetSelectedKeys: string[]) => {
      setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
    };

    return (
      <>
        <Row align='middle' justify='end'>
          <Space style={{ paddingBottom: '15px' }}>

            <Button type="primary"
             icon={<EditOutlined key="edit" />}
              size="small" onClick={() => { setTeamEditModal(true) }}>Edit</Button>
          </Space>
        </Row>
        <Row>
          <Modal
            title="Edit team"
            visible={teamEditModal}
            onOk={() => setTeamEditModal(false)}
            onCancel={() => setTeamEditModal(false)}
            footer={null}
          >
            <Transfer
              dataSource={transfetAllUsers}
              titles={['Source', 'Target']}
              targetKeys={targetKeys}
              selectedKeys={selectedKeys}
              onChange={handleChange}
              onSelectChange={handleSelectChange}
              render={(item: TransferItem) => `${item?.key}-${item?.title}` || ''}
              oneWay
              style={{ marginBottom: 16 }}
            />
          </Modal>
        </Row>
        <Table dataSource={users} columns={columns} bordered />

      </>
    );
  };

export default UserTable;
