import './less/manufacturer.less'
import PropTypes from 'prop-types'
import React, {Component} from 'react'
export default class Manufacturer extends Component {
  state={
      sliceTagList:[]
  }
  static propTypes = {
    tagLi: PropTypes.array.isRequired,
  }
  // componentWillMount(){
  //   let sliceTagList=[]
  //   for(var i=0;i<4;i++){
  //     sliceTagList.push(this.props.tagLi[i])
  //   }
  //   console.log(this.props.tagLi)
  //   this.setState({sliceTagList})
  //
  // }
  render() {
    const tagLi=this.props.tagLi.slice(0,4)


    return (
      <section className="manufacturer">
        <div className="gray"></div>
        <div className="header">
          <a href="">
            品牌制造商直供
            <i></i>
          </a>
        </div>
        <div className="content">
          <ul>
            {tagLi.length?
              tagLi.map((tag,index)=>(
                <li key={index}
                    style={{backgroundImage:`url(${tag.picUrl})`}}>
               <span>{tag.name}</span><span>{tag.floorPrice}元起</span></li>
                  )):<div></div>
            }


          </ul>
      </div>
  </section>
    )
  }
}