import { Button, Col, Form, FormInstance, Input, Row } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthRootState } from "../../store/auth/reducer";
import {
  createProject,
  updatedProject,
} from "../../store/project/actions";
import { ProjectRootState } from "../../store/project/reducer";
import { ProjectBase, ProjectCreateParams } from "../../types";
import FormSelectorGlobal from "../FormSelectorGlobal";

import validationRules from '../../utils/validation-rules';

const { TextArea } = Input;


const ProjectForm: React.FC<{
  project: ProjectBase | null;
  sendFormData: () => void;
}> = ({ project, sendFormData }) => {
  const dispatch = useDispatch();
  const userActive = useSelector(
    (store: AuthRootState) => store.auth.userActive
  );
  const authorId = project?.authorId || userActive.id;
  const projectDefault: ProjectCreateParams | null = {
    title: project?.title || "",
    description: project?.description || "",
    statusId: project?.statusId || NaN,
    authorId: project?.authorId || NaN,
  };
  const isEditMode = Boolean(project?.id);
  const [form]: [FormInstance<any>] = Form.useForm();
  const statuses = useSelector(
    (store: ProjectRootState) => store.project.statuses
  );

  form.setFieldsValue({ status: project?.status });
  const onCreateProject = (values: any) => {
    const params = { authorId, ...project, ...values };
    const action = isEditMode ? updatedProject : createProject;
    dispatch(action(params));
    sendFormData();
  };
  const setStatus = (value: number) => {
    value && form.setFieldsValue({ statusId: value });
  };

  useEffect(() => {
    project?.id && form.setFieldsValue(projectDefault);
  });

  return (
    <>
      <Form form={form} layout="horizontal" onFinish={onCreateProject}>
        <Form.Item
          name="title"
          label="Title"
          rules={validationRules.projectForm.title}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={validationRules.projectForm.description}
        >
          <TextArea />
        </Form.Item>
        <FormSelectorGlobal
          value={project?.status || null}
          name='statusId'
          label='Status'
          domainName='project'
          entityName='status'
          selectorName='statuses'
          onSelect={setStatus}
        ></FormSelectorGlobal>
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

export default ProjectForm;
