export const types = {
    ADD_NEW_PRODUCT: "productListReducer/addNewProduct"
};

let initialState = [
    {
        productId: 1,
        productName: "Test Product 1",
        productDesc: "This is the product description of the product 'Test Product 1', The price of the product is displayed below",
        productPrice: 200.00
    },
    {
        productId: 2,
        productName: "Test Product 2",
        productDesc: "This is the product description of the product 'Test Product 2', The price of the product is displayed below",
        productPrice: 300.00
    },
    {
        productId: 3,
        productName: "Test Product 3",
        productDesc: "This is the product description of the product 'Test Product 3', The price of the product is displayed below",
        productPrice: 400.00
    },
    {
        productId: 4,
        productName: "Test Product 4",
        productDesc: "This is the product description of the product 'Test Product 4', The price of the product is displayed below",
        productPrice: 500.00
    }
];

const productListReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.MY_COMPLAINTS_REQUEST:
            return [action.payload];
        default:
            return state;
    }
};


export default productListReducer;