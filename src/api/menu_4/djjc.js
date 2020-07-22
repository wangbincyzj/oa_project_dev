/*房屋定金管理*/
import { requests } from "@/api";
import { requests8083 } from "../jianguan"

/**
 *资金监账户
 */
let getAccount = function (xmxxXmbh) {   //,zjjgzhShzt=3
  return requests8083.get("data-presale-funds/supervisedAccount/list", {
     xmxxXmbh
  })
}
/**
 *资金监账户详情
 */
let getAccountDetail = function (id) {   
    return requests8083.get("data-presale-funds/supervisedAccount/selectById", {
       id
    })
  }

/**
 *定金详情
 */
let getDepositDetail = function (id) {   
    return requests8083.get("data-presale-funds/deposit/selectOne", {
       id
    })
  }

/**
 * 分页查询
 * @param page
 * @param size
 * 
 * @returns {Promise<AxiosResponse<any>>}
 */
let getDepositByAccount = function (page, size = 20,djJkyhzh) {
    return requests8083.get("data-presale-funds/deposit/selectPage", {
      current: page, size,djJkyhzh
    })
  }

/**
 * 新增定金缴存
 */
let addDeposit = function (_form) {
    return requests8083.post("data-presale-funds/deposit/save", _form)
  }

/**
 * 修改定金缴存
 */
let updateDeposit = function (_form) {
    return requests8083.post("data-presale-funds/deposit/update", _form)
  }

/**
 * 上报定金缴存
 * @param {*} 
 */
let confirmDeposit = function (id) {
    return requests8083.get("data-presale-funds/deposit/submit", {id})
}

/**
 * 删除定金缴存
 * @param {*} 
 */
let deleteDeposit = function (id) {
    return requests8083.get("data-presale-funds/deposit/delete", {id})
}

export const djjcApi ={
  getAccount,
  getAccountDetail,
  getDepositByAccount,
  addDeposit,
  updateDeposit,
  getDepositDetail,
  confirmDeposit,
  deleteDeposit

};

