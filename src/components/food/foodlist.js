import Taro, { Component } from '@tarojs/taro';
import { View, Image, Button, Text } from '@tarojs/components';
import AddCut from '../addcut/addcut';
import './foodlist.less';

class FoodList extends Component {
  constructor() {
    super(...arguments)
    this.state = {}
  }

  render() {
    let { currentList, selectCate } = this.props
    return (<View className='foodlist'>
      <Text>{selectCate ? selectCate.name : ''}</Text>
      <View className="foodlist_forlist">
        {
          currentList.map((item, index) => {
            return (<View key={item.id} className="foodlist_item">
              <Image src={require('../../assets/image/1.jpg')} className="foodlist_item_img"></Image>
              <View className="foodlist_item_info">
                <Text>{item.title || ''}</Text>
                <Text>月售:{item.sole}</Text>
                <Text className="price">￥{item.price}</Text>
                <AddCut food={item} />
              </View>
            </View>)
          })
        }
      </View>

    </View>)
  }
}

FoodList.defaultProps = {
  currentList: [],
  selectCate: null
}

export default FoodList