import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Modal } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../store/auth/actions";

const SingUp: React.FC = () => {
    const dispatch = useDispatch();
    const [auth, setAuth] = useState({
        login: '',
        name: '',
        password: '',
    });
    const userSignUp = () => {
        dispatch(signUp(auth));
    }

    return <Form
                initialValues={{ remember: true }}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your login' }]}
                >
                    <Input value={auth.login}
                        onChange={({ target }) => {
                            setAuth({ ...auth, name: target.value });
                        }} />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="name"
                    rules={[{ required: true, message: 'Please input your username' }]}
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
                    <Button type="primary" onClick={userSignUp}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
};

export default SingUp;
