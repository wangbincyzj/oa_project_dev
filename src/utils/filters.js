/*过滤器*/

/**
 * 审核状态过滤器
 * @param val  0:新建 1:上报 2:通过 3:驳回
 */
let shztFilter = function (val) {
  val = parseInt(val);
  switch (val) {
    case 0: return "新建";
    case 1: return "上报";
    case 2: return "通过";
    case 3: return "驳回";
    default: return "其他状态"
  }
}



export const filters = {
  shztFilter
}