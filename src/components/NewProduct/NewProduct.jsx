import './less/newpreduct.less'
import PropTypes from 'prop-types'
import React, {Component} from 'react'
// import Swiper from 'swiper/dist/js/swiper.js'
//
// import 'swiper/dist/css/swiper.min.css'
import BScroll from 'better-scroll'
export default class Serch extends Component {
  static propTypes = {
    newItemList: PropTypes.array.isRequired,
  }
  componentWillUpdate(){



        new BScroll('.swiper-conta',{
          scrollX: true
        })




  }

  render() {
  const newItemList=this.props.newItemList

    return (
      <div className="new_product" >
        <div className="bg">
          <span className="title">新品首发</span>
          <div>
           <span>查看全部</span>
           <i></i>
        </div>
      </div>
      <div className="swiper-conta">
        <ul className="swiper-wra">
            {newItemList?

              newItemList.map((newItem,index)=>(
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