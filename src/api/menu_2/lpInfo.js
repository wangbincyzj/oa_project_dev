/*楼盘相关api  结构  审核*/
/*楼盘房间相关api*/
import {requests} from "@/api";

/**
 * 获取楼栋的楼盘结构
 * @param ldId
 * @returns {Promise<AxiosResponse<any>>}
 */
let getBuildingRoomDetail = function (ldId) {
  return requests.get("room/selectList", {ldId})
}


/**
 * 获取房间详情
 * @param roomId
 * @returns {Promise<AxiosResponse<any>>}
 */
let getRoomDetail = function (roomId) {
  return requests.get("room/selectById", {id: roomId})
}


/**
 * 更新房间信息
 * @param _form
 * @returns {Promise<AxiosResponse<any>>}
 */
let updateRoom = function (_form) {
  return requests.post("room/update", _form)
}


/**
 * 删除房间
 * @param id
 * @returns {Promise<AxiosResponse<any>>}
 */
let delRoom = function (id) {
  return requests.get("room/del", {id})
}



export const lpInfoApi = {
  getBuildingRoomDetail,
  getRoomDetail,
  updateRoom,
  delRoom
}