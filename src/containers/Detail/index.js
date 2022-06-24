import React,{Component} from "react";
import { Card } from 'antd';
import axios from "axios";

class Detail extends Component{

  constructor(props){
    super(props);
    this.state = {
      title:'',
      content:''
    }
  }
  render(){
    return(
      // <div>{this.props.match.params.id}</div>
      <Card title={this.state.title}>
        {/* 用dangerouslySetInnerHTML函数将原本的样式夜也展现出来 */}
        <div dangerouslySetInnerHTML={{__html:this.state.content}}></div>
      </Card>
    )
  }

  componentDidMount(){
    // const id = this.props.match.params.id
    axios.get('http://www.dell-lee.com/react/api/detail.json')
    .then(res =>{
      // console.log('打印详情',res.data);
      // this.setState({
      //   title:res.data.data.title,
      //   content:res.data.data.content
      // })

      // 这样直接用是上面的简写
      const data = res.data.data;
      this.setState(data)
    })
  }
}

export default Detail;
