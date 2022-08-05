import {
    Button,
    Col,
    Form,
    FormInstance,
    Input,
    Row,
} from 'antd';
import React from 'react';
import { CommentCraeteParams, User } from '../types';

const CommentForm: React.FC<{
    author: User | null
    methodSubmitComment: (params: CommentCraeteParams) => void;
}> = ({
    methodSubmitComment
}) => {

        const [form]: [FormInstance<any>] = Form.useForm();
        const { TextArea } = Input;

        return (<>
            <Form form={form} layout="vertical" onFinish={methodSubmitComment}>
                <Form.Item
                    name="comment"
                    label="Comment"
                    rules={[
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