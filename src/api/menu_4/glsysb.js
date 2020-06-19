/*合同退款申请*/
import {requests} from "@/api";
import { requests8083 } from "../jianguan";


/**
 * 查询所有使用申报
 * 
 */
let getAllSysb = function(page, size = 20){
  return requests8083.get("data-presale-funds/shiyong/selectPage", { 
      current: page, size})
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
let getContractBySearch = function(page, size = 20,jiaocunXmbh,jiaocunMsrxm,jiaocunMsrzjhm,jiaocunHtbah){
    return requests8083.get("data-presale-funds/jiaocun/selectByCondition", { 
        current: page, size,jiaocunXmbh,jiaocunMsrxm,jiaocunMsrzjhm,jiaocunHtbah})
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
 * 上报
 * @param id
 * @returns {Promise<AxiosResponse<any>>}
 */
let informSysb = function (id) {
  return requests8083.get("data-presale-funds/shiyong/report", {id})
}

export const glsysbApi = {
    getAllSysb,
    informSysb,
}