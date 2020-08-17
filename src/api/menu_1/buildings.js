import {requests} from "@/api";


let getRooms = function (ldId) {
  return requests.get("data_center/room/selectList", {ldId})
}

let getRoomsUnit = function (ldId){
  return requests.get("data_center/room/selectList2", {ldId})
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