import React, {Component,Fragment} from "react";
import logo from './logo.jpg';
import './style.css';
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import { Link } from "react-router-dom";

import axios  from "axios";

class AppHeader extends Component{

  // 构造一个函数
  constructor(props){
    super(props);
    this.state = {
      // 去遍历菜单，要是将menuList置空就去axios请求接口来获取内容
      menuList:[
        // {
        //   id:1,
        //   type:"constructor ",
        //   title:"宠物介绍"
        // },
        // {
        //   id:2,
        //   type:"eat",
        //   title:"吃"
        // },{
        //   id:3,
        //   type:"clothes",
        //   title:"穿"
        // },{
        //   id:4,
        //   type:"car",
        //   title:"行"
        // },
      ],
        menuJson:{
          1:'Detail',
          2:'Vip'
        }
    }
  }
  // 遍历菜单的方法，用map
  getMenuItem(){
    console.log('打印菜单',this.state.menuList,this.state.menuJson)
      let {menuJson}=this.state
    // 遍历之后还需要再return一下
    return this.state.menuList.map(item =>{
      return(
        <Menu.Item key={item.id}  >
          {/* 跳转到根路径的对应的id */}
          <Link to={`/${item.id}`}>
            {item.title}
          </Link>
          {/*<Link to={`/${menuJson[item.id]}`}>*/}
          {/*  {item.title}*/}
          {/*</Link>*/}
        </Menu.Item>
      )
    })
  }

  //在componentDidMount生命周期函数里执行ajax请求
  componentDidMount(){
    axios.get('http://www.dell-lee.com/react/api/header.json')
    .then((res)=>{
      console.log(res.data.data,'componentDidMount')
      // 用setState改变menuList的值
      this.setState({
        menuList:res.data.data
      })
    })
  }

  render(){
    return(
      <Fragment>
        {/* 加一个link标签点击她的时候就可以回到该to链接的位置 */}
        <Link to='/'>
          <img src={logo} alt='logo' className="app-header-logo" />
        </Link>
        <span className="app-header-title">Reading</span>
        <Menu mode="horizontal"  className="app-header-menu">
          {/* <Menu.Item key="introduce" icon={<MailOutlined />}>宠物介绍</Menu.Item>
          <Menu.Item key="eat" icon={<MailOutlined />}>吃</Menu.Item>
          <Menu.Item key="clothes" icon={<MailOutlined />}>穿</Menu.Item>
          <Menu.Item key="car" icon={<MailOutlined />}>行</Menu.Item> */}
          {this.getMenuItem()}
        </Menu>
     </Fragment>
    )
  }
}

export default AppHeader;
