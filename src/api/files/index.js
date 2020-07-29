import {config} from "@/api/baseConfig";
import {requests} from "@/api";

/**
 * 上传文件的地址{files:[], logId:""}
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
 * 查询收件图片
 */
let getFiles = function (logId) {
  return requests.get("data_center/common/files", {logId})
}

/**
 * 查询审核信息
 */
let getAuditInfo = function (logId) {
  return requests.get("data_center/approveProcess/list", {logId})
}

/**
 * 根据业务宗号查询默认收件
 * 预售许可       SPFHTBA_XKZ
 * 预售资质       CYZT_ZIZHI
 * 监管账户       YSZJJG_ZJJGZH
 * 解除资金监管 YSZJJG_JCZJJG
 * 三方协议        YSZJJG_HETONG
 * 合同变更        SPFHTBA_HT_BG
 * 合同撤销        CONTART_REVOKE
 * 定金退款        DJ_SHENBAO
 * 资金使用        YSZJJG_SHIYONG
 * 维修资金使用 WXZJ_SHIYONG
 */

let queryDefault = function (businessType, id) {
  return requests.get("data_center/businessAttachment/queryReceiving", {businessType, id})
}

/**
 * 根据业务宗号查询确认收件列表
 */
let queryConfirm = function (ywsjYwzh) {
  return requests.get("data_center/businessAttachment/selectByYwzh",{ywsjYwzh})
}

/**
 * 根据业务宗号添加收件
 */
let addReceive = function (ywsjYwzh, ywsjTitle, ywsjFenshu, ywsjSjxz) {
  return requests.post("data_center/businessAttachment/add", {ywsjYwzh, ywsjTitle, ywsjFenshu, ywsjSjxz})
}

/**
 * 删除收件列表的收件
 */
let delReceive = function (ywsjId) {
  return requests.get("data_center/businessAttachment/delete", {ywsjId})
}

/**
 * 确认收件
 */
let confirmReceive = function (List) {
  return requests.post("data_center/businessAttachment/receiving", List)
}



export const filesApi = {
  upload,
  preview,
  delFile,
  getFiles,
  getAuditInfo,
  /////
  queryDefault,
  queryConfirm,
  addReceive,
  delReceive,
  confirmReceive
}