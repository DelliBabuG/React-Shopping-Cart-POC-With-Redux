/* Package JSON Import will be here */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal, Input, Button, message } from "antd";
import { UserOutlined } from '@ant-design/icons';
/* Package JSON Import will be here */

/* Project Import will be here */
import { userLogin } from "../../store/reducers/userReducer";
/* Project Import will be here */

const UserName = () => {

    const [userName, setUserName] = useState("")

    const dispatch = useDispatch();

    const onLogin = () => {
        if (userName !== "") {
            /* Action method dispatch */
            dispatch(userLogin(userName))
        }
        else {
            message.error('This is an error message');
        }
    }

    return (
        <Modal
            visible={true}
            title="User Login"
            footer={null}
            centered
        >
            <Input
                placeholder="Enter your username"
                prefix={<UserOutlined className="site-form-item-icon" />}
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />

            <div className="p-20 text-center">
                <Button
                    className="login-btn"
                    type="primary"
                    onClick={onLogin}
                >
                    Login
                </Button>
            </div>
        </Modal>
    );
}

export default UserName;
