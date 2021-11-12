import React, {useState} from 'react';
import {Form, Input, Button, Checkbox, Modal} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {signIn} from "../store/auth/actions";
import {AuthState} from "../store/auth/reducer";

const Auth: React.FC = () => {
    const dispatch = useDispatch();
    const [auth, setAuth] = useState({
        email: '',
        password: '',
    });
    const userSignIn = () => {
      dispatch(signIn(auth));
    }

    return <div className='authorization-page'>
        <Modal title="Authorization" visible={true} footer={null} closable={false}>
            <Form
                initialValues={{remember: true}}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{required: true, message: 'Please input your username!'}]}
                >
                    <Input value={auth.email}
                           onChange={({target}) => {
                               setAuth({...auth, email: target.value});
                           }}/>
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{required: true, message: 'Please input your password!'}]}
                >
                    <Input.Password onChange={({target}) => {
                        setAuth({...auth, password: target.value});
                    }}/>
                </Form.Item>

                <Form.Item wrapperCol={{offset: 20}}>
                    <Button type="primary" onClick={userSignIn}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Modal>

    </div>
};

export default Auth;
