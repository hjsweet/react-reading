import React,{Component} from "react";

class Child  extends Component{
  render(){
    return(
      // 这个子组件接受来自counter父组件的值
      <div>{this.props.number}</div>
    )
  }
}

export default Child;