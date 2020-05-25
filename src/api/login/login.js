import {requests} from "@/api";



/**
 * 通过入网编号获取项目的信息
 */
let getOwnProjectByRwId = function (kfsRwbh) {
  return requests.get("realEstateProject/selectPage", {kfsRwbh})
}


/**
 * 根据主键id查询房产项目具体信息
 */
let getProjectDetailById = function (id) {
  return requests.get("realEstateProject/selectById", {id})
}


/**
 * 根据项目ID查询楼栋信息   0新建  1等待审核  2审核通过  3退回状态
 * xmxxXmbh 项目编号
 */
let getBuildingInfo = function(xmxxId,ldxxShzt){
  return requests.get("building/selectList", {xmxxId,ldxxShzt})
}



export const loginApi = {
  getOwnProjectByRwId,
  getProjectDetailById,
  getBuildingInfo
}