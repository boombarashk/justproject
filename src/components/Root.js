import React from 'react'
import { connect, Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import App from './App.js'
import Auth from './Auth.js'
import Chapters from "./Chapters";
import Chapter from "./Chapter";
import Profile from "./Profile";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { user } = rest
    return <Route {...rest} render={(props) => (
        user
            ? <Component {...props} />
            : <Redirect to='/login' />
    )}/>
}

const ConnectedPrivateRoute = connect(state => ({
    user: state && state.user
}))(PrivateRoute)

const Root = ({ store }) => {
    return <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route exact path="/news" component={Chapters}/>
                <Route path="/news/:id" children={<Chapter/>}/>
                <Route path="/login" component={Auth}/>
                <ConnectedPrivateRoute path="/profile" component={Profile} />
            </Switch>
        </Router>
    </Provider>
}

export default Root
