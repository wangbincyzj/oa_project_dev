// 开发资质管理相关api

import {requests} from "@/api";

/**
 * 添加开发资质
 * @param type
 *
 * @returns {Promise<AxiosResponse<any>>}
 */
let addQualification = function (_form) {
  return requests.post("data_center/enterpriseQualification/save", _form)
}

  /**
 * 根据页数查询开发资质信息
 * @param page
 * @param size
 * 
 * @returns {Promise<AxiosResponse<any>>}
 */
let getQualification = function (page, size = 20, kfsId,) {
  return requests.get("data_center/enterpriseQualification/selectPage", {
    current: page, size, kfsId
  })
}
/**
 * 修改开发资质信息
 * @param _form
 * @returns {Promise<AxiosResponse<any>>}
 */
let updateQualification = function (_form) {
  return requests.post("data_center/enterpriseQualification/update", _form)
}


/**
 * 通过id获取开发资质信息
 * @param 
 * @returns {Promise<AxiosResponse<any>>}
 */
let getQualicationById = function (id) {
  return requests.get("data_center/enterpriseQualification/selectById", {id})
}

/**
 * 入库
 * @param cqxzId
 * @returns {Promise<AxiosResponse<any>>}
 */
let confirmQualication = function (id) {
  return requests.get("data_center/enterpriseQualification/submit", {id})
}
/**
 * 删除id
 * @param id
 * @returns {Promise<AxiosResponse<any>>}
 */
let deleteQualication = function (id) {
    return requests.get("data_center/enterpriseQualification/del", {id})
  }
/**
 * 获取开发商信息
 * @returns {Promise<AxiosResponse<any>>}
 */
let getkfsDetail = function (id) {
 return requests.get("data_center/accessEnterprises/selectById", {id})
}

export const kfzzglApi = {
    addQualification,
    getQualification,
    updateQualification,
    getQualicationById,
    confirmQualication,
    deleteQualication,
    getkfsDetail,
    
  }
