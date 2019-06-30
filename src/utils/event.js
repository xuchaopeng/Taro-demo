class Event {
  constructor() {
    this.events = {}
  }

  //监听
  on(eventName, callBack) {
    if (this.events[eventName]) {
      this.events[eventName].push(callBack)
    } else {
      this.events[eventName] = [callBack]
    }
  }
  //注册
  emit(eventName, params) {
    if (this.events[eventName]) {
      this.events[eventName].map((callBack) => {
        callBack(params)
      })
    }
  }
}

export default Event