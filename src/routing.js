import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import UserDetails from './components/userDetails';
import AddOrEditUser from './components/addOrEditUser'

class Routing extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact={true} path='/' component={UserDetails} />
                    <Route exact={true} path='/addOrEditUser' component={AddOrEditUser} />
                </Switch>
            </Router>
        )
    }
}

export default Routing;
