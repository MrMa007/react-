import React, {Component} from 'react'
import top1 from './images/top1.jpg'
import top2 from './images/top2.jpg'
import bottom from './images/bottom.jpg'

export default class Register extends Component {
  render() {
    return (
      <div>
        <div className="wyyx">
          <div >
            <img src={top1} className="topOne"></img>
            <img src={top2} className="topTwo"></img>
          </div>
          <div>
            <img src={bottom} alt="" className="bottom"></img>
            <div to="/home" className="toHome"></div>
          </div>
        </div>
      </div>
    )
  }
}