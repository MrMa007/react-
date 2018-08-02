import './less/reHeader.less'
import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Preferential extends Component {

  render() {


    return (
      <div className={'reHeader'}>
        <div className="kong"></div>
        <div className="re-header">
        <div to={'/main/home'} className="home"></div>
        <Link className="tohome" to={'/main/home'}></Link>
    <div>
      <Link  className="selected" to={'/main/serch'} ></Link>
      <Link  className="shopping" to={'/main/shopping'} ></Link>
  </div>

  </div>
  </div>
    )
  }
}