import './less/inde.less'
import PropTypes from 'prop-types'
import React, {Component} from 'react'

export default class Preferential extends Component {

  static propTypes = {
    cateList: PropTypes.array.isRequired,
  }



    render() {
    const cateList=this.props.cateList

    return (
      <div className="indexFloor" >{
        cateList?
        cateList.map((item,index)=>(
          <div className="m-titleGoodGrid" key={index}>
        <h3>{item.name}</h3>
        <div className="goodGrid">
        <ul className="list">
          {
            item.itemList.map((good,index)=>(
              <li key={index}>
            <img src={good.listPicUrl} alt=""/>
            <span className="desc">{good.simpleDesc}</span>
            <div>风格特惠</div>
            <span className="good">{good.name}</span>
            <span className="price">￥{good.retailPrice}</span>
            </li>
            ))
          }


        <a href="" className={'mony'}>
        <span>更多{item.name}好物</span>
        <img src="./jujia/right.png" alt=""/>
        </a>
        </ul>

        </div>
        </div>


        )):null
      }


  </div>
    )
  }
}