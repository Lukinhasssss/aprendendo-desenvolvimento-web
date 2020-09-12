import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import UserCrud from '../components/user/UserCrud'

export default props =>
    <Switch>
        <Route exact path='/' component={Home} /> {/* Ou seja, sempre que o usuário navegar para '/' ele vai renderizar o component {Home} */}
        <Route path='/users' component={UserCrud} />
        <Redirect from='*' to='/' />
    </Switch>