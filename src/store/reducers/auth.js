import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    token: null,
    error: null,
    loading: false,
    success: false,

};

const start = (state, action) => {
    return updateObject(state,{
        loading: true,
        success: false,
        error: null
})


};

//authSuccess
const success = (state, action) => {
    return updateObject(state,{
        loading: false,
        success: true,
        token: action.token, //action.idToken,
        error: null,
    })
}

const fail = (state, action) => {
    return updateObject(state,{
        loading: false,
        success: false,
        error: action.error
    })

};

const logout = (state, action) => {
    return updateObject(state,{
        loading: false,
        success: false,
        token: null
    })
};

// return based on the action type
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