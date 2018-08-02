import React, {Component} from 'react'
import {Link,withRouter} from 'react-router-dom'
import './less/mainfooter.less'
 class Shopping extends Component {
  render() {
    const {pathname} = this.props.location
    return (
      <div>
        <footer className="footer_guide" >
          <Link  className="guide_item on" to={'/main/home'} replace>
            <span className={`item_icon home ${pathname==='/main/home'?'on':null} `} ></span>
            <span className={`text home ${pathname==='/main/home'?'on':null} `} >首页</span>
          </Link>
          <Link  className="guide_item on" to={'/main/recommend'} replace>
            <span className={`item_icon recommend ${pathname==='/main/recommend'?'on':null} `} ></span>
            <span className={`text recommend ${pathname==='/main/recommend'?'on':null} `} >识物</span>
          </Link>
          <Link  className="guide_item on" to={'/main/classify'} replace>
            <span className={`item_icon classify ${pathname==='/main/classify'?'on':null} `} ></span>
            <span className={`text classify ${pathname==='/main/classify'?'on':null} `} >分类</span>
          </Link>
          <Link  className="guide_item on" to={'/main/shopping'} replace>
            <span className={`item_icon shopping ${pathname==='/main/shopping'?'on':null} `}  ></span>
            <span className={`text shopping ${pathname==='/main/shopping'?'on':null} `} >购物车</span>
          </Link>
          <Link  className="guide_item on" to={'/main/personage'} replace>
            <span className={`item_icon personage ${pathname==='/main/personage'?'on':null} `}  ></span>
            <span className={`text personage ${pathname==='/main/personage'?'on':null} `} >个人</span>
          </Link>
        </footer>
      </div>
    )
  }
}
export default withRouter(Shopping)