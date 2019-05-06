import Taro, { Component, Config, MapContext } from '@tarojs/taro'

import { Map, CoverView,Canvas,View,Image,CoverImage,Button,Text } from '@tarojs/components'

import {BASE_URL,globalData,PATH,systemUser} from '../../config/index.js'; 

import './service.scss'

interface IState {
    loginImg:string,
    serverImg1:string,
    serverImg2:string,
    serverImg3:string,
    serverImg4:string
}

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class Login extends Component<{}, IState>{

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config = {
    navigationBarTitleText:'会员注册'
  }
  constructor (props: {} | undefined) {
    super(props)
    this.state = {
        loginImg:PATH+'/mImages/loginImg.png',
        serverImg1:PATH+'/mImages/lxkf-1.png',
        serverImg2:PATH+'/mImages/lxkf-2.png',
        serverImg3:PATH+'/mImages/lxkf-3.png',
        serverImg4:PATH+'/mImages/lxkf-4.png'
    }
}


  componentWillMount(){
    
  }
  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
        <View>
           <View className='severDiv'>
               <View className='main clearfix'>
                   <View className='serverTitle'>请选择服务类型</View>
                   <View className='box'>
                     <Image className='serverImg' src={this.state.serverImg1}/>
                     <View className='boxtitle'>订单计算错误</View>
                   </View>
                   <View className='box'>
                   <Image className='serverImg' src={this.state.serverImg2}/>
                     <View className='boxtitle'>账号储值问题</View>
                    </View>
                   <View className='box'>
                   <Image className='serverImg' src={this.state.serverImg3}/>
                       <View className='boxtitle'>货柜门打不开</View>
                   </View>
                   <View className='box'>
                   <Image className='serverImg' src={this.state.serverImg4}/>
                    <View className='boxtitle'>货柜门无法锁上</View>
                   </View>
               </View>
               <Button type='default' className='loginBtn Btn'>提交</Button>
           </View> 
        </View>
    )
  }
}

