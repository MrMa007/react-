import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './less/classifyRight.less'
export default class ReExploreRcmds extends Component {
  static propTypes = {
    category: PropTypes.array.isRequired,
    index: PropTypes.number.isRequired

  }
  render() {
    const category=this.props.category
    const index=this.props.index

    return (
      <div className="classify_right">
        {category[index]?<div className="shop_list" >
          <div  className="headerIcon">
            <img  src={category[index].bannerUrl} alt=""/>
          </div>
          <header>
            {category[index].name}分类
          </header>
          <ul  className="icon_list">{}
            {
              category[index].subCateList.map((item,index)=>(
                <li key={index}>
                  <a href="">
                    <img src={item.wapBannerUrl} alt=""/>
                    <span>{item.name}</span>
                  </a>
                </li>
              ))
            }

          </ul>


        </div>:null}


      </div>
    )
  }
}