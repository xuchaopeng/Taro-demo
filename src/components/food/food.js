import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import Cata from './cata'
import FoodList from './foodlist'
class Food extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      current: 0,
      tabList: [{ title: '点菜' }, { title: '评价' }, { title: '商家' }]
    }
  }
  changeTab(value) {
    this.setState({ current: value })
  }
  render() {
    let { current, tabList } = this.state;
    return (<View>
      <AtTabs current={current} tabList={tabList} onClick={this.changeTab.bind(this)}>
        <AtTabsPane>
          <View className="food_body">
            <Cata /><FoodList />
          </View>
        </AtTabsPane>
        <AtTabsPane>评价</AtTabsPane>
        <AtTabsPane>商家</AtTabsPane>
      </AtTabs>
    </View>)
  }
}

export default Food