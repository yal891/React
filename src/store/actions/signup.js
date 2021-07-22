import axios from 'axios';
import * as actionTypes from "./actionTypes";
import { Alert } from 'bootstrap';

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

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_REDIRECT_PATH,
        path: path
    };
};

export const signup = (username, password, formIsValid) => {
    return dispatch => {
        dispatch(start());
        const user = {
                userName: username,
                password: password,
                role: "User", // "User" or "Admin"
            },
            url = "http://localhost:8080/register"; //backend api

        axios.post(url, user)
            .then(response => {
                console.log(response);
                // Alert("You are successfully sign up. Go ahead!")
                dispatch(success());

            })
            .catch(error => {
                console.log(error);
                dispatch(fail(error.response.data.error));
                // Alert("The username has been taken!")
            });
    };
};