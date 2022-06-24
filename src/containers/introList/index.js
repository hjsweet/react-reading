import React,{Component} from "react";
import {  List } from 'antd';
import axios from "axios";

// import {Link} from "react-router-dom"

// const data = [
//   'Racing car sprays burning fuel into crowd.',
//   'Japanese princess to wed commoner.',
//   'Australian walks 100km after outback crash.',
//   'Man charged over missing wedding girl.',
//   'Los Angeles battles huge wildfires.',
// ];

class introList extends Component{

  // 拿到新的id，从新把id展现在页面
  componentWillReceiveProps(nextProps){
    // const id = nextProps.match.params.id;
    axios.get('http://www.dell-lee.com/react/api/list.json?id=')
    .then(res =>{
      this.setState({
        data:res.data.data
      })
    })
  }

  // 把数据写活
  constructor(props){
    super(props);
    this.state = {
      data:[]
    }
  }
  render(){
    console.log('打印ID',this.props.match.params.id)
    return(
    <List
      style={{background:'#fff'}}
      bordered
      dataSource={this.state.data}
      renderItem={item => (
        <List.Item>
           {item.title}
          {/* 给list加link，让其携带id跳到对应的detail页面 */}
          {/* <Link to={`/detail/${item.id}`}>
           
          </Link> */}
        </List.Item>
      )}
    />
    )
  }

  // 从接口处拿到数据
  componentDidMount(){
    const id = this.props.match.params.id
    axios.get('http://www.dell-lee.com/react/api/list.json?id=' + id)
    .then(res =>{
      this.setState({
        data:res.data.data
      })
    })
  }
}

export default introList;
