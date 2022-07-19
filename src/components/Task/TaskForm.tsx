import {
  Button,
  Col,
  Form,
  FormInstance,
  Input,
  Row,
} from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AuthRootState } from '../../store/auth/reducer';
import { createTask, updatedTask } from '../../store/task/actions';
import { Task } from '../../types';
import TaskPrioritySelector from './TaskPrioritySelector';
import TaskStatusSelector from './TaskStatusSelector';
import TaskTypeSelector from './TaskTypeSelector';
// import { ProjectBase, ProjectCreateParams, Option, Task } from '../../types';
const { TextArea } = Input;

const TaskForm: React.FC<{ task: Task | null, projectId: number, sendFormData: () => void }> = ({
  task,
  projectId,
  sendFormData,
}) => {
  const dispatch = useDispatch();
  const userActive = useSelector((store: AuthRootState) => store.auth.userActive);
  const authorId = task?.authorId || userActive.id;
  const taskDefault: Task | null = task;
  const isEditMode = Boolean(task?.id);
  const [form]: [FormInstance<any>] = Form.useForm();


  // form.setFieldsValue({ statusId: task?.status });
  const onCreateProject = (values: any) => {
    const { status, type, priority } = values;
    const params = {
      projectId,
      authorId,
      executorId: authorId,
      statusId: status, typeId: type, priorityId: priority,
      ...task,
      ...values,
    };
    console.log(params);
    const action = isEditMode ? updatedTask : createTask;
    dispatch(action(params));
    sendFormData();
  };
  const setStatus = (value: number) => { form.setFieldsValue({ statusId: value }); };
  const setPriority = (value: number) => { form.setFieldsValue({ priorityId: value }); };
  const setType = (value: number) => { form.setFieldsValue({ typeId: value }); };
  useEffect(() => {
    form.setFieldsValue(taskDefault);
  })

  return (<>
    <Form
      form={form}
      layout="horizontal"
      onFinish={onCreateProject}
    >
      <Form.Item
        name='title'
        label="Title"
        rules={[{
          required: true,
          message: 'Please input task title',
        },
        {
          min: 10,
          message: 'Min length 5',
        }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item name='description' label="Description" rules={[{
        required: true,
        message: 'Please input task title',
      },
      {
        min: 10,
        message: 'Min length 10',
      }
      ]}>
        <TextArea />
      </Form.Item>
      <TaskStatusSelector status={null} onSelectStatus={setStatus} />
      <TaskPrioritySelector priority={null} onSelectPriority={setPriority} />
      <TaskTypeSelector type={null} onSelectType={setType} />
      <Form.Item>
        <Row>
          <Col span={24} style={{ textAlign: 'right' }}>
            <Button
              type="primary"
              htmlType="submit">
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