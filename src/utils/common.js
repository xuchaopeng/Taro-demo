import Taro from '@tarojs/taro';
import Event from './event';
let myEvent = new Event();
const foodKey = 'taro_meituan';

export const getFoodCount = (food) => {
  let store = Taro.getStorageSync(foodKey);
  if (store && store[food.id]) {
    return store[food.id].num;
  } else {
    return 0;
  }
}

export const setFoodCount = (food, num, type, callback) => {
  if (food) {
    let store = Taro.getStorageSync(foodKey);
    if (!store) store = {};
    if (type == 'cut') {
      if (num == 1) {
        if (store[food.id]) {
          delete store[food.id]
        }
      } else {
        if (store[food.id]) {
          store[food.id].num = num - 1;
        }
      }
      Taro.setStorageSync(foodKey, store);
      callback && callback();
    }

    if (type == 'add') {
      //加菜逻辑
      if (store[food.id]) {
        store[food.id].num = num + 1;
      } else {
        store[food.id] = { num: 1, ...food }
      }
      Taro.setStorageSync(foodKey, store);
      callback && callback();
    }
  }
}

export const getEvent = () => {
  return myEvent;
}


export const getAllFoodInfo = () => {
  let allPrice = 0;//总价格
  let allNum = 0;//总数量
  let store = Taro.getStorageSync(foodKey);
  if (store) {
    Object.keys(store).map((key) => {
      if (store[key]) {
        allPrice += store[key].price * store[key].num;
        allNum += store[key].num;
      }
    })
  }
  return {
    allPrice,
    allNum
  }
}