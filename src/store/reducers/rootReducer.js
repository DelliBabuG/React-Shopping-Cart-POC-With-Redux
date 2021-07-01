/* Package JSON Import will be here */
import { combineReducers } from "redux";
/* Package JSON Import will be here */

/* Project Import will be here */
import productListReducer from "./productListReducer";
import cartReducer from "./cartReducer";
import userReducer from "./userReducer";
/* Project Import will be here */

const rootReducer = combineReducers({
    productList: productListReducer,
    cart: cartReducer,
    user: userReducer
});

export default rootReducer;