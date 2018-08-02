import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {HashRouter, Switch, Route,Redirect} from 'react-router-dom'
import './mock/mockServer'
import store from './redux/store'
import Login from './containers/login/login'
import Wyyx from './containers/wyyx/wyyx'
import Main from './containers/main/main'
import Iphone from './containers/iphone/iphone'
import Email from './containers/email/email'
import './common/css/reset.css'


ReactDOM.render((
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path='/login' component={Login}/>
        <Route path='/main' component={Main}/>
        <Route path='/wyyx' component={Wyyx}/>
        <Route path='/iphone' component={Iphone}/>
        <Route path='/email' component={Email}/>
        <Redirect path="/" to={{pathname: '/wyyx'}} />
      </Switch>
    </HashRouter>
  </Provider>
), document.getElementById('root'))
