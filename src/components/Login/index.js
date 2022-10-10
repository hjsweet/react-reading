import React, {Component} from "react";
import {Button,Modal,Input,message } from 'antd';
import axios  from "axios";
import {Link} from 'react-router-dom'

import './style.css'


class Login extends Component{
  constructor(props){
    super(props);
    this.showModal = this.showModal.bind(this)
    this.hideModal = this.hideModal.bind(this)
    this.changeUser= this.changeUser.bind(this)
    this.changePassword = this.changePassword.bind(this)
    this.checkLogin = this.checkLogin.bind(this)
    this.logOut = this.logOut.bind(this)
    this.state={
      login: false,
      modal:false,
      user:'',
      password:''
    }
  }

  // 打开登录弹窗
  showModal(){
    this.setState({
      modal:true
    })
  }

  // 关闭登录弹窗
  hideModal(){
    this.setState({
      modal:false
    })
  }

  // 拿到输入的用户名
  changeUser(e){
    // console.log(e.target.value)
    this.setState({
      user:e.target.value
    })
  }
  // 拿到输入的密码
  changePassword(e){
    this.setState({
      password:e.target.value
    })
  }
  // 检验登录
  checkLogin(){
    const {user,password} = this.state;
     // console.log(user,password)

    // 定义并请求登录接口
    const url = `http://www.dell-lee.com/react/api/login.json?user=${user}&password=${password}`
    axios.get(url,{
      withCredentials:true
    }).then(res =>{
      // console.log(res.data)
      // const login = res.data.data.login
      const login = res.data.data.login;
      // alert(login);
      if(login){
        message.success('登陆成功');
        // 成功之后去转到页面
        this.setState({
          login:true,
          modal:false
        })
      }else{
        message.error('登录失败')
      }

    })
  }

  // 退出登录
  logOut(){
    axios.get('http://www.dell-lee.com/react/api/logout.json',{
      withCredentials:true
    })
    .then(res =>
      {
        console.log(res.data)
        const data = res.data.data;
        if(data.logout){
          this.setState({
            login:false
          })
        }

      }
    )
  }


  render(){
    const {login} = this.state
    return(
      <div className="login">
        {
          // 此处来进行判断，若是未登录状态则显示登录按钮
          login ?
          <Button  className="login-btn" onClick={this.logOut}>退出</Button>:
          <Button type="primary" onClick={this.showModal}>登录</Button>
        }
        {
          login &&
            <Link to={'./vip'}>
              <Button type="primary" style={{marginLeft:10}}>Vip</Button>
            </Link>
        }

        <Modal title="登录"  visible={this.state.modal} onOk={this.checkLogin} onCancel={this.hideModal}>
          <Input placeholder="请输入用户名"  style={{marginBottom:10}} value={this.state.user} onChange={this.changeUser}></Input>
          <Input placeholder="请输入密码" type="password" value={this.state.password} onChange={this.changePassword}></Input>
        </Modal>

      </div>
    )
  }

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

export default Login;
