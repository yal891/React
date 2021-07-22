import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import Login from "./containers/Auth/Login";
import Signup from "./containers/Signup/Signup"
import './App.css';

import {Route, Switch, Redirect,  withRouter} from 'react-router-dom'
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
    componentDidMount () {

        // console.log(this.props);
        // this.props.onTryAutoSignup();

    }
    render () {
        let routes = (
            <Switch>
                <Route path = "/authenticate"  component = {Login} />
                <Route exact path = "/register"  component = {Signup} />
                <Redirect to="/" />
            </Switch>
        );

        return (
            <BrowserRouter>
                <div className="App">
                </div>
                {routes}
            </BrowserRouter>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

export default withRouter( connect(  mapStateToProps, null )( App ) );
