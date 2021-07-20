import * as actionTypes from "../actions/actionTypes";

const initialState = {
    error: null,
    loading: false,
    success: false,
    authRedirectPath: "/"
};

const start = (state, action) => {
    return {
        ...state,
        error: null,
        loading: true,
        success: false
    };
};

const success = (state, action) => {
    return {
        ...state,
        error: null,
        loading: false,
        success: true
    };
};

const fail = (state, action) => {
    return {
        ...state,
        error: action.error,
        loading: false,
        success: false
    };
};

const setRedirectPath = (state, action) => {
    return {
        ...state,
        authRedirectPath: action.path
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SIGNUP_START:
            return start(state, action);
        case actionTypes.SIGNUP_SUCCESS:
            return success(state, action);
        case actionTypes.SIGNUP_FAIL:
            return fail(state, action);
        case actionTypes.SET_REDIRECT_PATH:
            return setRedirectPath(state, action);
        default:
            return state;
    }
};

export default reducer;