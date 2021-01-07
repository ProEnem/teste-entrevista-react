import React from 'react'
import { Switch } from 'react-router-dom'

import Route from './Route'

import SignIn from '../pages/SignIn'
import Profile from '../pages/Profile'

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/profile" exact component={Profile} isPrivate />
    </Switch>
)

export default Routes
