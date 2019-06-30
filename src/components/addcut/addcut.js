import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { getFoodCount, setFoodCount, getEvent } from '../../utils/common'
import './addcut.less'
let myEvent = getEvent();
class AddCut extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      num: 0
    }
  }

  componentDidMount() {
    this.setState({
      num: getFoodCount(this.props.food)
    })
    myEvent.on('changeCate', () => {
      this.setState({
        num: getFoodCount(this.props.food)
      })
    })
  }

  CutFood() {
    if (this.props.food) {
      if (this.state.num > 0) {
        setFoodCount(this.props.food, this.state.num, 'cut', () => {
          this.setState({
            num: getFoodCount(this.props.food)
          });
          myEvent.emit('addCut');
        })

      } else {
        console.error('当前加减菜品出现异常')
      }
    }
  }

  AddFood() {
    if (this.props.food) {
      setFoodCount(this.props.food, this.state.num, 'add', () => {
        this.setState({
          num: getFoodCount(this.props.food)
        });
        myEvent.emit('addCut');
      })

    }
  }

  render() {
    let { num } = this.state;
    let hideClass = num > 0 ? '' : 'hide';
    return (<View className="addcut">
      <Image onClick={this.CutFood.bind(this)} className={"opeate_img " + hideClass} src={require('../../assets/image/cut.png')}></Image>
      <Text className={"food_num " + hideClass}>{this.state.num}</Text>
      <Image onClick={this.AddFood.bind(this)} className="opeate_img" src={require('../../assets/image/add.png')}></Image>
    </View>)
  }
}

AddCut.defaultProps = {
  food:null
}
export default AddCut