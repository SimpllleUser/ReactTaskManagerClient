import React, {useEffect, useState} from 'react';
import {Button, Form, Input, Modal} from "antd";
import TextArea from "antd/es/input/TextArea";
import {useDispatch} from "react-redux";
import {createProject} from "../../store/projects/actions";

const ProjectForm: React.FC<any> = ({isModalVisible, authorId, setVisibleModal}: { isModalVisible: boolean, authorId: number, setVisibleModal: any }) => {
    const dispatch = useDispatch();

    const title = 'Project form'
    const projectFormModelBaseState = {
        authorId,
        title: '',
        description: '',
    };
    const [projectFormModel, setProjectFormModel] = useState({...projectFormModelBaseState});
    const resetProjectFormModelBaseState = () => setProjectFormModel({...projectFormModel, title: '', description: ''});
    const isValidForm = (): boolean => Object.values(projectFormModel).every((value) => `${value}`.trim().length);
    const closeModal = () => setVisibleModal(false);

    useEffect(() => {
        if (!authorId) return;
        setProjectFormModel({ ...projectFormModelBaseState, authorId });
    }, [authorId]);

    const createProjectHandler = (): string => {
        if (!isValidForm()) return 'NOT VALID FORM'
        dispatch(createProject(projectFormModel));
        closeModal();
        return 'SEND PROJECT PARAMS'
    }


    return (
        <Modal title={title} visible={isModalVisible} onCancel={closeModal}
               footer={[
                   <Button key="create" type="primary" onClick={createProjectHandler}>
                       Create
                   </Button>,
                   <Button key="cancel" danger type="primary" onClick={() => {
                       resetProjectFormModelBaseState();
                       closeModal();
                   }}>
                       Cancel
                   </Button>,

               ]}>
            <Form
                name="basic"
                initialValues={{remember: true}}

                autoComplete="off"
            >
                <Form.Item
                    label="Title"
                    name="project-title"
                    rules={[{required: true, message: 'Please input your project title!'}]}
                >
                    <Input value={projectFormModel.title}
                           onChange={({target}) => {
                               setProjectFormModel({...projectFormModel, title: target.value});
                           }}/>
                </Form.Item>

                <Form.Item
                    label="Description"
                    name="project-description"
                    rules={[{required: true, message: 'Please input your project description!'}]}
                >
                    <TextArea value={projectFormModel.description}
                              onChange={({target}) => {
                                  setProjectFormModel({...projectFormModel, description: target.value});
                              }}/>
                </Form.Item>
            </Form>
        </Modal>
    )
};

export default ProjectForm;
