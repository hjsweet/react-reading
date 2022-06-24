import React,{Component,Fragment} from "react";
import './style.css'
// Fragment只是一个占位标签
// react操作数据
import TodoItem from "./TodoItem";


class TodoList extends Component{
  // 写一个新的构造函数来定义，组件创建最初始的时间constructor会首先执行
  constructor (props){
  super (props);
  // 在组建中创建两个数据，这个数据一定要定义在state中
  this.state = {
    inputValue:'',
    list:[]
    }
  };
  handleInputChange(e){
    console.log(e.target.value)
    // 如果想改变数据，要调动setState这个函数
    this.setState({
      inputValue:e.target.value
    })
  };

  // 新增元素
  handleKeyUp(e){
    // console.log(e.keyCode)
    // keyCode为13代表按下了回车键
    if (e.keyCode === 13 && e.target.value !==''){
      const newList = [...this.state.list,this.state.inputValue]
      // console.log(newList)
      this.setState({
        list:newList,
        inputValue:'',
      })
    }
  };

  // 删除元素
  handleItemClick(index){
    // alert(index);
    const newList = [...this.state.list];
    newList.splice(index,1);
    this.setState({
      list:newList
    })
  }

  // 列表循环
  getListItems(){
    return this.state.list.map((value,index)=>{
      // // 遍历循环Li
      // return(
      //   <li key={index} 
      //     onClick={this.handleItemClick.bind(this,index)}>
      //   {value}
      //   </li>
      // ) 
      return(
        // 父组件通过属性的形式向子组件传值
        <TodoItem 
        content={value} 
        key={index}
        index={index}
        deleteFunction={this.handleItemClick}
        ></TodoItem>
      )
  })
  }
  render(){
    // 这边直接写注释，因为不在JSX中
    return(
      // 页面内容
      <Fragment>
        {/* 这是一个label,这是JSX中一个注释标准 */}
        <label htmiFor='myinput'>请输入内容:</label>
        <input  id='myinput'
        className="input" value={this.state.inputValue} 
        onChange={this.handleInputChange.bind(this)} 
        onKeyUp={this.handleKeyUp.bind(this)}/>
        <ul>
          {
             this.getListItems() 
          }
        </ul>
      </Fragment>
    )
  }
}

export default TodoList;