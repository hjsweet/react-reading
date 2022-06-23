# 生命周期函数指的是组件在某一时刻会自动执行的函数
## 生命周期是针对组件的，在所有组件里一整个挂载流程执行过程 constructor-componentWillMount-render-componentDidMount
# 在挂载阶段
# 挂载的阶段mounting：有componentWillMount-render-componentDidMount的执行顺序
# 依次是即将挂载-要渲染了-挂载完毕

# 在更新阶段updation
# 数据发生变化时，props和states会被执行
# 更新前自动执行shouldComponentUpdata,要求返回布尔值return true

# 组件移除前Unmounting

### 项目疑问：路由和控制权限，antd样式修改

# saas语法：
## 定义变量