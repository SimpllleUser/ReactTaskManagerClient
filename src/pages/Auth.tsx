import React, { useMemo, useState } from 'react';
import { Button, Modal, Row, Space, Tabs } from 'antd';
import AnimatedBackgroud from '../layouts/AnimatedBackgroud/AnimatedBackgroud';
import SingIn from '../components/Auth/SignIn';
import SignUp from '../components/Auth/SignUp';

const Auth: React.FC = () => {

    const [showSignIn, setShowSignIn] = useState(true);
    const titleModal = useMemo(() => `Sign ${ showSignIn ? 'in' : 'up' }` , [showSignIn]);

    return <AnimatedBackgroud>
        <Modal
            title={ <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                    type="primary"
                    block
                    size='large'
                    style={{ width: '100px' }}>
                    <b>{titleModal}</b>
                </Button>
            </div> }
            centered
            visible={true}
            footer={null}
            closable={false}>
            {showSignIn
                ? <div >
                    <SingIn />
                    <Row align='middle' justify='center'>
                        Don't have an account? <Button
                            type="link"
                            onClick={() => setShowSignIn(false)}
                        > <b>Sign up</b> </Button>
                    </Row>
                </div> : <div>
                    <SignUp />
                    <Row align='middle' justify='center'>
                        Already have an account?  <Button
                            type="link"
                            onClick={() => setShowSignIn(true)}
                        > <b>Sign In</b></Button>
                    </Row>
                </div>}

        </Modal>
    </AnimatedBackgroud>
};

export default Auth;
