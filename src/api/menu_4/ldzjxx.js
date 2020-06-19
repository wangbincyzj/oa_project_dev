/*楼栋资金信息*/
import {requests} from "@/api";
import { requests8083 } from "../jianguan";


/**
 * 查询楼栋
 * 
 */
let getBuildingByXmbh = function(xmxxXmbh,ldxxShzt=null,ldxxSjlylx=null,){
  return requests.get("data_center/building/selectList", { 
      xmxxXmbh,ldxxShzt,ldxxSjlylx})
}
/**
 * 根据楼栋查询信息
 * 
 */
let getInfoByLd = function(ldbh){
    return requests8083.get("data-presale-funds/jiaocun/buildingFundCount", {ldbh})
  }

/**
 * 根据条件查询缴存信息
 * 
 */
let getJcInfo = function(ldbh,jiaocunMsrxm,JKstartTime,JKendTime){
    return requests8083.get("data-presale-funds/jiaocun/buildingFundCount", {ldbh,jiaocunMsrxm,JKstartTime,JKendTime})
  }

/**
 * 根据条件查询使用信息
 * 
 */
let getSyInfo = function(ldbh){
    return requests8083.get("data-presale-funds/jiaocun/buildingFundCount", {ldbh,FFstartTime,FFendTime})
  }

/**
 * 删除账户
 * @param id
 * @returns {Promise<AxiosResponse<any>>}
 */
// let deleteAccount = function (id) {
//   return requests8083.get("data-presale-funds/supervisedAccount/del", {id})
// }

export const ldzjxxApi = {
    getInfoByLd,
    getBuildingByXmbh,
    getJcInfo,
    getSyInfo,

}