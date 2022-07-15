import {
  Button,
  Col,
  Form,
  FormInstance,
  Input,
  Row,
} from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AuthRootState } from '../../store/auth/reducer';
import { createProject } from '../../store/project/actions';
import { Project, ProjectCreateParams } from '../../types';
const { TextArea } = Input;

const ProjectForm: React.FC<{ project: Project | null, sendFormData: () => void }> = ({
  project,
  sendFormData }) => {
  const dispatch = useDispatch();
  const authorId: number = useSelector((store: AuthRootState) => store.auth.userActive?.id);
  const projectDefault: ProjectCreateParams = { ...project, authorId, title: '', description: '' };
  const [form]: [FormInstance<any>] = Form.useForm();
  form.setFieldsValue(projectDefault)
  const onCreateProject = (values: any) => {
    dispatch(createProject({ ...values, authorId }));
    sendFormData();
  };

  return (
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
          message: 'Please input project title',
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
        message: 'Please input project title',
      },
      {
        min: 10,
        message: 'Min length 10',
      }
      ]}>
        <TextArea />
      </Form.Item>
      <Form.Item>
        <Row>
          <Col span={24} style={{ textAlign: 'right' }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </Form.Item>
    </Form>
  );
};

export default ProjectForm;