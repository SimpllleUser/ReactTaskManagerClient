import {
    Button,
    Col,
    Form,
    FormInstance,
    Input,
    message,
    Row,
} from 'antd';
import React from 'react';
import { CommentCraeteParams, User } from '../types';
import { useDispatch } from 'react-redux';

const CommentForm: React.FC<{
    authorId: number | null,
    projectId: number | null,
    taskId: number | null,
    methodSubmitComment: (params: CommentCraeteParams) => void;
}> = ({
    authorId,
    projectId,
    taskId,
    methodSubmitComment
}) => {

        const disaptch = useDispatch();
        const [form]: [FormInstance<any>] = Form.useForm();
        const { TextArea } = Input;
        const onFinish = () => {
            if (!projectId && !taskId) return message.error('Sytem not exist projectId or taskId !');
            disaptch(methodSubmitComment({
                authorId: authorId || 0,
                projectId: projectId || 0,
                taskId: taskId || 0,
                body: form.getFieldValue('body'),
            }));
            form.resetFields();
        };

        return (<>
            <Form form={form} layout="vertical" onFinish={onFinish}>
                <Form.Item
                    name="body"
                    label="Comment"
                    rules={[
                        {
                            required: true,
                            message: "If wou want add comment input some text",
                        },
                          {
                            min: 3,
                            message: "Min length 3",
                        },
                    ]}
                >
                    <TextArea />
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

export default CommentForm;