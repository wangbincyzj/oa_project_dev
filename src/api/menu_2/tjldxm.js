/*添加项目楼栋*/
import {requests} from "@/api";


/**
 * 根据项目ID查询楼栋信息   0新建  1等待审核  2审核通过  3退回状态
 * xmxxXmbh 项目编号
 */
let getBuildingInfo = function(xmxxId,ldxxShzt){
  return requests.get("data_center/building/selectList", {xmxxId,ldxxShzt})
}

let getBuildingInfo2 = function(xmxxId,ldxxShzt, current=1, size=10){
  return requests.get("data_center/building/selectPage", {xmxxId,ldxxShzt, current, size})
}


/**
 * 根据项目ID新增楼栋
 */
let addBuilding = function (_form) {
  return requests.post("data_center/building/save", _form)
}


/**
 * 根据楼栋ID删除楼栋
 */
let delBuilding = function (id) {
  return requests.get("data_center/building/del", {id})
}


/**
 * 根据楼栋ID更新楼栋信息
 */
let updateBuilding = function (_form) {
  return requests.post("data_center/building/update", _form)
}


/**
 * 根据楼栋ID获取楼顶详情
 */
let getBuildingDetail = function (id) {
  return requests.get("data_center/building/selectById", {id})
}

/**
 * 获取自动生成房间限制
 */
let getBuildingLimit = function(id){
  return requests.get("data_center/room/getBuildInfo", {ldxxId:id})
}


/**
 * 根据楼栋ID自审入库
 */
let selfInspection = function (ldxxId) {
  return requests.get("data_center/building/selfInspection", {ldxxId})
}




export const tjldxmApi = {
  getBuildingInfo,
  addBuilding,
  delBuilding,
  updateBuilding,
  getBuildingDetail,
  selfInspection,
  getBuildingLimit,
  getBuildingInfo2
}