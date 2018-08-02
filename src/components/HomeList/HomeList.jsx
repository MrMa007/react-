import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './less/home.less'
import PubSub from 'pubsub-js'
export default class Serch extends Component {
  state={
    index:0
  }
  static propTypes = {
    cateList: PropTypes.array.isRequired,

  }
  componentDidMount() {
    this.pubsub_token = PubSub.subscribe('PubSubindex', function (topic, message) {
      this.setState({
        index: message-1
      });
    }.bind(this));
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.pubsub_token);
  }
  render() {
    const cateList=this.props.cateList
    const index=this.state.index
    return (
      <div className="home_list">
        <div className="banner">{
          cateList[index]? <img src={cateList[index].bannerUrl} alt=""/>:null
        }

        </div>
        <div className="indexFloor" >
          {
            cateList[index]? <h3>{cateList[index].name}</h3>:null
          }

          <div className="goodGrid">
            <ul id="list">
              {cateList[index]?
                cateList[index].itemList.map((good,index)=>(
                  <li key={index}>
                  <img src={good.listPicUrl} alt=""/>
                  <span className="desc">{good.simpleDesc}</span>
                  <div>风格特惠</div>
                  <span className="good">{good.name}</span>
                  <span className="price">￥{good.retailPrice}</span>
                </li>
                )):null
              }

          </ul>

        </div>


      </div>

  </div>
    )
  }
}