import React, {Component} from 'react'
import './personage.less'
import {connect} from 'react-redux'
import {getPref
} from '../../redux/actions'
import {Link} from 'react-router-dom'


class Personage extends Component {
  componentWillMount () {
    this.props.getPref()



  }
  logout () {
    document.querySelector('.zhe').style.display='block'

  }
    quxiao(){
    document.querySelector('.zhe').style.display='none'
  }


  render() {
    const pref=this.props.pref
    return (
      <section className={'personal'}>
        <div className="personage" >
          <header>
            <div className="left">
              <img className="avatar" src="http://thirdqq.qlogo.cn/qqapp/101330628/985B18D4BE50D49E863839CFFA1FD240/100" alt=''/>
                <div>
                  <p>丶Mr.Ma</p>
                  <div>普通用户</div>
                </div>
            </div>
            <div className="right">
              <div className="content">
                <i></i>
                <div className="huiyuan">
                  <div className="one">超级会员</div>
                  <div className="two">立即试用<i></i></div>
                </div>
              </div>

            </div>
          </header>
          <div className="list" >
            <ul>
              {pref?
                pref.map((item,index)=>(
                  <li key={index}>
                    <a href="">
                      <i style={{backgroundImage: `url(${item.banner})` ,backgroundPosition: `0 ${item.y}px`}}/>
                    <span>{item.content}</span>
                    </a>
                 </li>
                )):null
              }
          </ul>
        </div>
          <button  onClick={this.logout}>退出登录</button>
        </div>
        <div className="zhe">
          <div className="tanchuan">
          <div className="header">退出登录</div>
          <div>
          <span className="left" onClick={this.quxiao}>取消</span>
        <Link to={'/login'} className={'right'}>确定</Link>
    </div>
  </div>
  </div>
  </section>
    )
  }
}
  export default connect(
  state =>({
    pref: state.pref,
  }),
  {
    getPref,
  }
  )(Personage)