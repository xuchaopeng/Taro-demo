import Taro, { Component } from '@tarojs/taro'
import { View, Image, Button, Text } from '@tarojs/components'
import './foodlist.less'

class FoodList extends Component {
  constructor() {
    super(...arguments)
    this.state = {}
  }

  render() {
    let { currentList, selectCate } = this.props
    console.log(currentList)
    return (<View className='foodlist'>
      <Text>{selectCate ? selectCate.name : ''}</Text>
      <View className="foodlist_forlist">
        {
          currentList.map((item, index) => {
            return (<View key={item.id} className="foodlist_item">
              <Image src={require(`../../assets/image/${item.img}.jpg`)} className="foodlist_item_img"></Image>
              <View className="foodlist_item_info">
                <Text>{item.title || ''}</Text>
                <Text>月售:{item.sole}</Text>
                <Text className="price">{item.price}</Text>
              </View>
            </View>)
          })
        }
      </View>

    </View>)
  }
}

export default FoodList