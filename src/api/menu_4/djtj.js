/*房屋定金管理  定金退款 */
import { requests } from "@/api";
import { requests8083 } from "../jianguan";


/**
 * 定金缴存 分页查询
 * @param {*} current   页数
 * @param {*} size   每页条数
 * @param {*} djsyXmbh 项目编号
 */
let getDeposit = function (jgzh) {
  return requests8083.get("data-presale-funds/deposit/selectCount", {
     jgzh,
  })
}

/**
 * 定金缴存 分页查询
 * @param {*} current   页数
 * @param {*} size   每页条数
 * @param {*} djsyXmbh 项目编号
 */
let getDepositByCondition1 = function (jgzh,djDgrxm,djDgrzjhm,JKstartTime,JKendTime) {
    return requests8083.get("data-presale-funds/deposit/selectCount", {
     jgzh,djDgrxm,djDgrzjhm,JKstartTime,JKendTime
    })
  }

/**
 * 定金缴存 分页查询
 * @param {*} current   页数
 * @param {*} size   每页条数
 * @param {*} djsyXmbh 项目编号
 */
let getDepositByCondition2 = function (jgzh,djsySqrxm,FFstartTime,FFendTime) {
    return requests8083.get("data-presale-funds/deposit/selectCount", {
      jgzh,djsySqrxm,FFstartTime,FFendTime
    })
  }

/**
 *资金监管账户
 */
let getAccount = function (xmxxXmbh) {   //,zjjgzhShzt=3
  return requests8083.get("data-presale-funds/supervisedAccount/list", {
     xmxxXmbh
  })
}

/**
 * 退款
 * 
 * @param {*} id   定金id
 */
let addfundUse = function (_form) {
  return requests8083.post("data-presale-funds/fundUse/save", _form)
}





/**
 * 定金退款主键查询
 * @param {*} id  定金退款id
 */
let getAccountInfoById = function (id) {
  return requests8083.get("data-presale-funds/fundUse/selectOne", {id})
}



/**
 * 定金退款管理修改
 * @param {*} _form 
 */
let geteditData = function (_form) {
  return requests8083.post("data-presale-funds/fundUse/update",_form)
}


/**
 * 上报
 * @param {*} id  定金退款id
 */
let getReportData = function (id) {
  return requests8083.get("data-presale-funds/fundUse/submit",{id})
}


/**
 * 删除
 * @param {*} id  定金退款id
 */
let getDeleteData = function (id) {
  return requests8083.get("data-presale-funds/fundUse/delete",{id})
}




let getstatisticsData = function (jgzh) {
  return requests8083.get("data-presale-funds/deposit/selectCount",{jgzh})
}


/**
* 房屋定金退款
* 房屋定金退款管理
* 房屋定金统计
*/
export const djtjApi = {
  getAccount,
  getDeposit,
  getDepositByCondition1,
  getDepositByCondition2,
  
};
