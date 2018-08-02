import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './less/yxlook.less'
export default class ReExploreRcmds extends Component {
  static propTypes = {
    yxLook: PropTypes.object.isRequired,

  }
  render() {
    const yxLook=this.props.yxLook


    return (
      <div className="re_exploreLook">
        <header>严选LOOK</header>
        {
          yxLook?<a href="">
            <img src={'https://yanxuan.nosdn.127.net/4d6df19e5d186b0e8f7914806fcd68da.jpg'} alt=""/>
            <div className="author">
              <img src={yxLook.avatar} alt=""/>
              {yxLook.nickname}</div>
            <p>{yxLook.content}</p>
          </a>:null
        }

      </div>
    )
  }
}