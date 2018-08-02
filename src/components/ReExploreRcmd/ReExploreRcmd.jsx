import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './less/reexplore.less'
export default class ReExploreRcmds extends Component {
  static propTypes = {
    zhenpin: PropTypes.object.isRequired,

  }
  render() {
    const zhenpin=this.props.zhenpin


    return (
      <div className="re_exploreRcmd">
        <header>严选甄品</header>
        <div className="list" >
          {zhenpin.zhenOne?<a
            className="mainPosItem"
            style={{backgroundImage: `url(${zhenpin.zhenOne.picUrl})`}}>
            <div className="topicTag">{zhenpin.zhenOne.nickname}</div>
            <div className="content">
              <div >
                <div className="title">{zhenpin.zhenOne.title}</div>
                <div className="price">{zhenpin.zhenOne.priceInfo}元起</div>
              </div>
              <div className="subTitle">{zhenpin.zhenOne.subtitle}</div>
            </div>
          </a>:null}
          {zhenpin.zhenpins?
            zhenpin.zhenpins.map((item,index)=>(
              <a
                className="minorPosItem" key={index}>
                <div className="topicInfo">
                  <div className="author">
                    <img src={item.avatar} alt=""/>
                    {item.nickname}</div>
                  <div className="title">{item.title}</div>
                  <div className="line2">{item.subtitle}</div>
                </div>
                <div className="imgContainer "
                     style={{backgroundImage: `url(${item.picUrl})`}}>
                  <div>{item.typeName}</div>
                </div>
              </a>

            ))
            :null}



        </div>

      </div>
    )
  }
}