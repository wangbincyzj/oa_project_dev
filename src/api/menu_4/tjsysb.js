/*添加使用申报*/
import {requests} from "@/api";
import { requests8083 } from "../jianguan";


/**
 * 查询账户
 * 
 */
let gethbAccountByXmbh = function(page, size = 20,xmxxXmbh,hbzhRkzt=1,hbzhZhmc=null,hbzhBgzt=null,){
  return requests8083.get("data-presale-funds/transfer/selectPage", { 
      current: page, size,xmxxXmbh,hbzhRkzt,hbzhZhmc,hbzhBgzt})
}


/**
 * 分页查询楼栋信息
 * 
 */
let getBuildingByXmbh = function(page, size = 20,xmbh){
    return requests8083.get("data-presale-funds/shiyong/getLdFundsList", { 
        current: page, size,xmbh})
  }

/**
 * 根据楼栋编号查询监管账户
 * 
 */
let getAccountByLd = function(kfsId,zjjgzhLdbh){
    return requests8083.get("data-presale-funds/supervisedAccount/list", {kfsId,zjjgzhLdbh})
  }

/**
 * 新增申报
 */
let addSysb = function (_form) {
  return requests8083.post("data-presale-funds/", _form)
}


/**
 * 删除账户
 * @param id
 * @returns {Promise<AxiosResponse<any>>}
 */
// let deleteAccount = function (id) {
//   return requests8083.get("data-presale-funds/supervisedAccount/del", {id})
// }

export const tjsysbApi = {
    gethbAccountByXmbh,
    getBuildingByXmbh,
    getAccountByLd,
    addSysb,
}