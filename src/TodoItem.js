import React ,  {Component} from "react";

class TodoItem extends Component{

  constructor(props){
    super(props);

    this.handleItemClick = this.handleItemClick.bind(this);

  }
  // 删除元素
  handleItemClick(e){
    // console.log(e)
    // 父组件通过属性的形式向子组件传递，子组件接受从父组件传过来的删除元素的方法
    // 子组件想和父组件通信，他要调用父组件传递过来的方法
    const {deleteFunction,index} = this.props;
    deleteFunction(index)
  }

  render(){
    // 子组件通过this.props属性从父组件接受传递过来的值
    const {content} = this.props;
    return <li onClick={this.handleItemClick}>{content}</li>
  }
}

export default TodoItem ;