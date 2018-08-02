import React, {Component} from 'react'
import './shopping.less'
import {Link} from 'react-router-dom'
export default class Shopping extends Component {
  render() {
    return (
      <div className="wrap">
        <div className="header">
          <span>购物车</span>
        </div>

        <ul className="list">
          <li>
            <div>
              <img src="./images/circle.png" alt=""/>
                <span>30天无忧退货</span>
            </div>
          </li>
          <li>
            <div>
              <img src="./images/circle.png" alt=""/>
                <span>48小时快速退款</span>
            </div>
          </li>
          <li>
            <div>
              <img src="./images/circle.png" alt=""/>
                <span>满88元免邮费</span>
            </div>
          </li>
        </ul>
        <div className="content">
          <div className="icon">
            <img src="./images/shopcart.png" alt=""/>
          </div>
          <div className="login">
            <span>购物车空空如也</span>
            <Link to={'/login'}>登陆</Link>
        </div>
      </div>
  </div>
    )
  }
}