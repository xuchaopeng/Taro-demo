import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './top.less'

class Top extends Component {
  render() {
    return (<View className='top'>
      <View className='left'>
        <Image className='img' src={require('../../assets/image/back.png')} />
      </View>
      <View className='right'>
        <Image className='img' src={require('../../assets/image/search.png')} />
        <Image className='img' src={require('../../assets/image/xing.png')} />
        <Image className='img' src={require('../../assets/image/ping.png')} />
        <Image className='img' src={require('../../assets/image/more.png')} />
      </View>
    </View>)
  }
}

export default Top