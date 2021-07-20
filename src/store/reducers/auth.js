import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    token: null,
    error: null,
    loading: false,
    success: false,
    authorized: false,
};

const start = (state, action) => {
    return  updateObject(state,{
        loading: true,
        authorized: false,
        success: false,
        error: null
})


};

const success = (state, action) => {
    return  updateObject(state,{
        loading: false,
        success: true,
        authorized: true,
        token: action.token
    })
}

const fail = (state, action) => {
    return  updateObject(state,{
        loading: false,
        success: false,
        authorized: false,
        error: action.error
    })

};

const logout = (state, action) => {
    return  updateObject(state,{
        loading: false,
        success: false,
        authorized: false,
        token: null
    })
};

const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case actionTypes.AUTH_START:
            return start(state, action);
        case actionTypes.AUTH_SUCCESS:
            return success(state, action);
        case actionTypes.AUTH_FAIL:
            return fail(state, action);
        case actionTypes.LOG_OUT:
            return logout(state, action);
        default:
            return state;
    }
};

export default reducer