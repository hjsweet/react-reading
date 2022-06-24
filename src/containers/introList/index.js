import React,{Component} from "react";
import {  List } from 'antd';
import axios from "axios";
import { withRouter } from "../../utils/withRouter"

// import {Link} from "react-router-dom"

// const data = [
//   'Racing car sprays burning fuel into crowd.',
//   'Japanese princess to wed commoner.',
//   'Australian walks 100km after outback crash.',
//   'Man charged over missing wedding girl.',
//   'Los Angeles battles huge wildfires.',
// ];

class IntroList extends Component{

  // // 拿到新的id，从新把id展现在页面
  // componentWillReceiveProps(nextProps){
  //   // const id = nextProps.match.params.id;
  //   axios.get('http://www.dell-lee.com/react/api/list.json?id=')
  //   .then(res =>{
  //     this.setState({
  //       data:res.data.data
  //     })
  //   })
  // }

  // 把数据写活
  // constructor(props){
  //   super(props);
  //   console.log('props :>> ', props)
  //   this.state = {
  //     data:[]
  //   }
  // }

  // 上面这种constructor 可以简写
  state = {
    data: []
  }

  /**
   * @description: 获取列表数据
   * @return {*}
   */  
  fetchList() {
    const id = this.state.id;
    axios.get('http://www.dell-lee.com/react/api/list.json?id=' + id)
    .then(res =>{
      this.setState({
        data:res.data.data
      })
    })
  }

  /**
   * @description: react新生命周期 (>= 16.4版本)
   * @param {*} props
   * @param {*} state
   * @return {*}
   */  
  static getDerivedStateFromProps (props,state){
    console.log('创建/更新阶段--设置state shouldComponentUpdate')

    console.log('props :>> ', props);
    return {
      id: props.params.id
    }
  }

  /**
   * @description: 判断是否重新渲染的生命周期
   * @param {*} props
   * @param {*} state
   * @return {*}
   */  
  shouldComponentUpdate(props,state){
    console.log('更新阶段--是否重新渲染 shouldComponentUpdate')
    if(state.id !== this.state.id){
      return true;

    }

    return false;
  }

  componentDidUpdate(){
    console.log('更新阶段--更新完成 componentDidUpdate')
    this.fetchList();
  }

  // 从接口处拿到数据
  componentDidMount(){
    console.log('创建阶段--创建完成 componentDidMount')
    console.log('state ', this.state)
    this.fetchList();
  }

  render(){
    console.log('渲染阶段--渲染页面')
    // console.log('打印ID',this.props.match.params.id)
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

}

export default withRouter(IntroList);
