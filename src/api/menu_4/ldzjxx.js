/*楼栋资金信息*/
import {requests} from "@/api";
import { requests8083 } from "../jianguan";


/**
 * 查询账户
 * 
 */
let getBuildingByXmbh = function(xmxxXmbh,ldxxShzt=null,ldxxSjlylx=null,){
  return requests.get("data_center/building/selectList", { 
      xmxxXmbh,ldxxShzt,ldxxSjlylx})
}
/**
 * 根据项目编号查询项目
 * 
 */
// let getProjectById = function(id){
//     return requests.get("data_center/realEstateProject/selectById", {id})
//   }

// /**
//  * 新增账户
//  */
// let addAccount = function (_form) {
//   return requests8083.post("data-presale-funds/supervisedAccount/save", _form)
// }


/**
 * 删除账户
 * @param id
 * @returns {Promise<AxiosResponse<any>>}
 */
// let deleteAccount = function (id) {
//   return requests8083.get("data-presale-funds/supervisedAccount/del", {id})
// }

export const ldzjxxApi = {
    getBuildingByXmbh,
}