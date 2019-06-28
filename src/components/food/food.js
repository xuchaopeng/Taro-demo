import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import Cata from './cata'
import FoodList from './foodlist'
import './food.less'
//子组件之间传值，通过事件监听、父组件、reducer
class Food extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      current: 0,
      tabList: [{ title: '点菜' }, { title: '评价' }, { title: '商家' }],
      foodList: [],
      currentList: [],
      selectCate: null
    }
  }
  changeTab(value) {
    this.setState({ current: value })
  }
  //切换分类
  changeCate(selectCate) {
    this.setState({ selectCate: selectCate });
    if (this.state.foodList.some((item) => item.pid === selectCate.id)) {
      //不用加载数据
      this.setState({
        currentList: this.state.foodList.filter(item => item.pid === selectCate.id)
      })
    } else {
      //加载数据
      this.setState({
        foodList: this.state.foodList.concat(this.getDate(selectCate))
      }, () => {

        this.setState({
          currentList: this.state.foodList.filter(item => item.pid === selectCate.id)
        });
      })
    }
  }
  getDate(selectCate) {
    let count = Math.round(Math.random() * 2);
    return Array.from(Array(Math.round(Math.random() * 20)), (v, k) => ({ sole: Math.round(Math.random() * 50), price: Math.round(Math.random() * 20), img: count, pid: selectCate.id, id: selectCate.id + '_' + k, title: '分类' + selectCate.id + '菜品' + (k + 1) }));
  }
  render() {
    let { current, tabList, currentList, selectCate } = this.state;
    return (<View>
      <AtTabs current={current} tabList={tabList} onClick={this.changeTab.bind(this)}>
        <AtTabsPane>
          <View className="food_body">
            <Cata onChangeCate={this.changeCate.bind(this)} /><FoodList selectCate={selectCate} currentList={currentList} />
          </View>
        </AtTabsPane>
        <AtTabsPane>评价</AtTabsPane>
        <AtTabsPane>商家</AtTabsPane>
      </AtTabs>
    </View>)
  }
}

export default Food