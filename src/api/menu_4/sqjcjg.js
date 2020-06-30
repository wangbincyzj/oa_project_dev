/*申请解除监管*/
import {requests} from "@/api";
import { requests8083 } from "../jianguan";



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

let getAccountByLd = function(ldbh){
      return requests8083.get("data-presale-funds/jiaocun/statZhxxByLd", {ldbh})
    }

/**
 * 获取申报信息
 * 
 */

let getSbInfo = function(ldbh){
  return requests8083.get("data-presale-funds/shiyong/getShenbaoForm", {ldbh})
}

/**
 * 新增申请
 */
let addApplication = function (_form) {
  return requests8083.post("data-presale-funds/payfunds/save", _form)
}


/**
 * 获取楼栋详情
 */
let getLdDetail = function (id) {
  return requests.get("data_center/building/selectById", 
  {id})
}




export const sqjcjgApi = {
    
    getBuildingByXmbh,
    getAccountByLd,
    addApplication,
    getLdDetail,
}