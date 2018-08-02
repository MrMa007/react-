import React, {Component} from 'react'
import top1 from './images/top1.jpg'
import top2 from './images/top2.jpg'
import bottom from './images/bottom.jpg'
import './wyyx.less'
import {Link} from 'react-router-dom'
export default class Wyyx extends Component {
  render() {
    return (
      <div>
        <div className="wyyx">
          <div >
            <img src={top1} className="topOne" alt=""></img>
            <img src={top2} className="topTwo" alt=""></img>
          </div>
          <div>
            <img src={bottom} alt="" className="bottom"></img>
            <Link to={'/main'} className="toHome"></Link>
          </div>
        </div>
      </div>
    )
  }
}