import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './less/classify.less'
import {connect} from 'react-redux'
import ClassifyLeft from '../../components/ClassifyLeft/ClassifyLeft'
import ClassifyRight from '../../components/ClassifyRight/ClassifyRight'
import {getCategory} from '../../redux/actions'
 class Classify extends Component {
  state={
    index:0,
  }
   componentWillMount () {
     this.props.getCategory()

   }
   get(index){
    this.setState({
      index
    })


   }
  render() {
    return (
      <div id="classify">
        <header className={'classHeader'}>
          <div className="kong"></div>
          <div className="input">
            <Link className="server" to={'/main/serch'}>
            <i></i>搜索商品, 共10856款好物
            </Link>
          </div>
        </header>
        <div className="contenx"  >
          <ClassifyLeft category={this.props.category} get={this.get.bind(this)}/>
          <ClassifyRight category={this.props.category} index={this.state.index}/>


        </div>
      </div>
    )
  }
}
export default connect(
  state =>({
    category: state.category
  }),
  {
    getCategory
  }
)(Classify)