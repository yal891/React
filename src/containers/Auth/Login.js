import * as actions from '../../store/actions/index'
import React, { Component } from "react";
import './Login.css';

class Login extends Component{
    //form validation
    state = {
        loginForm: {
            username: {
                elementType: 'input',
                elementConfig: {
                    type: 'username', //'text'
                    placeholder: 'username'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 3
                },
                valid: false,
                touched: false
            }
        },
        formIsValid:false,
    }



}