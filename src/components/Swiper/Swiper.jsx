import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './Less/Swiper.less'
import Swiper from 'swiper/dist/js/swiper.js'

import 'swiper/dist/css/swiper.min.css'
export default class Serch extends Component {
  static propTypes = {
    focusList: PropTypes.array.isRequired,
    policyDescList: PropTypes.array.isRequired,

  }
  componentDidUpdate(){
    if(this.swiper){
      this.swiper.slideTo(0, 0)
      this.swiper.destroy()
      this.swiper = null;
    }
    this.swiper=new Swiper ('.swiper-container', {
      direction: 'horizontal',
      speed:1000,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        waitForTransition: false,
      },

      loop: true,
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',

      },

    })
  }
  render() {
    const focusList=this.props.focusList
    const policyDescList=this.props.policyDescList


    return (
      <section className={'homeswiper'}>
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {focusList?
              focusList.map((focus,index)=>(
                <div className="swiper-slide"  key={index}>
                  <img src={focus.picUrl} alt=""/>
                </div>
              )):null
            }

          </div>
          <div className="swiper-pagination"></div>
        </div>
        <div className="nav">
          <ul>
            {policyDescList?
              policyDescList.map((policyDesc,index)=>(
                <li key={index}>
                  <a href="">
                    <img  src={policyDesc.icon} alt=""/>{policyDesc.desc}
                  </a>
                </li>
              )):null
            }

          </ul>
        </div>
      </section>
    )
  }
}

