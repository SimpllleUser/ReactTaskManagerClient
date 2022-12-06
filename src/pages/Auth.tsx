import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Modal } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../store/auth/actions";
import AnimatedBackgroud from '../layouts/AnimatedBackgroud/AnimatedBackgroud';

const Auth: React.FC = () => {
    const dispatch = useDispatch();
    const [auth, setAuth] = useState({
        login: '',
        password: '',
    });
    const userSignIn = () => {
        dispatch(signIn(auth));
    }

    return <AnimatedBackgroud>
        <Modal centered title="Authorization" visible={true} footer={null} closable={false}>
            <Form
                initialValues={{ remember: true }}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input value={auth.login}
                        onChange={({ target }) => {
                            setAuth({ ...auth, login: target.value });
                        }} />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password onChange={({ target }) => {
                        setAuth({ ...auth, password: target.value });
                    }} />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 20 }}>
                    <Button type="primary" onClick={userSignIn}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    </AnimatedBackgroud>
};

export default Auth;
