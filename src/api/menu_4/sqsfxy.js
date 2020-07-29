//123

/*添加三方协议*/
import {requests} from "@/api";
import { requests8083 } from "../jianguan";




/**
 * 新增合同
 */
let addContract = function (_form) {
  return requests8083.post("data-presale-funds/ripartiteAgreement/save", _form)
}

/**
 * 修改合同
 */
let updateContract = function (_form) {
  return requests8083.post("data-presale-funds/ripartiteAgreement/update", _form)
}
/**
 * 删除合同
 * @param id
 * @returns {Promise<AxiosResponse<any>>}
 */
let deleteContract = function (id) {
  return requests8083.get("data-presale-funds/ripartiteAgreement/del", {id})
}


/**
 * 上报账户
 * @param id
 * @returns {Promise<AxiosResponse<any>>}
 */
let informContract = function (id) {
  return requests8083.get("data-presale-funds/ripartiteAgreement/submit", {id})
}
/**
 * 清除收件
 * @param id
 * @returns {Promise<AxiosResponse<any>>}
 */
let deleteSj = function (id) {
  return requests.get("data_center/businessAttachment/delByYwzh", {id})
}
/**
 * 根据业务宗号(业务Id)获取审核流程链
 * @param businessId
 * @returns {Promise<AxiosResponse<any>>}
 */
let getShlcDetail = function (businessId) {
  return requests8083.get("data-presale-funds/ripartiteAgreement/getApproveList", {businessId})
}
/**
 * 根据业务宗号查询收件信息
 */
let selectByYwzh = function (ywsjYwzh) {
  return requests.get("data_center/businessAttachment/selectByYwzh", {ywsjYwzh})
}

/**
 * 确认收件
 */
let submitShouJian = function (list) {
  return requests.post("data_center/businessAttachment/receiving", list)
}
/**
 * 查询收件情况
 * @param id
 */
let queryReceiving = function (id) {
  return requests8083.get("data-presale-funds/ripartiteAgreement/queryReceiving", {id})
};

/**
 * 根据页数查询所有合同
 * @param page
 * @param size
 *
 * @returns {Promise<AxiosResponse<any>>}
 */
let getAllContract = function (page, size = 20,kfsId,hetongJgzh=null,hetongLczt=null) {
  return requests8083.get("data-presale-funds/ripartiteAgreement/selectPage", {
    current: page, size,kfsId,hetongJgzh,hetongLczt
  })
}
/**
 * 根据监管账户查询合同
 * @param page
 * @param size
 *
 * @returns {Promise<AxiosResponse<any>>}
 */
let getContractByAccount = function (page, size = 20,kfsId,hetongJgzh,hetongLczt=null) {
  return requests8083.get("data-presale-funds/ripartiteAgreement/selectPage", {
    current: page, size,kfsId,hetongJgzh,hetongLczt
  })
}
/**
 * 根据合同id查询合同详情
 *
 * @returns {Promise<AxiosResponse<any>>}
 */
let getContractInfoById = function (id) {
  return requests8083.get("data-presale-funds/ripartiteAgreement/selectById", {
    id
  })
}
/**
 * 根据项目名称查询项目详情
 *
 * @returns {Promise<AxiosResponse<any>>}
 */
let getProjectByName = function (xmxxXmmc,xmxxShzt=null,xmxxXmbh=null,kfsRwbh=null,) {
  return requests.get("data_center/realEstateProject/selectList", {
    xmxxXmmc,xmxxShzt,xmxxXmbh,kfsRwbh,
  })
}
/**
 * 根据项目编号查询项目
 *
 */
let getProjectById = function(id){
  return requests.get("data_center/realEstateProject/selectById", {id})
}
/**
 * 根据项目编号查询账户列表
 * @param page
 * @param size
 *
 * @returns {Promise<AxiosResponse<any>>}
 */

let getYshAccount = function (xmxxXmbh) {   //,zjjgzhShzt=3
  return requests8083.get("data-presale-funds/supervisedAccount/list", {
    xmxxXmbh,
  })
}

/**
 * 根据项目编号查询三方协议
 * @param page
 * @param size
 *
 * @returns {Promise<AxiosResponse<any>>}
 */
let getSfxyByXmbh = function (page, size = 20,hetongXmbh,hetongShzt) {
  return requests8083.get("data-presale-funds/ripartiteAgreement/selectPage", {
    current: page, size,hetongXmbh,hetongShzt
  })

}
/**
 * 获取新增前信息
 *
 */
let fetchBeforeAdd = function(zjjgzhId){
  return requests8083.get("data-presale-funds/ripartiteAgreement/queryParameters", {zjjgzhId})
}

/**
 * 获取证件列表
 *
 */
let fetchCertificate = function(){
  return requests.get("data_center/certificate/selectList")
}
export const sqsfxyApi = {
  addContract,
  getAllContract,
  getContractByAccount,
  getContractInfoById,
  getProjectByName,
  updateContract,
  deleteContract,
  deleteSj,
  getShlcDetail,
  selectByYwzh,
  submitShouJian,
  queryReceiving,
  getProjectById,
  informContract,
  getYshAccount,
  getSfxyByXmbh,
  fetchBeforeAdd,
  fetchCertificate,

}