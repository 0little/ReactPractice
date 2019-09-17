
const GOODS_LIST = (() => {
  let srcArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'Z', 'A', 'E', 'G', 'q', 'm', 'R']
  let res = []
  for(let index= 0 ; index < 200; index++) {
    let name = srcArr[Math.floor(Math.random()*14)] +
      srcArr[Math.floor(Math.random()*14)] +
      srcArr[Math.floor(Math.random()*14)] +
      srcArr[Math.floor(Math.random()*14)],
      price = Math.floor(Math.random() * 200)

    res.push({
      name: name,
      price: price,
      id: index
    })
  }
  return res
})()


export const goodsList = (state = GOODS_LIST, action) => {
  return state
}

export const myCart = (state = [], action) => {
  switch (action.type) {
    case 'DECREASE_COUNT':
      let index = state.findIndex(item => item.id === action.id)
      // console.log(action.id, 'iiiiiiiiiiiiii')
      if ((--state[index].count) <= 0) {
        state.splice(index, 1)
      }
      // return state
      return JSON.parse(JSON.stringify(state))
    case 'ADD_COUNT':
      let addOne = state.find(item => item.id === action.id)
      if (addOne) {
        addOne.count++
      } else {
        let item = GOODS_LIST.find(item => item.id === action.id)
        state.push({...item, count: 1})
      }
      return JSON.parse(JSON.stringify(state))
    default:
      return JSON.parse(JSON.stringify(state))
  }
}

// export default combineReducers({goodsList, myCart})