/*完善房产项目*/
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
 * 根据主键id更新房产项目具体信息
 */
let updateProjectDetail = function (_form) {
  return requests.post("realEstateProject/update", _form)
}

/**
 * 提交项目审批
 */
let submitProject = function (id) {
  return requests.get("realEstateProject/submit", {id})
}




export const wsfcxmApi = {
  getOwnProjectByRwId,
  getProjectDetailById,
  updateProjectDetail,
  submitProject
}