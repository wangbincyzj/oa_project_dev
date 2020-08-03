

/*房屋定金管理  定金退款 */
import { requests } from "@/api";
import { requests8083 } from "../jianguan";


/**
 * 定金缴存 分页查询
 * @param {*} current   页数
 * @param {*} size   每页条数
 * @param {*} djsyXmbh 项目编号
 */
let getfundUse = function (current, size, djsyXmbh) {
  return requests8083.get("data-presale-funds/fundUse/selectPage", {
    current, size,djsyXmbh
  })
}

/**
 *定金明细
 */
let getfundUseDetail = function (id) {   //,zjjgzhShzt=3
  return requests8083.get("data-presale-funds/fundUse/selectOne", {
     id
  })
}

/**
 * 编辑定金退款
 * 
 * @param {*} id   定金id
 */
let updatefundUse = function (_form) {
  return requests8083.post("data-presale-funds/fundUse/update", _form)
}





/**
 * 上报
 * @param {*} id  定金退款id
 */
let confirmFundUse = function (id) {
  return requests8083.get("data-presale-funds/fundUse/submit",{id})
}


/**
 * 删除
 * @param {*} id  定金退款id
 */
let deleteFundUse = function (id) {
  return requests8083.get("data-presale-funds/fundUse/delete",{id})
}

/**
 * 根据定金退款Id查询拨付单信息
 */
let getBfdDetail = function (djsyId) {
  return requests8083.get("data-presale-funds/fundUse/getPaymentNote", {djsyId})
}


export const djtkglApi = {
  getfundUse,
  getfundUseDetail,
  updatefundUse,
  confirmFundUse,
  deleteFundUse,
  getBfdDetail,
};
