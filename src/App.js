import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import Sidebar from './components/Sidebar/Sidebar'
import Login from "./containers/Auth/Login";
import Signup from "./containers/Signup/Signup"
import Resource from "./containers/Resource/Resource"
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
                <Route exact path="/resource/read" component={Resource} />
                <Redirect to="/hi" />
            </Switch>
        );


        if(this.props.isAuthenticated) {
            routes = (
                <Switch>
                    {/*<Route exact path="/resource/read" component={Resource} />*/}
                    <Redirect to="/hi" />
                </Switch>
            )
        }

        return (
            <BrowserRouter>
                <div className="App">
                    <Sidebar />
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
