import { updateObject } from '../utility';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    detail: null, // check the name with backend api
    search: null, // show results based on keywords
    error: null,
    afterImport: null // import from excel
}

const resourceStart = (state, action) =>{
    return updateObject(state, {
        detail: action.detail
    })

}

const resourceSearch = (state, action) =>{
    return updateObject(state,{
        search: action.search
    })
}

const resourceImport = (state, action) =>{
    return updateObject(state, {
        afterImport : action.afterImport
    })
}

const fail = (state, action) =>{
    return updateObject(state, {
        error: action.error
    })
}

const reducer = (state = initialState, action) =>{
    switch (action.type){
        case actionTypes.
    }
}

