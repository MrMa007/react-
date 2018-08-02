import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './less/reswiper.less'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
export default class Serch extends Component {
  static propTypes = {
    banner: PropTypes.array.isRequired,

  }
  componentDidUpdate(){
    if(this.swiper){
      this.swiper.slideTo(0, 0)
      this.swiper.destroy()
      this.swiper = null;
    }
    this.swiper = new Swiper ('.swiper-container', {
      loop: true,
      effect : 'coverflow',
      slidesPerView: 1.1,
      centeredSlides: true,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 0,
        slideShadows : true
      },
    })
  }
  render() {
    const banner=this.props.banner


    return (
      <div className={'reswiper'}>
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {banner?
              banner.map((item,index)=>(
                <div className="swiper-slide" key={index} >
              <img src={item.picUrl}  alt=""/>
              <div className="content">
              <div className="a">─&nbsp;{item.subTitle}&nbsp;─</div>
              <div className="b">{item.title}</div>
              <div className="c">{item.desc}</div>
              </div>
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
