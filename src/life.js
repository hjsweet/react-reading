import React,{Component} from "react";

class Life extends Component{

  handleClick(){
    console.log('window click')
  }

  // 监听生命周期函数
  componentWillMount(){
    window.addEventListener('click',this.handleClick())
  }

  render(){
    return(
      <div>111</div>
    )
  }

  // 重点函数：移除事件监听
  componentWillUnmount(){
    window.removeEventListener('click',() =>{
      console.log('window click')
    })
  }
}

export default Life;