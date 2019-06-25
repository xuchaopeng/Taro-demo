import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'

class Child extends Component {
  clickHandle() {
    this.props.onchange()
  }
  render() {
    return (<View>
      <Button onClick={this.clickHandle}>上层事件</Button>
      <Text>{this.props.name}</Text>
    </View>)
  }
}
//1、props在组件内，是只读的
//2、自定义组件接收来自父组件的传值统称为props
//3、传递props的值是函数时，必须用on+函数名规范
Child.defaultProps = {
  name: 'xcp',
  onchange: null
}

export default Child;