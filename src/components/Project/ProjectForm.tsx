import {
  Button,
  Col,
  Form,
  FormInstance,
  Input,
  Row,
  Select,
} from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AuthRootState } from '../../store/auth/reducer';
import { createProject, getProjectStatuses, updatedProject } from '../../store/project/actions';
import { ProjectRootState } from '../../store/project/reducer';
import { Project, ProjectCreateParams, Option } from '../../types';
const { TextArea } = Input;

const ProjectForm: React.FC<{ project: Project | null, sendFormData: () => void }> = ({
  project,
  sendFormData,
}) => {
  const dispatch = useDispatch();
  const userActive = useSelector((store: AuthRootState) => store.auth.userActive);
  const authorId = project?.authorId || userActive.id;
  const projectDefault: ProjectCreateParams | null = project;
  const isEditMode = Boolean(project?.id);
  const [form]: [FormInstance<any>] = Form.useForm();
  const statuses = useSelector((store: ProjectRootState) => store.project.statuses || []);
  const onActiveSelectStatus = () => !statuses?.length && dispatch(getProjectStatuses());
  form.setFieldsValue(projectDefault);
  const onCreateProject = (values: any) => {
    const params = { authorId, ...project, ...values };
    const action = isEditMode ? updatedProject : createProject;
    dispatch(action(params));
    sendFormData();
  };

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
      <Form.Item name="statusId" label="Status" rules={[{
        required: true,
        message: 'Please select project status',
      }]}>
        <Select
          onFocus={onActiveSelectStatus}
        >
          {statuses.map(
            (status: Option) => <Select.Option
              key={status.id}
              value={status.id
              }>{status.name}</Select.Option>,
          )}
        </Select>
      </Form.Item>
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

export default ProjectForm;