import './less/pre.less'
import PropTypes from 'prop-types'
import React, {Component} from 'react'

export default class Preferential extends Component {
  static propTypes = {
    flashSaleIndexVO: PropTypes.object.isRequired,
  }

  render() {
    const flashSaleIndexVO=this.props.flashSaleIndexVO

    return (
      <div className="preferential">
        {
          flashSaleIndexVO?<div className="limit">
            <div className="word">
              <div className="title">严&nbsp;选&nbsp;限&nbsp;时&nbsp;购</div>
              <div className="time">
                <span>01</span>&nbsp;:
                <span>04</span>&nbsp;:
                <span>09</span>
              </div>
              <div className="awit">下一场&nbsp;&nbsp;14:00&nbsp;&nbsp;开始</div>

            </div>
            <div className="icon" style={{backgroundImage: `url(${flashSaleIndexVO.primaryPicUrl})`}}>
              <div>
                <span className="one">￥&nbsp;&nbsp;{flashSaleIndexVO.activityPrice}</span>
                <span>￥&nbsp;&nbsp;{flashSaleIndexVO.originPrice}</span>
              </div>
            </div>
          </div>:null
        }

        {
          flashSaleIndexVO.saleIndexVO?<a href=""  ><img src={flashSaleIndexVO.saleIndexVO.picUrl} alt=""/></a>:null
        }


        </div>
    )
  }
}