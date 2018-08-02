import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './less/remex.less'
export default class ReExploreRcmds extends Component {
  static propTypes = {
    findMore: PropTypes.array.isRequired,

  }
  render() {
    const findMore=this.props.findMore


    return (
      <div className="re_mexploreMore">
        <header>
          <div className="left"></div>
          更多精彩
          <div className="right"></div>
        </header>
        <div className="list">
          {findMore?
            findMore.map((i,x)=>(
              <div key={x} className="good">
            <a href={i.linkUrl}>
            <div>
              {
                i.picList.length===0?<img   className="main" src={i.itemPicUrl} alt=""/>:
                  <div >
                    <div className="left">
                      <img src={i.picList[0]} alt=""/>
                    </div>
                    <div className="right">
                      <img src={i.picList[1]} alt=""/>
                      <img src={i.picList[2]} alt=""/>
                    </div>
                  </div>
              }





            </div>
            </a>
            <div className="word">{i.subtitle}</div>
            </div>
            )):null
          }

  </div>

  </div>
    )
  }
}