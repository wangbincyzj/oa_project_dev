/*合同退款申请*/
import {requests} from "@/api";
import { requests8083 } from "../jianguan";


/**
 * 查询划拨账户
 * 
 */
let gethbAccountByXmbh = function(page, size = 20,xmxxXmbh,hbzhRkzt=1,hbzhZhmc=null,hbzhBgzt=null,){
  return requests8083.get("data-presale-funds/transfer/selectPage", { 
      current: page, size,xmxxXmbh,hbzhRkzt,hbzhZhmc,hbzhBgzt})
}

/**
 * 分页查询合同列表
 * 
 */
let getAllContract = function(page, size = 20,kfsRwbh){
    return requests8083.get("data-presale-funds/shiyong/getReturnHtList", { 
        current: page, size,kfsRwbh})
  }

/**
 * 根据条件分页查询合同列表
 * 
 */
let getContractBySearch = function(page, size = 20,xmxxXmbh,person,certificate,code){
    return requests8083.get("", { 
        current: page, size,xmxxXmbh,person,certificate,code})
  }

/**
 * 根据合同id查询合同详情
 * 
 */
let getContractInfoById = function(id){
    return requests.get("", {id})
  }

/**
 * 新增退款申请
 */
let addTksq = function (_form) {
  return requests8083.post("data-presale-funds/shiyong/save", _form)
}


/**
 * 删除账户
 * @param id
 * @returns {Promise<AxiosResponse<any>>}
 */
// let deleteAccount = function (id) {
//   return requests8083.get("data-presale-funds/supervisedAccount/del", {id})
// }

export const httksqApi = {
    gethbAccountByXmbh,
    getAllContract,
    getContractBySearch,
    getContractInfoById,
    addTksq,
}