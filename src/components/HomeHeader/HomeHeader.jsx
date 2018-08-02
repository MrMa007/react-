import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './less/HomeHeader.less'
import {Link} from 'react-router-dom'
import BScroll from 'better-scroll'
import PubSub from 'pubsub-js'
export default class HomeHeader extends Component {
  state={
    index:0
  }
  componentDidUpdate(){
     new BScroll('.scroll',{
      scrollX: true,
      click:true
    })
  }
  static propTypes = {
    headCateList: PropTypes.array.isRequired,

  };
  active(index){

    if(this.state.index===index){
      return
    }

    this.setState({
      index:index
    })
    PubSub.publish('PubSubindex',index);
    const lists=document.querySelector('.list')
    if(index>5){

      lists.style.marginLeft=-(lists.offsetWidth-750)+'px'
      return
    }
    lists.style.marginLeft=-index*140+'px'
    //
    for (let i=0;i<lists.length;i++){
      lists[i].className=''
    }

  }

  render() {
    const headCateList=this.props.headCateList
    return (
      <div>
        <div className="kong"></div>
        <section className={'homeheader'}>
          <header>
            <Link to={'/wyyx'} className="logo"></Link>
            <i></i>
            <input type="text" placeholder="搜索商品，共97565款好物" />
          </header>
          <div className="scroll">
            <ul  className="list"  >
              <li className={this.state.index===0?'active':''} onClick={()=>{this.active(0)}} >推荐<span></span></li>
              {headCateList?
                headCateList.map((headcate,index)=>(
                  <li  className={this.state.index===index+1?'active':''}
                    key={index} onClick={()=>{this.active(index+1)}}>{headcate.name}<span></span></li>
                )):null
              }
            </ul>
          </div>
        </section>
      </div>
    )
  }
}