import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './less/relistswiper.less'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
export default class Serch extends Component {
  static propTypes = {
    column: PropTypes.array.isRequired,

  }
  componentDidUpdate(){
    if(this.swiper){
      this.swiper.slideTo(0, 0)
      this.swiper.destroy()
      this.swiper = null;
    }
    this.swiper = new Swiper('.swiper-containerp',{
      slidesPerView : 4,
    })
  }
  render() {
    const column=this.props.column


    return (
      <div className="wrap">
        <div className="swiper-containerp">
          <div className="swiper-wrapper">
            {column?
              column.map((item,index)=>(
                <div className="swiper-slide" key={index}>
              <img src={item.picUrl} alt=""/>
              <div className="top">{item.articleCount}</div>
              <div className="bottom">{item.title}</div>
              </div>

              )):null
            }
          </div>
        <div className="swiper-pagination"></div>
      </div>
  </div>
    )
  }
}