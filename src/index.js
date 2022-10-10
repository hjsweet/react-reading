import React, { Component }  from 'react';
import  ReactDOM  from 'react-dom';
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import 'antd/dist/antd.css';
import { Layout, } from 'antd';

import './style.css'

import AppHeader from './components/Header';
import AppFooter from './components/Footer';
import Login from './components/Login';


// 在content内容里引入的两个组件
import IntroList from './containers/introList';
import Detail from './containers/Detail';

import Vip from './containers/Vip'


const { Header, Footer, Content } = Layout;

class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <Layout style={{minWidth:1080,height:'100%'}}>
          <Header className='header'><AppHeader/> <Login className='login'></Login></Header>
          <Content className='content'>
            <Routes>
              <Route path='/:id?' element={<IntroList/>}/>
              {/*<Route path='/:id?' element={<IntroList/>}/>*/}
              <Route path='/vip' element={<Vip/>}/>
              <Route path='/detail' element={<Detail />}/>
            </Routes>
          </Content>
          <Footer className='footer'>
            <AppFooter></AppFooter>
          </Footer>
      </Layout>
    </BrowserRouter>
    )
  }
}


ReactDOM.render(<App/>,document.getElementById('root'))
