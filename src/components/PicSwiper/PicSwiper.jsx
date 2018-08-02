import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './less/pic.less'
import Swiper from 'swiper/dist/js/swiper.js'

import 'swiper/dist/css/swiper.min.css'
export default class Serch extends Component {
  static propTypes = {
    topicList: PropTypes.array.isRequired

  }
  componentDidUpdate(){
    if(this.swiper){
      this.swiper.slideTo(0, 0)
      this.swiper.destroy()
      this.swiper = null;
    }
    this.swiper = new Swiper ('.swiper-containerq', {
      slidesPerView : 1,
      centeredSlides : true,
    })
  }
  render() {
    const topicList=this.props.topicList


    return (
      <div className="pic_swiper">
        <header>
          <a href="">
            <span>专题精选</span>
            <i></i>
          </a>
        </header>
        <section>
          <div className="main">
            <div className="swiper-containerq">
              <div className="swiper-wrapper">
                {
                  topicList.map((item,index)=>(
                    <div className="swiper-slide" key={index}>
                  <a href=""><img src={item.itemPicUrl} alt=""/></a>
                  <div>
                  <div className="info"><span className="name">{item.title}</span> <span className="price">{item.priceInfo}&nbsp;&nbsp;元起</span></div>
                  <span className="introduce">{item.subtitle}</span>
                  </div>
                  </div>

                  ))
                }



            </div>
          </div>
      </div>

  </section>

  </div>
    )
  }
}
