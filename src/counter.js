import React, {Component} from "react";
// import Child from "./child";
// import axios  from "axios";
import { Button,Checkbox, Form, Input } from 'antd';


class Counter extends Component{

  // 定义数据
  constructor(props){
    super(props);
   
    // 给handleBtnClick指向做一个修改
    this.handleBtnClick = this.handleBtnClick.bind(this)
    
    this.state = {
      counter:1
    }
  }

  // 定义增加函数
  handleBtnClick(){
     // 使用ref标签获取原生dom节点
     console.log(this.buttonElem) 
    // 定义操作
    const newCounter = this.state.counter + 1;
    this.setState({
      counter:newCounter
    })
  }

  
  render(){
    // 组件第一次渲染的时候render会被默认执行一次；当state发生变化时render也会执行一次;当props发生变化时，render也会被执行一次
    // console.log('render')
    // 打印来自于newBtn带过来得值
    console.log(this.props.location.search)
    return(
      // <Fragment>
      //   <Button 
      //   type="primary"
      //   >增加</Button>
      //   {/* <Child number = {this.state.counter}></Child> */}
      // </Fragment>
      <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    )
  }
  // 重点生命周期函数！发送axios请求,获取数据
  // componentDidMount(){
  //   const promise = axios.get('');
  //   promise.then((res)=>{
  //     console.log(res.data)
  //   })
  // }

}

export  default Counter;