//123

/*添加监管账户*/
import {requests} from "@/api";
import {requests8083} from "../jianguan";
import {config} from "@/api/baseConfig";

/**
 * 查询项目
 *
 */
let getProject = function (kfsRwbh, xmxxShzt = null, xmxxXmbh = null, xmxxXmmc = null,) {
  return requests.get("data_center/realEstateProject/selectPage", {kfsRwbh, xmxxShzt, xmxxXmbh, xmxxXmmc,})
}
/**
 * 根据项目编号查询项目
 *
 */
let getProjectById = function (id) {
  return requests.get("data_center/realEstateProject/selectById", {id})
}

/**
 * 新增账户
 */
let addAccount = function (_form) {
  return requests8083.post("data-presale-funds/supervisedAccount/save", {..._form, zjjgzhJczhbs:1})
}

/**
 * 修改账户
 */
let updateAccount = function (_form) {
  return requests8083.post("data-presale-funds/supervisedAccount/update", _form)
}
/**
 * 删除账户
 * @param id
 * @returns {Promise<AxiosResponse<any>>}
 */
let deleteAccount = function (id) {
  return requests8083.get("data-presale-funds/supervisedAccount/del", {id})
}
/**
 * 清除收件
 * @param id
 * @returns {Promise<AxiosResponse<any>>}
 */
let deleteSj = function (id) {
  return requests.get("data_center/businessAttachment/delByYwzh", {ywsjYwzh: id})
}

/**
 * 上报账户
 * @param id
 * @returns {Promise<AxiosResponse<any>>}
 */
let informAccount = function (id) {
  return requests8083.get("data-presale-funds/supervisedAccount/submit", {id})
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

let getAccountById = function (page, size = 20, xmxxXmbh, zjjgzhLczt = null) {
  return requests8083.get("data-presale-funds/supervisedAccount/selectPage", {
    current: page, size, xmxxXmbh, zjjgzhLczt
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

let getLd = function (xmxxXmbh = null, ldxxShzt = null) {
  return requests.get("data_center/building/selectList", {
    xmxxXmbh, ldxxShzt
  })
}

/**
 * 获取银行
 * @param page
 * @param size
 *
 * @returns {Promise<AxiosResponse<any>>}
 */

let getBank = function (yinhangTitle = null) {
  return requests.get("data_center/cyztYinhang/selectList", {
    yinhangTitle
  })
}

/**
 * 查询所有业务收件
 * @param page
 * @param sizeId
 * @param
 * @returns {Promise<AxiosResponse<any>>}
 */
let getAllYwsj = function (shoujianXxbh = null) {
  return requests.get("data_center/businessReceive/selectList", {
    shoujianXxbh
  })
}
/**
 * 根据业务宗号(业务Id)获取审核流程链
 * @param businessId
 * @returns {Promise<AxiosResponse<any>>}
 */
let getShlcDetail = function (businessId) {
  return requests8083.get("data-presale-funds/supervisedAccount/getApproveList", {businessId})
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
  return requests8083.get("data-presale-funds/supervisedAccount/queryReceiving", {id})
};
/**
 * 根据项目编号查询账户列表
 * @param page
 * @param size
 *
 * @returns {Promise<AxiosResponse<any>>}
 */

let getYkhAccount = function (page, size = 20, xmxxXmbh, zjjgzhShzt) {
  return requests8083.get("data-presale-funds/supervisedAccount/selectPage", {
    current: page, size, xmxxXmbh, zjjgzhShzt
  })
}

/**
 * 收件获取证件
 */
let getCertificateList = function (zhengjianRkzt=1) {
  return requests.get("data_center/certificate/selectList", {zhengjianRkzt})
}

/**
 * 收件单条删除
 */
let delOne = function (ywsjId) {
  return requests.get("data_center/businessAttachment/delete", {ywsjId})
}

/**
 * 收件单条增加
 */
let addOne = function (_form) {
  return requests.post("data_center/businessAttachment/add", _form)
};

/**
 * 上传文件的地址
 */
let upload = config.productMode ? "/data_center/common/upload" : `http://${config.baseIP}:8090/data_center/common/upload`
let preview = config.productMode ? "/data_center/common/getFile?id=" : `http://${config.baseIP}:8090/data_center/common/getFile?id=`

/**
 * 删除收件图片
 */
let delFile = function (ids) {
  return requests.post("data_center/common/delFiles", [ids])
}

/**
 * 查询收件
 */
let getFiles = function (logId) {
  return requests.post("data_center/common/files", {logId})
}


export const sqjgzhApi = {
  getProject,
  addAccount,
  updateAccount,
  deleteAccount,
  //getAllAccount,
  getAccountById,
  getProjectById,
  getAccountInfoById,
  getLd,
  getBank,
  getAllYwsj,
  informAccount,
  selectByYwzh,
  submitShouJian,
  getShlcDetail,
  queryReceiving,
  deleteSj,
  getYkhAccount,
  getCertificateList,
  addOne,
  delOne,
  upload,
  preview,
  delFile,
  getFiles
}