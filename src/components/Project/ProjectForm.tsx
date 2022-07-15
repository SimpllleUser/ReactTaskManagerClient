import {
  Button,

  Form,
  Input,
  Select,

} from 'antd';
import React, { useState } from 'react';
import { Project } from '../../types';
const { TextArea } = Input;

type SizeType = Parameters<typeof Form>[0]['size'];

const ProjectForm: React.FC<{ project: Project | null }> = () => {
  const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');
  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };
  const ProjectDefault = { title: '', description: '', status: 1 };
  const ProjetcDefaultState = { ...ProjectDefault, ...project };
  const [projectForm, setProjectForm] = useState(ProjetcDefaultState);

  const onUpdateInput = (filedName: string) => (
    event:
      React.ChangeEvent<HTMLInputElement> |
      React.ChangeEvent<HTMLTextAreaElement> |
      React.ChangeEvent<HTMLSelectElement>
  ) => setProjectForm({
    ...projectForm,
    [filedName]: event.target.value
  })
  const onUpdateSelect = (filedName: string) => (value: string | number) => setProjectForm({
    ...projectForm,
    [filedName]: value
  })

  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      initialValues={{ size: componentSize }}
      onValuesChange={onFormLayoutChange}
      size={componentSize as SizeType}
    >
      {JSON.stringify(projectForm)}
      <Form.Item label="Title">
        <Input
          value={projectForm.title}
          onChange={onUpdateInput('title')} />
      </Form.Item>
      <Form.Item label="Description">
        <TextArea
          value={projectForm.description}
          onChange={onUpdateInput('description')}
        />
      </Form.Item>
      <Form.Item label="Status">
        <Select onChange={onUpdateSelect('status')}>
          <Select.Option value='Demo'>Demo</Select.Option>
        </Select>
      </Form.Item>
    </Form>
  );
};

export default ProjectForm;

function project(project: any): [any, any] {
  throw new Error('Function not implemented.');
}
