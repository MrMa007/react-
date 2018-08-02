import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './less/reexplore.less'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
export default class ReExploreTenFifteen extends Component {
  static propTypes = {
    tenfifteen: PropTypes.array.isRequired,

  }
  componentDidUpdate(){
    if(this.swiper){
      this.swiper.slideTo(0, 0)
      this.swiper.destroy()
      this.swiper = null;
    }
    this.swiper = new Swiper('.swiper-containers',{
      freeMode : true,
      freeModeMomentum : false,
    })

  }
  render() {
    const tenfifteen=this.props.tenfifteen


    return (
      <div className="re_exploreTenFifteen">
        <div className="title">十点一刻</div>
        <div className="swiper-containers">
          <div className="swiper-wrapper">
            {tenfifteen?
              tenfifteen.map((item,index)=>(
                <div className="swiper-slide" key={index} >
              <a href={item.url}>
              <div className="bg" >
              <div className="content">
              <div className="a">─&nbsp;今日话题&nbsp;─</div>
              <div className="b">{item.title}</div>
              <div className="c">{item.desc}</div>
              <div className="icon" >
                {
                  item.participantAvatar?item.participantAvatar.map((items,index)=>(
                    <img key={index}
                  src={items} alt=""/>
                    ))
                    :null
                }


              <img src="./images/ava.png" alt=""/>
              &nbsp;&nbsp;
              <span>535人参与话题</span>
              </div>
              </div>
              </div>
              </a>

              </div>
              )):null
            }





        <div className="swiper-slide mony">
          查看全部话题
          <img src="./images/right.png" alt=""/>
        </div>
      </div>

    <div className="swiper-pagination"></div>
  </div>
  </div>
    )
  }
}