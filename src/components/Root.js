import React from 'react'
import { connect, Provider } from 'react-redux'
import { NavLink, BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import About from './About.js'
import Auth from './Auth.js'
import Chapters from "./Chapters";
import Chapter from "./Chapter";
import Profile from "./Profile";

export const PREFIX = '/justproject'

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { user } = rest
    return <Route {...rest} render={(props) => (
        user
            ? <Component {...props} />
            : <Redirect to={`${PREFIX}/login`} />
    )}/>
}

const ConnectedPrivateRoute = connect(state => ({
    user: state && state.user
}))(PrivateRoute)

const Root = ({ store }) => {
    return <Provider store={store}>
        <Router>
            <nav className="tabs">
                <NavLink exact={true} activeClassName="is-invisible" to={`${PREFIX}/`}><span>На главную</span></NavLink>
                <NavLink activeClassName="is-active" to={`${PREFIX}/news`}><span>Новости</span></NavLink>
                <NavLink activeClassName="is-active" to={`${PREFIX}/profile`}><span>Профиль</span></NavLink>
            </nav>

            <Switch>
                <Route exact path={`${PREFIX}/`} component={About}/>
                <Route exact path={`${PREFIX}/news`} component={Chapters}/>
                <Route path={`${PREFIX}/news/:id`} children={<Chapter/>}/>
                <Route path={`${PREFIX}/login`} component={Auth}/>
                <ConnectedPrivateRoute path={`${PREFIX}/profile`} component={Profile} />
            </Switch>
        </Router>
    </Provider>
}

export default Root
