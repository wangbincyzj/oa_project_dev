import {requests} from "@/api/yushou";
import {config} from "@/api/baseConfig";
/*---------------------------------合同模板--------------------------------*/


/**
 * 左侧楼栋列表
 */
let getContractBuildingTree = function ({ldxxFwlx, rwbh}) {
  return requests.get("data-presale-license/contract/buildingTree", {ldxxFwlx, rwbh})
}

/**
 * 合同管理分页查询
 * @param htXslx 类型 0预售 1现售
 */
let getContractList = function ({kfsRwbh, htBazt, HtCxzt, HtBgzt, current = 1, size = 20, htXslx = 0}) {
  return requests.get("data-presale-license/contract/selectPage", {
    kfsRwbh, current, size, htXslx, htBazt, HtCxzt, HtBgzt,
  })
}

/**
 * 完善合同
 */
let contractComplete = function (type, _form) {
  return requests.post("data-presale-license/contract/complete", {
    [_form.name]: _form,
    type
  })
}


/**
 * 新建合同
 */
let addContract = function ({roomId, htId}) {
  return requests.post("data-presale-license/contract/save", {roomId, htId})
}


/**
 * 新建合同
 */
let getContractDetail = function (htId) {
  return requests.get("data-presale-license/contract/detail", {htId})
}


/**
 * 点击楼栋查询所有房间
 */
let getContractRooms = function (ldxxId) {
  return requests.get("data-presale-license/contract/rooms", {ldxxId})
}


/**
 * 获取房间信息
 */
let getRoomDetail = function (ldxxId) {
  return requests.get("data-presale-license/contract/room", {ldxxId})
}


/**
 * 上报
 */
let submitContractTemplate = function (htId) {
  return requests.get("data-presale-license/contractTemplate/submit", {htId})
}


/**
 * 合同模板管理分页查询
 * @param htShzt 审核状态 0未提交 1待审核 2审核通过 3驳回
 * @param htXslx 合同模板类型：0 预售 1现售
 * @param kfsRwbh 入网编号 根据此id查询不同开发商的项目合同模板
 */
let getContractTemplate = function ({htXslx, kfsRwbh, htShzt}) {
  return requests.get("data-presale-license/contractTemplate/selectPage", {htXslx, kfsRwbh, htShzt})
}

/**
 * 审核、撤回
 * @param htId
 * @param shzt  审核状态 2审核通过 3撤回
 */
let auditContractTemplate = function ({htId, shzt}) {
  return requests.get("data-presale-license/contractTemplate/audit", {htId, shzt})
}


/**
 * 新增合同模板
 * @param _form
 * @htXslx  Integer  合同模板类型：0 预售 1现售
 * @htMc  Integer  模板名称（必填）
 * @htLdmc  Integer  楼栋名称（必填）
 * @htXmmc  Integer  项目名称（必填）
 * @kfsRwbh  Integer  入网编号（必须携带过来）其他参数请F12 查看老项目页面元素 id或name
 */
let addContractTemplate = function (_form) {
  return requests.post("data-presale-license/contractTemplate/save", _form)
}

let updateContractTemplate = function (_form) {
  return requests.post("data-presale-license/contractTemplate/update", _form)
}

/**
 * 根据主键删除合同模板
 */
let delContractTemplate = function (htId) {
  return requests.get("data-presale-license/contractTemplate/del", {htId})
}


/**
 * 通过主键id查询合同模板
 */
let getContractTemplateById = function ({htId}) {
  return requests.get("data-presale-license/contractTemplate/selectById", {htId})
}


/*---------------------------------承诺书--------------------------------*/
/**
 * 保存承诺书
 * @param xsqrdXmmc  项目名称
 * @param xsqrdLdmc  楼栋名称
 * @param xsqrdFh  房号
 * @param xsqrdFwbh  房屋编号
 */
let saveSalesConfirmation = function ({xsqrdXmmc, xsqrdLdmc, xsqrdFh, xsqrdFwbh, kfsRwbh}) {
  return requests.post("data-presale-license/salesConfirmation/save", {
    xsqrdXmmc,
    xsqrdLdmc,
    xsqrdFh,
    xsqrdFwbh,
    kfsRwbh
  })
}

/**
 * 分页查询
 * @param kfsRwbh
 */
let getSalesConfirmationByKfsRwbh = function (kfsRwbh) {
  return requests.get("data-presale-license/salesConfirmation/selectPage", {kfsRwbh})
}


/**
 * 根据Id删除
 */
let delSalesConfirmationById = function (xsqrdId) {
  return requests.get("data-presale-license/salesConfirmation/del", {xsqrdId})
}

/**
 * 根据Id查询 print?
 */
let getSalesConfirmationById = function (xsqrdId) {
  return requests.post("data-presale-license/salesConfirmation/print", {xsqrdId})
}

/**
 * 根据主键Id查询单条数据
 */
let salesConfirmationSelectById = function (id) {
  return requests.get("data-presale-license/salesConfirmation/selectById", {id})
}

/**
 * 注销
 */
let cancelSalesConfirmation = function (xsqrdId, xsqrdZxyy) {
  return requests.get("data-presale-license/salesConfirmation/cancel", {xsqrdId, xsqrdZxyy})
}


/**
 * 电子签名
 */
let signatureSalesConfirmation = function (xsqrdId) {
  return requests.post("data-presale-license/salesConfirmation/signature", {xsqrdId})
}


/**
 * 设置密码
 */
let setPassword = function ({xsqrdId, xsqrdCrnxm, xsqrdPass, password}) {
  return requests.post("data-presale-license/salesConfirmation/password", {xsqrdId, xsqrdCrnxm, xsqrdPass, password})
}


/*---------------------------------合同--------------------------------*/
/**
 * 添加购买人
 */
let saveHouseOwner = function (_form) {
  return requests.post("data-presale-license/houseOwner/save", _form)
}

/**
 * 根据id查询产权人 用于修改信息
 */
let selectByIdHouseOwner = function (id) {
  return requests.get("data-presale-license/houseOwner/selectById", {id})
}

/**
 * 根据id查询产权人 用于修改信息
 */
let delByIdHouseOwner = function (id) {
  return requests.get("data-presale-license/houseOwner/del", {id})
}

/**
 * 根据合同编号查询产权人列表
 */
let selectHouseOwnerList = function (fwsyqrHtbh) {
  return requests.get("data-presale-license/houseOwner/selectListByContractNr", {htbh: fwsyqrHtbh})
}

/**
 * 完善合同后上报合同
 * type: 1备案上报   2撤销上报
 */
let submitContract = function (htId, type = 1) {
  return requests.get("data-presale-license/contract/submit", {htId, type})
}

/**
 * 合同列表查询
 * htBazt 0新建 1上报 2通过 3撤回
 */
let getAllContract = function ({htMsrxm, htBazt, htCxlc}, current = 1, size = 20, htXslx = 0) {
  return requests.get("data-presale-license/contract/selectPage", {htMsrxm, htCxlc, htBazt, current, size, htXslx})
}

/**
 * 撤销备案申请
 */
let revokeContract = function (htId, htCxyy) {
  return requests.get("data-presale-license/contract/revoke", {htId, htCxyy})
}

/**
 * 获取撤销备案申请详细信息
 */
let revokeContractDetail = function (htId) {
  return requests.get("data-presale-license/contract/revokeContractDetail", {htId})
}

/**
 * 记录审核信息
 */
let auditContract = function ({businessId, processName, processId, approveOpinion, status, lczt}) {
  return requests.post("data-presale-license/contract/audit", {
    businessId,
    processName,
    processId,
    approveOpinion,
    status,
    lczt
  })
}


/*---------------------------------图片上传与获取--------------------------------*/
/*arg:files*/
let uploadPic = config.productMode ? "/data-presale-license/contract/upload" : `http://${config.baseIP}:8094/data-presale-license/contract/upload`
let previewPic = config.productMode ? "/data-presale-license/contract/getFile?id=" : `http://${config.baseIP}:8094/data-presale-license/contract/getFile?id=`


/*---------------------------------合同变更相关--------------------------------*/

/**
 * 更改合同买受人
 */
let contractChangeOwner = function (htId, houseOwners, remark) {
  return requests.post("data-presale-license/contractChange/save", {htId, houseOwners, remark, changeType: 2})
}

/**
 * 更改合同条款
 */
let contractChangeContent = function (htId, remark, content) {
  return requests.post("data-presale-license/contractChange/save", {htId, remark, content, changeType: 1})
}
/**
 * 合同变更列表
 * @param status 0 1 2 3
 * @param changeType 1 内容 2 人员
 */
let contractChangeList = function ({status, changeType, processStatus}) {
  return requests.get("data-presale-license/contractChange/selectPage", {status, changeType, processStatus})
}

/**
 * 根据合同查变更单ID
 * @param htId
 * @returns {Promise<AxiosResponse<any>>}
 */
let getChangeIdByHtId = function (htId) {
  return requests.get("data-presale-license/contractChange/selectByHtId", {htId})
}

/**
 * 根据变更单id查详细
 * @param id
 * @returns {Promise<AxiosResponse<any>>}
 */
let getChangeById = function (id) {
  return requests.get("data-presale-license/contractChange/selectById", {id})
}


/**
 * 提交变更审批
 * @param id  变更单id(通过合同查询)
 * @returns {Promise<AxiosResponse<any>>}
 */
let submitContractChange = function (id) {
  return requests.get("data-presale-license/contractChange/submit", {id})
}


/**
 * 合同变更审核
 * @param id  变更单ID
 * @param processName
 * @param processId
 * @param approveOpinion
 * @param status  2通过  3驳回
 * @param lczt
 * @returns {Promise<AxiosResponse<any>>}
 */
let auditChange = function ({businessId, processName, processId, approveOpinion, status, lczt}) {
  return requests.post("data-presale-license/contractChange/audit", {
    businessId,
    processName,
    processId,
    approveOpinion,
    status,
    lczt
  })
}


/*---------------------------------销售控制管理--------------------------------*/
/**
 * 读取楼盘列表
 */
let getBuildingTree = function ({xmxxMc}) {
  return requests.get("data-presale-license/housingRecord/buildingTree", {xmxxMc})
}

/**
 * 读取限制房间列表
 */
let getLimitList = function ({ldId, roomFh, roomId, roomSzdy, roomSzc}, current = 1, size = 10) {
  return requests.get("data-presale-license/homeSalesRestrictions/roomPage", {
    ldId, roomFh, roomId, roomSzdy, roomSzc, current, size
  })
}

/**
 * 批量限制房间
 */
let limitRooms = function (roomIds, fwxzXzbz) {
  return requests.post("data-presale-license/homeSalesRestrictions/save", {roomIds, fwxzXzbz})
}

/**
 * 查询限制详细
 */
let getLimitDetail = function (roomId) {
  return requests.get("data-presale-license/homeSalesRestrictions/queryRoomDetail", {roomId})
}

/**
 * 批量解除限制
 */
let unLimitRooms = function (ids, fwxzJcxzbz) {
  return requests.get("data-presale-license/homeSalesRestrictions/del", {ids, fwxzJcxzbz})
}

/**
 * 根据楼栋id查询限制单
 */
let getLimitByLdid = function (ldxxId, fwxzYxzt = 1, current = 1, size = 10) {
  return requests.get("data-presale-license/homeSalesRestrictions/selectPage", {ldxxId, fwxzYxzt, current, size})
}

/**
 * 读取房间查封列表
 */
let getHouseClosedList = function ({ldId, roomSzdy, roomFh,}, current, size) {
  return requests.get("data-presale-license/houseClosed/roomPage", {ldId, roomSzdy, roomFh, current, size})
}

/**
 * 批量查封房间
 */
let setHouseClose = function (_form) {
  return requests.post("data-presale-license/houseClosed/save", _form)
}

/**
 * 查询房屋查封详细
 */
let getHouseCloseDetail = function (roomId) {
  return requests.get("data-presale-license/houseClosed/queryRoomDetail", {roomId})
}

/**
 * 解除查封
 */
let delHouseClose = function (_form) {
  return requests.get("data-presale-license/houseClosed/del", _form)
}

/**
 * 查询房屋查封单列表
 */
let getHouseClosed = function ({htcfCfjg,htcfCfwh,htcfXmmc}, current, size) {
  return requests.get("data-presale-license/houseClosed/selectPage", {htcfCfjg,htcfCfwh,htcfXmmc, current, size, htcfYxzt: 0})
}

/**
 * 查封购房合同分页查询
 */
let getContractClosed = function ({htMsrxm, htBah}, current, size) {
  return requests.get("data-presale-license/contractClosed/selectPage", {htMsrxm, htBah,current, size})
}

/**
 * 查封合同
 */
let contractClose = function (_form) {
  return requests.post("data-presale-license/contractClosed/save", _form)
}

/**
 * 合同查封列表
 */
let contractClosedList = function (htId) {
  return requests.get("data-presale-license/contractClosed/list", {htId})
}

/**
 * 合同解封
 */
let delContractClose = function (_form) {
  return requests.get("data-presale-license/contractClosed/del", _form)
}

/**
 * 备案以图管房-获取楼盘详情
 */
let housingRecordRooms = function (ldxxId) {
  return requests.get("data-presale-license/housingRecord/rooms", {ldxxId})
}

/**
 * 备案以图管房-获取房间信息
 */
let getHousingRecordDetail = function (roomId) {
  return requests.get("data-presale-license/housingRecord/room", {roomId})
}


export const yushouContractApi = {
  getContractBuildingTree,
  addContract,
  getContractDetail,
  getContractRooms,
  getRoomDetail,
  submitContractTemplate,
  getContractTemplate,
  auditContractTemplate,
  addContractTemplate,
  updateContractTemplate,
  delContractTemplate,
  getContractTemplateById,
  ///////
  saveSalesConfirmation,
  getSalesConfirmationByKfsRwbh,
  delSalesConfirmationById,
  getSalesConfirmationById,
  salesConfirmationSelectById,
  cancelSalesConfirmation,
  signatureSalesConfirmation,
  setPassword,
  getContractList,
  contractComplete,
  /////
  saveHouseOwner,
  selectByIdHouseOwner,
  delByIdHouseOwner,
  selectHouseOwnerList,
  submitContract,
  getAllContract,
  revokeContract,
  revokeContractDetail,
  auditContract,
  //////////
  uploadPic,
  previewPic,
  //////////
  contractChangeOwner,
  contractChangeContent,
  contractChangeList,
  getChangeIdByHtId,
  submitContractChange,
  getChangeById,
  auditChange,
  /////////// 房屋限售
  getBuildingTree,
  getLimitList,
  limitRooms,
  getLimitDetail,
  unLimitRooms,
  getLimitByLdid,
  ///////////// 房屋查封
  getHouseClosedList,
  setHouseClose,
  getHouseCloseDetail,
  delHouseClose,
  getHouseClosed,
  /////////////合同查封
  getContractClosed,
  contractClose,
  contractClosedList,
  delContractClose,
  housingRecordRooms,
  getHousingRecordDetail
}