/* Package JSON Import will be here */
import React from "react";
import { Row, Col } from "antd";
import { useSelector } from "react-redux";
/* Package JSON Import will be here */

/* Project Import will be here */
import ProductListItem from "./ProductListItem";
/* Project Import will be here */


const ProductList = () => {

    const productList = useSelector(state => state.productList);

    return (
        <Row>
            {productList.map((item) => (
                <Col span={24} md={8} key={item.productId} className="p-8">
                    <ProductListItem
                        product={item}
                    />
                </Col>
            ))}
        </Row>
    );
}

export default ProductList;
