import {requests} from "@/api";


let getRooms = function (ldId) {
  return requests.get("data_center/room/selectList", {ldId})
}

/**
 * 以单元号分开显示的楼盘变
 * @param ldId
 * @param type 1:已到账和未到账信息
 */
let getRoomsUnit = function (ldId, type=null){
  return requests.get("data_center/room/selectList2", {ldId, type})
}


/**
 * 根据楼栋ID获取楼顶详情
 */
let getBuildingDetail = function (id) {
  return requests.get("data_center/building/selectById", {id})
}

export const buildingsApi = {
  getRooms,
  getRoomsUnit,
  getBuildingDetail
}