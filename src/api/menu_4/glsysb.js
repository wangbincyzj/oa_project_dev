/*管理使用申报*/
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
 * 根据id查询使用申报详情
 * 
 */
let getSysbById = function(id){
    return requests8083.get("data-presale-funds/shiyong/selectById", {id})
  }

/**
 * 修改使用申报
 */
let updateSysb = function (_form) {
  return requests8083.post("data-presale-funds/shiyong/update", _form)
}


/**
 * 上报
 * @param id
 * @returns {Promise<AxiosResponse<any>>}
 */
let informSysb = function (id) {
  return requests8083.get("data-presale-funds/shiyong/report", {id})
}

/**
 * 删除
 * @param id
 * @returns {Promise<AxiosResponse<any>>}
 */
let delSysb = function (id) {
  return requests8083.get("data-presale-funds/shiyong/del", {id})
}



export const glsysbApi = {
    getAllSysb,
    informSysb,
    delSysb,
    updateSysb,
    getSysbById,
    
}