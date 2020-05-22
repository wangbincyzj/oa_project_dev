// 防抖函数

function debounce(func, wait) {
  let timer;
  return function() {
    let context = this; // 注意 this 指向
    let args = arguments; // arguments中存着e

    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      func.apply(this, args)
    }, wait)
  }
}

export const jsUtils = {
  debounce
}