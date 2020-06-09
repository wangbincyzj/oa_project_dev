import {requests} from "@/api/yushou";
import {requests as r} from "@/api"

/**
 * 上报
 */
let submit = function (id) {
  return requests.get("data-presale-license/preSaleLicense/submit", {id})
}


/**
 * 修改预售许可
 */
let update = function (_form) {
  return requests.post("data-presale-license/preSaleLicense/update", _form)
}


/**
 * 分页查询 申请预售许可列表（申请预售许可 ldFwlx= 0 申请现售备案 ldFwlx=1）  todo kfsId xmxxId?
 * （0未上报 1上报 2已收件 3已初审 4已复审 5已终审 6已缮证 7驳回）
 */
let selectPage = function (ldFwlx, xkzLczt, xmxxId) {
  return requests.get("data-presale-license/preSaleLicense/selectPage", {ldFwlx, xkzLczt, xmxxId})
}


/**
 * 删除
 */
let del = function (id) {
  return requests.get("data-presale-license/preSaleLicense/del", {id})
}


/**
 * 审核
 * status 审核状态码 2通过 3驳回
 * option 审批意见
 */
let audit = function ({businessId, processName, approvePerson, approveOpinion, status, xkzLczt, xkzXkzbh}) {
  return requests.post("data-presale-license/preSaleLicense/audit", {
    businessId,
    processName,
    approvePerson,
    approveOpinion,
    status,
    xkzLczt,
    xkzXkzbh
  })
}

/**
 * 查询收件情况
 * @param id
 */
let queryReceiving = function (id) {
  return requests.get("data-presale-license/preSaleLicense/queryReceiving", {id})
};

/**
 * 缮证
 */
let shanZheng = function (id, status, xkzXkzbh, xkzSzsj) {
  return requests.get("data-presale-license/preSaleLicense/Audit", {id, status, xkzXkzbh, xkzSzsj})
}


/**
 * 根据id查询单条数据 （修改时可用来查询数据）
 */
let selectById = function (id) {
  return requests.get("data-presale-license/preSaleLicense/selectById", {id})
}


/**
 * 添加预售
 */
let save = function (_form) {
  return requests.post("data-presale-license/preSaleLicense/save", _form)
}


/**
 * 获取上报楼栋信息
 */
let getReportBuildingsByProjectId = function (xmxxId, ldxxFwlx) {
  return requests.get("data-presale-license/preSaleLicense/getReportBuildingsByProjectId", {xmxxId, ldxxFwlx})
}


/**
 * 获取楼栋相关参数信息
 */
let getBuildingParameters = function (ids) {
  return requests.get("data-presale-license/preSaleLicense/getBuildingParameters", {ids})
}


/**
 * 详情接口
 */
let detail = function (id) {
  return requests.get("data-presale-license/preSaleLicense/detail", {id})
}

/**
 * 获取楼栋详情
 */
let getBuildingDetail = function (id) {
  return r.get("data_center/building/selectById", {id})
}

/**
 * 根据业务宗号查询收件信息
 */
let selectByYwzh = function (ywsjYwzh) {
  return r.get("data_center/businessAttachment/selectByYwzh", {ywsjYwzh})
}

/**
 * 确认收件
 */
let submitShouJian = function (list) {
  return r.post("data_center/businessAttachment/receiving", list)
}

/**
 * 流程设置 - 根据大类和用户获取流程
 * @param dxhb 大类编号
 * @param userId 用户ID
 * @returns {Promise<AxiosResponse<any>>}
 */
let getByDxbhAndUser = function (dxhb, userId) {
  return r.get("data_center/liucheng/getByDxbhAndUser", {dxhb, userId})
}

/**
 * 根据业务宗号(业务Id)获取审核流程链
 * @param businessId
 * @returns {Promise<AxiosResponse<any>>}
 */
let getShlcDetail = function (businessId) {
  return requests.get("data-presale-license/preSaleLicense/getApproveList", {businessId})
}




export const yushowApi = {
  submit,
  update,
  selectPage,
  del,
  audit,
  queryReceiving,
  selectById,
  save,
  getReportBuildingsByProjectId,
  getBuildingParameters,
  detail,
  getBuildingDetail,
  shanZheng,
  selectByYwzh,
  submitShouJian,
  getByDxbhAndUser,
  getShlcDetail
}







