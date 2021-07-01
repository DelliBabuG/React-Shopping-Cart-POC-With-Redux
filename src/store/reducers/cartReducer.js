/* Package JSON Import will be here */
import _ from "lodash";
/* Package JSON Import will be here */

export const types = {
    INCREMENT_COUNT: "cartReducer/incrementProductCount",
    DECREMENT_COUNT: "cartReducer/decrementProductCount"
};

let initialState = {
    data: []
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.INCREMENT_COUNT:
            {
                /* Check the product already added in the cart */
                const selectedProduct = _.filter(state.data, (o) => {
                    return o.productId === action.payload
                });

                let localState = state.data;

                if (selectedProduct.length > 0) {
                    _.forEach(localState, (o) => {
                        if (o.productId === action.payload) {
                            o.qty = o.qty + 1;
                        }
                    });
                }
                else {
                    localState.push({
                        productId: action.payload,
                        qty: 1
                    });
                }

                return { ...state, data: localState };
            }
        case types.DECREMENT_COUNT:
            {
                /* Check the product already added in the cart */
                const selectedProduct = _.filter(state.data, (o) => {
                    return o.productId === action.payload
                });

                let localState = state.data;

                if (selectedProduct.length > 0) {
                    if (selectedProduct[0].qty > 1) {
                        _.forEach(localState, (o) => {
                            if (o.productId === action.payload) {
                                o.qty = o.qty - 1;
                            }
                        });
                    }
                    else {
                        _.remove(localState, (o) => {
                            return o.productId === action.payload
                        });
                    }
                }

                return { ...state, data: localState };
            }
        default:
            return state;
    }
};

/* Action Methods */
export const productIncrement = (productId) => {
    return {
        type: types.INCREMENT_COUNT,
        payload: productId
    }
};

export const productDecrement = (productId) => {
    return {
        type: types.DECREMENT_COUNT,
        payload: productId
    }
};

export default cartReducer;