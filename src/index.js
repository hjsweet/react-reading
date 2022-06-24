import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import 'antd/dist/antd.css';
import {Routes,Route} from 'react-router-dom'

// import TodoList from './TodoList'; 做一个增减示例
// 实验props，state,render的使用
import Counter from './counter'  
import NewBtn from './newBtn';
// import Life from './life'

class Entry extends Component{
  render(){
    return(
      <Routes>
        {/* 访问form路径，到达Counter组件内容 */}
        <Route path='/form'  Component={Counter}/>
        <Route path='/btn' Component={NewBtn}/>
      </Routes>
    )
  }
}

ReactDOM.render(<Entry></Entry>,document.getElementById('root'))


