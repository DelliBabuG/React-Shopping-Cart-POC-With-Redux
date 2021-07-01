/* Package JSON Import will be here */
import React from "react";
import { Row, Col, Card, Button } from "antd";
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux"
import _ from "lodash";
/* Package JSON Import will be here */

/* Project Import will be here */
import { productIncrement, productDecrement } from "../../store/reducers/cartReducer";
/* Project Import will be here */

/* Const,Let & Var will be here */
const ButtonGroup = Button.Group;
/* Const,Let & Var will be here */

const ProductList = (props) => {
    const cart = useSelector(state => state.cart);

    const dispatch = useDispatch();

    const increment = () => {
        dispatch(productIncrement(props.product.productId));
    }

    const decrement = () => {
        dispatch(productDecrement(props.product.productId));
    }

    const getSelectedQty = () => {
        const selectedProduct = _.filter(cart.data, (o) => {
            return o.productId === props.product.productId
        });

        if (selectedProduct.length > 0)
            return selectedProduct[0].qty;
        else
            return 0;
    }

    return (
        <Card
            className="ant-card-with-box-shadow"
            hoverable
            cover={<img alt="" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
        >
            <Row>
                <Col span={24} className="product-title">
                    <h3>{props.product.productName}</h3>
                </Col>
                <Col span={24}>
                    {props.product.productDesc}
                </Col>
            </Row>

            <Row className="p-12">
                <Col span={9}>
                    Price: {props.product.productPrice}
                </Col>

                <Col span={9}>
                    QTY: {getSelectedQty()}
                </Col>

                <Col span={6}>
                    <ButtonGroup>
                        <Button onClick={decrement}>
                            <MinusOutlined />
                        </Button>
                        <Button onClick={increment}>
                            <PlusOutlined />
                        </Button>
                    </ButtonGroup>
                </Col>
            </Row>
        </Card>
    );
}

export default ProductList;
