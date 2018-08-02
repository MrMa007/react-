import './less/classifyLeft.less'
import PropTypes from 'prop-types'
import React, {Component} from 'react'
import BScroll from 'better-scroll'
export default class Serch extends Component {
  state={
    index:0,

  }
  static propTypes = {
    category: PropTypes.array.isRequired,
  }
  componentDidUpdate(){
     new BScroll('.wrapper',{
      scrollX: true,
      click:true
    })
  }

    active(index){
    if(this.state.index===index){
      return
    }
    this.setState({
      index
      })
      this.props.get(index)

    }




  render() {
    const category=this.props.category

    return (
      <div className="classify_left">
        <div className="wrapper">
          <ul className="content list"  >
                  {category?
                    category.map((newItem,index)=>(
                      <li   className={this.state.index===index?'active':''}
                            key={index} onClick ={this.active.bind(this,index)}>
                    <span></span>
                    {category[index].name}
                    </li>
                    )):null
                  }

          <div className="scroll"></div>
        </ul>
      </div>

  </div>
    )
  }
}