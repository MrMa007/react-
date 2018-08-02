import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './less/reexplore.less'
export default class ReExploreRcmds extends Component {
  static propTypes = {
    recommend: PropTypes.object.isRequired,

  }
  render() {
    const recommend=this.props.recommend


    return (
      <div className="re_exploreRcmds">
        <header>为你推荐</header>
        {
          recommend?<div className="list" >
            {recommend.recommendBanner?<a
              className="mainPosItem"
              style={{backgroundImage: `url(${recommend.recommendBanner.picUrl})`}}>
              <div className="topicTag">{recommend.recommendBanner.nickname}</div>
              <div className="content">
                <div >
                  <div className="title">{recommend.recommendBanner.title}</div>
                  <div className="price">{recommend.recommendBanner.priceInfo}元起</div>
                </div>
                <div className="subTitle">{recommend.recommendBanner.subtitle}</div>
              </div>
            </a>:null}
            {recommend.recommends?
              recommend.recommends.map((item,index)=>(
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



          </div>:null
        }


  </div>
    )
  }
}