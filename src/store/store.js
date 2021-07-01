/* Package JSON Import will be here */
import { createStore } from "redux";
/* Package JSON Import will be here */

/* Project Import will be here */
import rootReducer from "./reducers/rootReducer";
/* Project Import will be here */

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;