//import * as actionTypes from '../antions/actionTypes';

const initialState = {
    token: null,
    error: null,
    loading: false,
    success: false,
    authorized: false,
    authRedirectPath: '/'
};

const start = (state, action) => {
    return {
        ...state,
        loading: true,
        authorized: false,
        success: false,
        error: null
    };
};

const success = (state, action) => {
    return {
        ...state,
        loading: false,
        success: true,
        authorized: true,
        token: action.token
    }
}

const fail = (state, action) => {
    return {
        ...state,
        loading: false,
        success: false,
        authorized: false,
    };
};

const logout = (state, action) => {
    return {
        ...state,
        loading: false,
        success: false,
        authorized: false,
        token: null
    };
};

const reducer = (state = initialState, action) =>{
    // to be continued
}