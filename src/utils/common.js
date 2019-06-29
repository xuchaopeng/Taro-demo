import Taro from '@tarojs/taro';
const foodKey = 'taro_meituan';

export const getFoodCount = (food) => {
  let store = Taro.getStorageSync(foodKey);
  if (store) {
    //查找
    if (store[food.id]) {
      return store[food.id].num
    } else {
      return 0;
    }
  } else {
    return 0;
  }
}

export const setFoodCount = (food, num, type, callback) => {

}