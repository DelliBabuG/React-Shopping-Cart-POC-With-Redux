export const types = {
    LOGIN_USER: "userReducer/loginUser",
    LOGOUT_USER: "userReducer/logoutUser"
};

let initialState = {
    userName: ""
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_USER:
            return {
                ...state,
                userName: action.payload
            };
        case types.LOGOUT_USER:
            return {
                ...state,
                userName: ""
            };
        default:
            return state;
    }
};

/* Action Methods */
export const userLogin = (userName) => {
    return {
        type: types.LOGIN_USER,
        payload: userName
    }
};


export default userReducer;