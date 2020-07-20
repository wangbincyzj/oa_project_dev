import {config} from "@/api/baseConfig";
import {requests} from "@/api";

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
  return requests.get("data_center/common/files", {logId})
}

export const filesApi = {
  upload,
  preview,
  delFile,
  getFiles
}