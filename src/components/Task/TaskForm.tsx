import { Button, Col, Form, FormInstance, Input, Row, Select } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthRootState } from "../../store/auth/reducer";
import { createTask, updatedTask } from "../../store/task/actions";
import { Task, User } from "../../types";
import FormSelectorGlobal from "../FormSelectorGlobal";

const { TextArea } = Input;

const TaskForm: React.FC<{
  task: Task | null;
  projectId: number | null;
  users: User[] | null;
  sendFormData: () => void;
}> = ({ task, projectId, users, sendFormData }) => {
  const dispatch = useDispatch();
  const userActive = useSelector(
    (store: AuthRootState) => store.auth.userActive
  );
  const authorId = task?.authorId || userActive.id;
  const taskDefault: Task | null = task;
  const isEditMode = Boolean(task?.id);
  const [form]: [FormInstance<any>] = Form.useForm();

  const onSubmit = (values: any) => {
    const { status, type, priority } = values;
    const params = {
      projectId,
      authorId,
      statusId: status,
      typeId: type,
      priorityId: priority,
      ...task,
      ...values,
    };
    const action = isEditMode ? updatedTask : createTask;
    dispatch(action(params));
    sendFormData();
  };
  const setStatus = (value: number) => {
    value && form.setFieldsValue({ statusId: value });
  };
  const setPriority = (value: number) => {
    value && form.setFieldsValue({ priorityId: value });
  };
  const setType = (value: number) => {
    value && form.setFieldsValue({ typeId: value });
  };
  useEffect(() => {
    task?.id && form.setFieldsValue({ ...taskDefault, ...task });
  }, [task]);

  return (
    <>
      <Form form={form} layout="horizontal" onFinish={onSubmit}>
        <Form.Item
          name="title"
          label="Title"
          rules={[
            {
              required: true,
              message: "Please input task title",
            },
            {
              min: 10,
              message: "Min length 5",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[
            {
              required: true,
              message: "Please input task title",
            },
            {
              min: 10,
              message: "Min length 10",
            },
          ]}
        >
          <TextArea />
        </Form.Item>

        <FormSelectorGlobal
          label="Status"
          name="statusId"
          domainName="task"
          entityName="status"
          selectorName="statuses"
          value={task?.status || null}
          onSelect={setStatus}
        />
        <FormSelectorGlobal
          label="Priority"
          name="priorityId"
          domainName="task"
          entityName="priority"
          selectorName="priorities"
          value={task?.priority || null}
          onSelect={setPriority}
        />
        <FormSelectorGlobal
          label="Type"
          name="typeId"
          domainName="task"
          entityName="type"
          selectorName="types"
          value={task?.type || null}
          onSelect={setType}
        />
        <Form.Item name="executorId" label="executor" rules={[{
          required: true,
          message: `Please select user`,
        }]}>
          <Select
          // onFocus={onActiveSelect}
          // onChange={handleChange}
          >
            {users && users?.map(
              (option: User) => <Select.Option
                key={`${option.id}-${option.name}`}
                value={option.id
                }>{option.name}</Select.Option>,
            )}
          </Select>
        </Form.Item>

        <Form.Item>
          <Row>
            <Col span={24} style={{ textAlign: "right" }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    </>
  );
};

export default TaskForm;
