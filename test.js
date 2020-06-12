let testForm = {
  a: {
    a1: "",
    a2: ""
  },
  b: "",
  c:{
    c1: "",
    c2: {
      c21: "",
      c22: ""
    }
  }
}

let ret = {
  a1: '456',
  a2: '789',
  b: '1123',
  c1: '123456',
  c21: '78789',
  c22: '123456789'
}

let myFunc = function (obj) {
  let result = {};
  Object.keys(obj).forEach(item=>{
    if(obj[item] instanceof Object){
      result = Object.assign({}, result, myFunc(obj[item]))
    }else{
      result[item] = obj[item]
    }
  })
  return result
}

let f2 = function(obj, obj2){
  Object.keys(obj).forEach(item=>{
    if(obj[item] instanceof Object){
      f2(obj[item], obj2)
    }else{
      obj[item] = obj2[item]
    }
  })
}

f2(testForm, ret)
console.log(testForm)

//console.log(myFunc(testForm))















