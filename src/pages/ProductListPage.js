/* Package JSON Import will be here */
import React from "react";
/* Package JSON Import will be here */

/* Project Import will be here */
import Header from "../components/Header";
import ProductList from "../components/product/ProductList";
/* Project Import will be here */

const ProductListPage = () => {
    return (
        <React.Fragment>
            {/* Header section */}
            <Header />

            {/* Body section */}
            <div className="p-20">
                <ProductList />
            </div>
        </React.Fragment>
    );
}

export default ProductListPage;
