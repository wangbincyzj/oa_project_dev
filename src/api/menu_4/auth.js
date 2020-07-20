
import {requests} from "@/api";


/**
 * Auth 权限 - 根据类型查询权限列表
 * @param type  权限的业务类型 1：主管机关权限 2:开发商 3：监管银行 4：物业 5：中介
 * @returns {Promise<AxiosResponse<any>>}
 */
let getAuthListByType = function (type) {
  return requests.get("data_center/auth/getByType", {type})
}


/**
 * 根据用户获取对应的权限
 * @param userId
 * @param type
 * @returns {Promise<AxiosResponse<any>>}
 */
let getOwnedAuthByUserIdAndType = function (userId, type) {
  return requests.get("data_center/userAuth/getByUser", {userId, type})
}


let updateUserAuth = function (userId, type, ) {

}

let getAuthNavByDlbhAndUid = function (dxhb,userId) {
  return requests.get("data_center/liucheng/getByDxbhAndUser", {dxhb, userId})
}

/**
 * 查询审核信息
 */
let getAuditInfo = function (logId) {
  return requests.get("data_center/approveProcess/list", {logId})
}



export const authApi = {
  getAuthListByType,
  getOwnedAuthByUserIdAndType,
  getAuthNavByDlbhAndUid,
  getAuditInfo
}