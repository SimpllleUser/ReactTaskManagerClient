import {Button, PageHeader} from 'antd';
import React from 'react';
import {logOut} from "../store/auth/actions";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";

const Header: React.FC<any> = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const userLogOut = () => {
        dispatch(logOut());
    }

    const goTo = (url: string): void => {
        history.push(url)
    }

    return (<div className='header-layout'>
        <PageHeader
            ghost={false}
            title="My task manager"
            extra={[
                <Button key="project"  onClick={() => goTo('projects')}>Projects</Button>,
                <Button key="logout" type="primary" danger onClick={() => userLogOut()}>
                    Logout
                </Button>,
            ]}
            style={{backgroundColor: 'var(--antd-wave-shadow-color)'}}
        >
        </PageHeader>
    </div>)
};

export default Header;
