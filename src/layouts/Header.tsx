import {Button, PageHeader} from 'antd';
import React from 'react';
import {logOut} from "../store/auth/actions";
import {useDispatch} from "react-redux";

const Header: React.FC<any> = () => {
    const dispatch = useDispatch();
    const userLogOut = () => {
        dispatch(logOut());
    }

    return (<div className='header-layout'>
        <PageHeader
            ghost={false}
            title="My task manager"
            extra={[
                <Button key="1" type="primary" danger onClick={() => userLogOut()}>
                    Logout
                </Button>,
            ]}
            style={{backgroundColor: 'var(--antd-wave-shadow-color)'}}
        >
        </PageHeader>
    </div>)
};

export default Header;
