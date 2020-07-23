// 资质年检管理相关api

import {requests} from "@/api";

/**
 * 添加资质年检申请
 * @param type
 *
 * @returns {Promise<AxiosResponse<any>>}
 */
let addInspection = function (_form) {
  return requests.post("data_center/annualInspection/save", _form)
}

  /**
 * 根据页数查询资质年检信息
 * @param page
 * @param size
 * 
 * @returns {Promise<AxiosResponse<any>>}
 */
let getInspection = function (page, size = 20, kfsId,) {
  return requests.get("data_center/annualInspection/selectPage", {
    current: page, size, kfsId
  })
}
/**
 * 修改资质年检信息
 * @param _form
 * @returns {Promise<AxiosResponse<any>>}
 */
let updateInspection = function (_form) {
  return requests.post("data_center/annualInspection/update", _form)
}


/**
 * 通过id获取资质年检信息
 * @param 
 * @returns {Promise<AxiosResponse<any>>}
 */
let getInspectionById = function (id) {
  return requests.get("data_center/annualInspection/selectById", {id})
}

/**
 * 入库
 * @param cqxzId
 * @returns {Promise<AxiosResponse<any>>}
 */
let confirmInspection = function (id) {
  return requests.get("data_center/annualInspection/submit", {id})
}
/**
 * 删除id
 * @param id
 * @returns {Promise<AxiosResponse<any>>}
 */
let deleteInspection = function (id) {
    return requests.get("data_center/enterpriseInspection/del", {id})
  }


export const zznjglApi = {
    addInspection,
    getInspection,
    updateInspection,
    getInspectionById,
    confirmInspection,
    deleteInspection,
  
    
  }
