import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index'
import Input from '../../components/UI/Input';
import { withRouter,NavLink,Link, Redirect } from 'react-router-dom'
import './Login.css';

class Login extends Component{
    //form validation
    state = {
        loginForm: { //name convention match to backend
            userName: {
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

    checkValidity(value, rules){
        let isValid = true;
        if ( !rules ) {
            return true;
        }

        if ( rules.required ) {
            isValid = value.trim() !== '' && isValid;
        }

        if ( rules.minLength ) {
            isValid = value.length >= rules.minLength && isValid
        }

        if ( rules.maxLength ) {
            isValid = value.length <= rules.maxLength && isValid
        }

        return isValid;
    }

    inputChangedHandler = ( event, updatedInput ) => {
        const updatedForm = {
            ...this.state.loginForm,
            [updatedInput]: {
                ...this.state.loginForm[updatedInput],
                value: event.target.value,
                valid: this.checkValidity( event.target.value, this.state.loginForm[updatedInput].validation),
                touched: true
            }
        };
        let formIsValid = true;
        for(let updatedInput in this.state.loginForm){
            formIsValid = updatedForm[updatedInput].valid && formIsValid;  //to check whether the whole form is valid
        }
        this.setState( { loginForm: updatedForm , formIsValid: formIsValid } );
    }

    submitHandler = ( event ) => {
        event.preventDefault();
        this.props.login(
            this.state.loginForm.userName.value,
            this.state.loginForm.password.value
        );
    }

    render(){
        const formElementsArray = [];
        for (let key in this.state.loginForm) {
            formElementsArray.push({
                id: key,
                config: this.state.loginForm[key]
            } );
        }

        let form = formElementsArray.map(formElement => (
            <Input className= "inputForm"
                   key={formElement.id}
                   elementType={formElement.config.elementType}
                   elementConfig={formElement.config.elementConfig}
                   value={formElement.config.value}
                   invalid={!formElement.config.valid}
                   shouldValidate={formElement.config.validation}
                   touched={formElement.config.touched}
                   changed={(event) => this.inputChangedHandler(event,formElement.id)} />
        ));

        let errorMessage = null;
        if (this.props.error){
            errorMessage = (<p>{this.props.error.message()}</p>);
        }

        let authRedirect = null;
        if (this.props.isAuthenticated) { //success
            authRedirect = <Redirect to={this.props.authRedirectPath}/>
        }

        return (
            //Login
            <div className = "background">
                {authRedirect}
                {errorMessage}
                <h1 className = "head">login</h1>
                <form className = "body" onSubmit={this.submitHandler}>
                    {form}
                    <button type="submit" className="btn btn-warning b1" disabled = {!this.state.formIsValid}>Login/Submit</button>
                </form>
                {/*Signup*/}
                <div className ="signup">
                    <button type="submit" className="btn btn-warning b2">
                        <NavLink to = "/register" exact activeStyle={{
                            fontWeight: 'bold',
                        }}> Signup/Register</NavLink>
                    </button>
                </div>
            </div>
        );

    }
}




const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        success: state.auth.success,
        isAuthenticated: (state.auth.token != null),
        //authRedirectPath: state.auth.authRedirectPath,
        //token: state.auth.token
    };
};

const mapDispatchToProps = dispatch => {
    return {
        login: (username, password, formIsValid) => dispatch(actions.login(username, password, formIsValid))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);