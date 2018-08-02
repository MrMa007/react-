import React, {Component} from 'react'
import {Switch, Route,Redirect} from 'react-router-dom'
import Personage from '../personage/personage'
import Recommend from '../recommend/recommen'
import Serch from '../serch/serch'
import Shopping from '../shopping/shopping'
import Home from '../home/home'
import Classify from '../classify/classify'
import MainFooter  from  '../../components/MainFooter/MainFooter'

export default class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/main/home' component={Home}/>
          <Route path='/main/classify' component={Classify}/>
          <Route path='/main/personage' component={Personage}/>
          <Route path='/main/recommend' component={Recommend}/>
          <Route path='/main/serch' component={Serch}/>
          <Route path='/main/shopping' component={Shopping}/>
          <Redirect path="/main" to={{pathname: '/main/home'}} />
        </Switch>
        <MainFooter/>

      </div>
    )
  }
}