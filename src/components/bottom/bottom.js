import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { getAllFoodInfo, getEvent } from '../../utils/common'
import './bottom.less'

let event = getEvent();
class Bottom extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      num: 1,
      sendPrice: 3,
      supportTakeBySelf: false,
      sendMustPrice: 20,
      allPrice: 0
    }
  }

  componentDidMount() {
    //获取计算好的设置给state
    let { allPrice, allNum } = getAllFoodInfo();
    this.setState({
      num: allNum,
      allPrice: allPrice
    })
    //事件池监听
    event.on('addCut', () => {
      let { allPrice, allNum } = getAllFoodInfo();
      this.setState({
        num: allNum,
        allPrice: allPrice
      })
    })
  }

  render() {
    let { num, sendPrice, supportTakeBySelf, sendMustPrice, allPrice } = this.state;
    return (<View className="bottom">
      <View className="bottom_body">
        {num ? <Text className="num">{num}</Text> : null}
        <Image className="store_img" src={num ? require('../../assets/image/foodstore.png') : require('../../assets/image/emptystore.png')}></Image>
        <View className="info">
          {allPrice ? (<Text className="price">{'￥' + allPrice}</Text>) : (<Text>{sendPrice ? '另需配送费￥' + sendPrice + ' | ' : ''}</Text>)}
          <Text>{supportTakeBySelf ? '支持自取' : '不支持自取'}</Text>
        </View>
        <View className="submit">{allPrice >= 20 ? <Text className="goPay">去结算</Text> : <Text>{sendMustPrice ? '￥' + sendMustPrice + '起送' : ''}</Text>}</View>
      </View>
    </View>)
  }
}

export default Bottom;