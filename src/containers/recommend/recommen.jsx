import React, {Component} from 'react'
import './less/recommen.less'
import {connect} from 'react-redux'
import ReSwiper from '../../components/ReSwiper/ReSwiper'
import ReHeader from '../../components/ReHeader/ReHeader'
import ReListSwiper from '../../components/ReListSwiper/ReListSwiper'
import ReExploreRcmds from '../../components/ReExploreRcmds/ReExploreRcmds'
import ReExploreRcmd from '../../components/ReExploreRcmd/ReExploreRcmd'
import ReExploreTenFifteen from '../../components/ReExploreTenFifteen/ReExploreTenFifteen'
import ReExploreLook from '../../components/ReExploreLook/ReExploreLook'
import ReMexploreMore from '../../components/ReMexploreMore/ReMexploreMore'
import {getBanner,
  getColumn,
  getRecommend,
  getTenfifteen,
  getZhenpin,
  getYxLook,
  getFindMore,
} from '../../redux/actions'
class Recommend extends Component {
  componentWillMount () {
    this.props.getBanner()
    this.props.getColumn()
    this.props.getRecommend()
    this.props.getTenfifteen()
    this.props.getZhenpin()
    this.props.getYxLook()
    this.props.getFindMore()



  }
  render() {
    return (
      <section id="recommend">
        <ReHeader />
        <ReSwiper banner={this.props.banner}/>
        <ReListSwiper column={this.props.column}/>
        <ReExploreRcmds recommend={this.props.recommend}/>
        <ReExploreTenFifteen tenfifteen={this.props.tenfifteen}/>
        <ReExploreRcmd zhenpin={this.props.zhenpin}/>
        <ReExploreLook yxLook={this.props.yxLook}/>
        <ReMexploreMore findMore={this.props.findMore}/>
      </section>
    )
  }
}
export default connect(
  state =>({
    banner: state.banner,
    column: state.column,
    recommend: state.recommend,
    tenfifteen: state.tenfifteen,
    yxLook: state.yxLook,
    zhenpin: state.zhenpin,
    findMore: state.findMore,

  }),
  {
    getBanner,
    getColumn,
    getRecommend,
    getTenfifteen,
    getZhenpin,
    getYxLook,
    getFindMore,

  }
)(Recommend)