import React from 'react';
import { Form, Input, Button, Checkbox, Modal } from 'antd';

const Auth: React.FC = () => {
    return  (<div className='authorization-page'>
        <Modal title="Authorization" visible={true} footer={null} closable={false}>
            <Form
                initialValues={{ remember: true }}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 20 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Modal>

    </div> )
};

export default Auth;
