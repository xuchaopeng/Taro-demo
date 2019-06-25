import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './activity.less'

class Activity extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      activity: [
        {
          type: 'cut',
          info: [
            {
              total: 48,
              cut: 10
            },
            {
              total: 58,
              cut: 15
            },
            {
              total: 100,
              cut: 30
            }
          ]
        }
      ]
    }
  }
  render() {
    return (<View className='activity'>
      <Text className="type">减</Text>
      <Text>满48减10;满58减15</Text>
      <Text className="length">3个活动</Text>
    </View>)
  }
}
export default Activity;