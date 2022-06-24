import React,{Component, Fragment}  from "react";
// import {Navigate} from   "react-router-dom";
import axios from "axios";
import './style.css'
import { Button } from "antd";

class Vip extends Component{

  constructor(props){
    super(props);
    this.handleTest = this.handleTest.bind(this)
    this.state={
      login:'',
      fetchFinsh:true,
      
      name:'hj',
      test:'16',
      testForm:[
        {
          id:0,
          age:'12'
        },
        {
          id:1,
          age:'13'
        },
        {
          id:2,
          age:'14'
        },
      ]
    }
  }

  handleTest(){
    // const html='';
    // for(let i=0;i<this.state.testForm.length;i++){
    //   html = `我是第${testForm.id},这是我的${testForm.age}次测试`
    // }
    console.log(this.state.testForm)
  }
  render(){
    // 根据登录权限决定展示页面
    // if(this.state.login){
    //   // 反应登录用户是否正确的时间
    //   if(this.state.fetchFinsh){
    //     <div className="vip">欢迎尊贵的vip客户</div> 
    //   }else{
    //     return <div>正在判断用户状态...</div>
    //   }
    // }else{
    //   return <Navigate to='/detail' />
    //   // alert('登录后才可查看vip内容')
    // }
    return(
      <Fragment>
        <div className="vip">vip</div>
        <div>我叫{this.state.name},我在做第{this.state.test}次测试</div>
        <Button onClick={this.handleTest}>测试</Button>
      </Fragment>
    )
  }

  //获取登录接口 
  componentDidMount(){
    axios.get('http://www.dell-lee.com/react/api/isLogin.json',{
      withCredentials:true
    })
    .then(res =>
      {
        // console.log("打印登录信息",res.data.data.login)
        const login = res.data.data.login;
        this.setState({
          login:login
        })
      }
    )
  }
}

export default Vip;