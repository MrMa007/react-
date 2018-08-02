import React, {Component} from 'react'
import './iphone.less'
import ReHeader from '../../components/ReHeader/ReHeader'
import {reqSendCode} from '../../api/index'
export default class Iphone extends Component {
  state={
    phone:'',
    captcha: '',
    computeTime:0,
    isShow:false,
    alertText:'',
    content:'获取验证码',
    pass:'请输入短信验证码',
    word:'',
    intervalId:'',
    changes:()=>{
      this.setState({
        word:document.querySelector('.wordinput').value
      })
    },
    change:()=>{
      this.setState({
        phone:document.querySelector('.contentinput').value
      })

    },

    isshow:()=>{
      this.setState({
        isShow:false
      })

    },
    gotos:(path)=>{

      if (/^1\d{10}$/.test(this.state.phone)){
        if(!this.state.word){
          this.setState({
            isShow:true,
            alertText :'请输入短信验证码'
          })
        }else if(this.state.word!==this.state.pass.toString()){
          this.setState({
            isShow:true,
            alertText :'短信验证码格式错误'
          })
        }else {
          clearInterval(this.state.intervalId)
          this.props.history.push(path);
        }
      }else {
        if(this.state.phone.length){
          this.setState({
            isShow:true,
            alertText :'手机号格式错误'
          })
        }else{
          this.setState({
            isShow:true,
            alertText :'请输入手机号'
          })
        }

      }
    },
    goto:(path)=>{
      this.props.history.push(path);
    },
    getCode:async ()=> {
      this.setState({
        isShow:false,
      })
      if (/^1\d{10}$/.test(this.state.phone)) {
        if(true) {
          this.setState({
            computeTime:30,
            intervalId:setInterval(() => {
              this.state.computeTime--
              this.setState({
                content:this.state.computeTime + '秒后重发',
                computeTime:this.state.computeTime--
              })
              document.querySelector('.get_verification').style.color='#999'
              if (this.state.computeTime <= 0) {
                this.setState({
                  content:'获取验证码',
                  pass:'请输入短信验证码'
                })
                document.querySelector('.get_verification').style.color='black'
                clearInterval(this.state.intervalId)
              }
            }, 1000)
          })

          const result = await reqSendCode()
          if (result.code === 1) {
            clearInterval(this.state.intervalId)
            this.setState({
              isShow:true,
              alertText:result.msg
            })
          } else {
            this.setState({
              pass:result.data.password

            })

          }
        }else {
          this.setState({
            isShow:true,
            alertText:'请滑动验证码'

          })
        }
      }else {
        console.log(1)
        if(this.state.phone.length){
          this.setState({
            isShow:true,
            alertText:'手机号格式错误'

          })
        }else{
          this.setState({
            isShow:true,
            alertText:'请输入手机号'
          })
        }
      }
    }
  }






  render() {
    const {phone,isShow,alertText,content,pass}=this.state

    return (
      <div className="login">
        <ReHeader />
        <section>
          <div className="image">
            <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt=""/>
          </div>
          <div className="input">
            <div className="em">
              <input className={'contentinput'} type="text" placeholder="请输入手机号" onChange={this.state.change.bind(this)}/>
            </div>
            {/*<Slider ref="socllor"/>*/}
            <div className="ps">
              <input className={'wordinput'} type="text" placeholder={pass} onChange={this.state.changes.bind(this)} onClick={this.state.isshow.bind(this)}/>
              <button className={`get_verification ${/^1\d{10}$/.test(phone)?'right_phone':''}`}
                      onClick={this.state.getCode.bind(this)}>
                {content}
              </button>
            </div>
          </div>
          <div className={isShow?'emg':'succ'}>{alertText}</div>
          <div className="ac">
            <span className="left">遇到问题</span>
            <span className="right">使用密码验证登录</span>
          </div>
          <div className="loginng">
            <div className="iphone" onClick={this.state.gotos.bind(this,'/main/personage')}>
              <i></i>登录
            </div>
            <div className="email" onClick={this.state.goto.bind(this,'/login')}>
              <i></i>其他方式登录
            </div>
          </div>
          <div className="btn">
            注册账号
            <i className="btn_from"></i>
          </div>
        </section>
      </div>
    )
  }
}

