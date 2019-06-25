import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import Top from './top'
import './head.less'
class Head extends Component {
  render() {
    return (<View className='head'>
      <Top />
      <View className='backtu'>
        <Image className='img' src={require('../../assets/image/backtu.jpg')} />
      </View>
      <View className='store'></View>
    </View>)
  }
}

export default Head