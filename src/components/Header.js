/* Package JSON Import will be here */
import React from "react";
import { useSelector } from "react-redux";
import { Row, Col, PageHeader, Avatar, Badge, Space } from "antd";
import { ShoppingCartOutlined } from '@ant-design/icons';
/* Package JSON Import will be here */

const Header = () => {
    const cart = useSelector(state => state.cart);
    const user = useSelector(state => state.user);

    return (
        <Row className="header-background-color">
            <Col span={18}>
                <PageHeader
                    className="site-page-header"
                    onBack={() => null}
                    title="Product List Page"
                    subTitle="(View products and add new products)"
                />
            </Col>
            <Col span={6} className="text-center">
                <div className="mt-20">
                    <Space size="large">
                        <Badge count={cart.data.length} showZero>
                            <ShoppingCartOutlined className="cart-icon" />
                        </Badge>

                        <div className="flex">
                            <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>{user.userName.charAt(0)}</Avatar>
                            <h2 className="ml-10 user-name">{user.userName}</h2>
                        </div>
                    </Space>
                </div>
            </Col>
        </Row >
    );
}

export default Header;
