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

export const sqsfxyApi = {
    addContract,
    getAllContract,
    getContractByAccount,
    getContractInfoById,
    getProjectByName,
}