import React, {Component} from 'react'
import './email.less'
import ReHeader from '../../components/ReHeader/ReHeader'
// import {reqSendCode} from '../../api/index'
export default class Email extends Component {
  state={ email:'',
    isShow:false,
    alertText:'',
    word:'',
    isHidden:false,
    pass:'',}

  render() {
    return (
      <div className="login">
        <ReHeader />
        <section>
          <div className="image">
            <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt=""/>
          </div>
          <div className="input">
            <div className="em"><input type="text" placeholder="邮箱账号"/></div>
            <div className="ps"><input type="text" placeholder="密码"
                                   /></div>
          </div>
          {/*<div className={isShow?'emg':'succ'}>{alertText}</div>*/}
    {/*<Slider ref="socllor" />*/}
    <div className="ac">
      <span className="left">注册账号</span>
      <span className="right">忘记密码</span>
    </div>
    <div className="loginng">
      <div className="iphone" >
      <i></i>登录</div>
    <div className="email" >
    <i></i>其他方式登录</div>
  </div>
  </section>



  </div>
    )
  }
}