/*添加监管账户*/
import {requests} from "@/api";
import { requests8083 } from "../jianguan";


/**
 * 查询项目
 * 
 */
let getProject = function(kfsRwbh,xmxxShzt=null,xmxxXmbh=null,xmxxXmmc=null,){
  return requests.get("data_center/realEstateProject/selectPage", {kfsRwbh,xmxxShzt,xmxxXmbh,xmxxXmmc,})
}
/**
 * 根据项目编号查询项目
 * 
 */
let getProjectById = function(id){
    return requests.get("data_center/realEstateProject/selectById", {id})
  }

/**
 * 新增账户
 */
let addAccount = function (_form) {
  return requests8083.post("data-presale-funds/supervisedAccount/save", _form)
}

 /**
 * 根据页数查询所有账户
 * @param page
 * @param size
 * 
 * @returns {Promise<AxiosResponse<any>>}
 */
let getAllAccount = function (page, size = 20) {
    return requests8083.get("data-presale-funds/supervisedAccount/selectPage", {
      current: page, size
    })
  }

/**
 * 根据项目编号查询账户列表
 * @param page
 * @param size
 * 
 * @returns {Promise<AxiosResponse<any>>}
 */

let getAccountById = function (page, size = 20,xmxxXmbh,zjjgzhLczt=null) {
    return requests8083.get("data-presale-funds/supervisedAccount/selectPage", {
      current: page, size, xmxxXmbh,zjjgzhLczt
    })
  }

/**
 * 根据账户id查询账户信息
 * @param page
 * @param size
 * 
 * @returns {Promise<AxiosResponse<any>>}
 */

let getAccountInfoById = function (id) {
    return requests8083.get("data-presale-funds/supervisedAccount/selectById", 
    {id})
  }

/**
 * 获取楼栋
 * @param page
 * @param size
 * 
 * @returns {Promise<AxiosResponse<any>>}
 */

let getLd = function (xmxxXmbh=null,ldxxShzt=null) {
    return requests.get("data_center/building/selectList", {
        xmxxXmbh,ldxxShzt
    })
  }

/**
 * 获取银行
 * @param page
 * @param size
 * 
 * @returns {Promise<AxiosResponse<any>>}
 */

let getBank = function (yinhangTitle=null) {
    return requests.get("data_center/cyztYinhang/selectList", {
        yinhangTitle
    })
  }

export const sqjgzhApi = {
    getProject,
    addAccount,
    getAllAccount,
    getAccountById,
    getProjectById,
    getAccountInfoById,
    getLd,
    getBank
}