import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import ReHeader from '../../components/ReHeader/ReHeader'
import './login.less'


export default class Login extends Component {
  render() {
    return (
      <div id="login">
        <ReHeader/>
        <div className="image">
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt=""/>
        </div>
        <div className="loginng">
          <Link className="iphone" to={'/iphone'}>
            <i></i>手机号码登录
          </Link>
          <Link className="email" to={'/email'}>
            <i></i>邮箱帐号登录
          </Link>
        </div>
    <div className="btn">
      手机号快捷注册
      <i className="btn_from"></i>
    </div>
    <div className="buttonlogin">
      <span>
        <img src="./images/wechat.png" alt=""/>
        微信
      </span>|
      <span>
        <img src="./images/qq.png" alt=""/>
        QQ
      </span>|
      <span>
        <img src="./images/weibo.png" alt=""/>
        微博
      </span>


    </div>


  </div>
    )
  }
}