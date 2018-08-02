import './less/new.less'
import PropTypes from 'prop-types'
import React, {Component} from 'react'
// import Swiper from 'swiper/dist/js/swiper.js'
//
// import 'swiper/dist/css/swiper.min.css'
import BScroll from 'better-scroll'
export default class Serch extends Component {
  static propTypes = {
    popularItemList: PropTypes.array.isRequired,
  }
  componentDidUpdate(){
    new BScroll('.swiper',{
      scrollX: true
    }) }

  render() {
    const popularItemList=this.props.popularItemList

    return (
      <div className="new_products" >
        <div className="bg">
          <span className="title">人气推荐·好物精选</span>
          <div>
            <span>查看全部</span>
            <i></i>
          </div>
        </div>
        <div className="swiper">
          <ul className="swiper-wrappers">
            {
              popularItemList?
              popularItemList.map((newItem,index)=>(
                <li key={index}>
                  <a href="" className="swiper-slide">
                    <img src={newItem.listPicUrl} alt=""/>
                    <span className="name">{newItem.name}</span>
                    <span className="bedeck">{newItem.simpleDesc}</span>
                    <div>
                      <span>￥</span>
                      <span>{newItem.retailPrice}</span>
                    </div>
                  </a>
                </li>
              )):null
            }

            <a href="" className="select"> 查看全部</a>

          </ul>
        </div>
      </div>
    )
  }
}