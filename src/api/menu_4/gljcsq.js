/*管理解除监管*/
import {requests} from "@/api";
import { requests8083 } from "../jianguan";



/**
 * 分页查询解除监管申请信息
 * 
 */
let getAllApplication = function(page, size = 20,kfsRwbh){
    return requests8083.get("data-presale-funds/payfunds/selectPage", { 
        current: page, size,kfsRwbh})
  }

/**
 * 修改申请
 */
let updateApplication = function (_form) {
    return requests8083.post("data-presale-funds/payfunds/update", _form)
  }

/**
 * 获取申请详情
*/
let getSqDetail = function (id) {
  return requests8083.get("data-presale-funds/payfunds/selectById", 
  {id})
}

/**
 * 删除解除监管
 *  
 * */
let deleteSq = function (id) {
    return requests8083.get("data-presale-funds/payfunds/del",  {id})
  }

/**
 * 上报申请
 */
let informSq = function (id) {
    return requests8083.get("data-presale-funds/payfunds/submit", 
    {id})
  }


export const gljcsqApi = {
    getAllApplication,
    getSqDetail,
    updateApplication,
    deleteSq,
    informSq,
}