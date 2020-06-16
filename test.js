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

// f2(testForm, ret)
// console.log(testForm)

//console.log(myFunc(testForm))


let digitUppercase = function(n) {
  var fraction = ['角', '分'];
  var digit = [
    '零', '壹', '贰', '叁', '肆',
    '伍', '陆', '柒', '捌', '玖'
  ];
  var unit = [
    ['元', '万', '亿'],
    ['', '拾', '佰', '仟']
  ];
  var head = n < 0 ? '欠' : '';
  n = Math.abs(n);
  var s = '';
  for (var i = 0; i < fraction.length; i++) {
    s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
  }
  s = s || '整';
  n = Math.floor(n);
  for (var i = 0; i < unit[0].length && n > 0; i++) {
    var p = '';
    for (var j = 0; j < unit[1].length && n > 0; j++) {
      p = digit[n % 10] + unit[1][j] + p;
      n = Math.floor(n / 10);
    }
    s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
  }
  let ret = head + s.replace(/(零.)*零元/, '元')
    .replace(/(零.)+/g, '零')
    .replace(/^整$/, '零元整');
  return ret.replace("元整", "")
}


console.log(digitUppercase("adsf"))




let a = "abc"
console.log(a*1)

function isNum(n) {
  return !Number.isNaN(n*1)
}

console.log(isNum("abcd"))



