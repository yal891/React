import axios from 'axios';
import * as actionTypes from "./actionTypes";

export const start = () => {
    return {
        type: actionTypes.AUTH_START
    }
};

export const success = (token) =>{
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token
        // userId: userId
    }
}

export const fail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = () => {
    localStorage.removeItem('token');
    // localStorage.removeItem('userId');
    // localStorage.removeItem('expirationDate');
    return {
        type: actionTypes.LOG_OUT
    };
};

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    };
};

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_REDIRECT_PATH,
        path: path
    };
};

// login action
export const login = (username, password) => {
    return dispatch => {
        dispatch(start());
        const user = {
                username: username,
                password: password
            },
            url = 'http://localhost:8080/authenticate'; // backend url
        axios.post(url, user)
            .then(response => {
                localStorage.setItem("token", response.data.token);
                dispatch(success(response.data.token)); //userId
            })
            .catch(error => {
                console.log(error);
                dispatch(fail("Wrong Username or Password."));
            });
    };
};

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                dispatch(success(token));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000 ));
            }
        }
    };
};
