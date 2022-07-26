import { Button, PageHeader } from "antd";
import React from "react";
import { logOut } from "../store/auth/actions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Header: React.FC<any> = () => {
  const dispatch = useDispatch();
  const userLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div className="header-layout">
      <PageHeader
        ghost={false}
        title={
          <Button type="primary">
            <Link to="/" color="red">
              <b> My task manager </b>
            </Link>
          </Button>
        }
        extra={[
          <Button key="1" type="primary" danger onClick={() => userLogOut()}>
            Logout
          </Button>,
        ]}
        style={{ backgroundColor: "var(--antd-wave-shadow-color)" }}
      ></PageHeader>
    </div>
  );
};

export default Header;
