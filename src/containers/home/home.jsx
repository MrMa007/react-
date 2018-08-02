import React, {Component} from 'react'
import './less/home.less'
import {connect} from 'react-redux'
import PubSub from 'pubsub-js'
import HomeHeader from '../../components/HomeHeader/HomeHeader'
import Swiper from '../../components/Swiper/Swiper'
import Manufacturer from '../../components/Manufacturer/Manufacturer'
import NewProduct from '../../components/NewProduct/NewProduct'
import NewProductTwo from '../../components/NewProductTwo/NewProductTwo'
import Preferential from '../../components/Preferential/Preferential'
import PicSwiper from '../../components/PicSwiper/PicSwiper'
import IndexFloor from '../../components/IndexFloor/IndexFloor'
import HomeList from '../../components/HomeList/HomeList'

import {getHeadCateList,getFocusList,getNewItemList,
  getTagList,getPopularItemList,getFlashSaleIndexVO,getPolicyDescList,getTopicList,
  getCateList
} from '../../redux/actions'
class Home extends Component {
  state={
    index:0
  }
  componentWillMount () {
    this.props.getHeadCateList()
    this.props.getFocusList()
    this.props.getPolicyDescList()
    this.props.getTagList()
    this.props.getNewItemList()
    this.props.getPopularItemList()
    this.props.getFlashSaleIndexVO()
    this.props.getTopicList()
    this.props.getCateList()


  }
  scrollToAnchor = (anchorName) => {
    if (anchorName) {
      let anchorElement = document.getElementById(anchorName);
      if(anchorElement) { anchorElement.scrollIntoView({block: 'start', behavior: 'smooth'}); }
    }
  }
  componentDidMount() {
    this.pubsub_token = PubSub.subscribe('PubSubindex', function (topic, message) {
      this.setState({
        index: message
      });
    }.bind(this));
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.pubsub_token);
  }


  render() {
    return (
      <section id="main">
        <a name={'test'}> </a>
        <HomeHeader headCateList={this.props.headCateList} />
        <div id="mi" style={{display: `${this.state.index?'none':'block'}`}}>

          <Swiper focusList={this.props.focusList} policyDescList={this.props.policyDescList}/>
          <Manufacturer tagLi={this.props.tagLi}/>
          <NewProduct newItemList={this.props.newItemList}/>
          <NewProductTwo popularItemList={this.props.popularItemList}/>
          <Preferential flashSaleIndexVO={this.props.flashSaleIndexVO}/>
          <PicSwiper topicList={this.props.topicList}/>
          <IndexFloor cateList={this.props.cateList}/>

        </div>
        <div id={'list'} style={{display: `${this.state.index?'block':'none'}`}}>
          <HomeList cateList={this.props.cateList} />
        </div>
        <a  id={'top'} onClick={()=>this.scrollToAnchor('mi')}> <img id={'tops'} src="./images/top.png" alt=""/></a>

      </section>
    )
  }
}
export default connect(
  state =>({
    headCateList: state.headCateList,
    focusList: state.focusList,
    policyDescList: state.policyDescList,
    newItemList: state.newItemList,
    tagLi: state.tagLi,
    popularItemList: state.popularItemList,
    flashSaleIndexVO: state.flashSaleIndexVO,
    topicList: state.topicList,
    cateList: state.cateList,
  }),
  {
    getHeadCateList,
    getFocusList,
    getPolicyDescList,
    getNewItemList,
    getTagList,
    getPopularItemList,
    getFlashSaleIndexVO,
    getTopicList,
    getCateList,
  }
)(Home)