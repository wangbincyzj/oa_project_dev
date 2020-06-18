import {requests} from "@/api/yushou";

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
let getContractList = function({kfsRwbh, current=1,size=20, htXslx=0}){
  return requests.get("data-presale-license/contract/selectPage", {
    kfsRwbh, current, size, htXslx
  })
}

/**
 * 完善合同
 */
let contractComplete = function(type, _form){
  return requests.post("data-presale-license/contract/complete",{
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
 * @htXslx	Integer  合同模板类型：0 预售 1现售
 * @htMc	Integer  模板名称（必填）
 * @htLdmc	Integer  楼栋名称（必填）
 * @htXmmc	Integer  项目名称（必填）
 * @kfsRwbh	Integer  入网编号（必须携带过来）其他参数请F12 查看老项目页面元素 id或name
 */
let addContractTemplate = function (_form) {
  return requests.post("data-presale-license/contractTemplate/save", _form)
}

let updateContractTemplate = function(_form) {
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
  return requests.post("data-presale-license/salesConfirmation/save", {xsqrdXmmc, xsqrdLdmc, xsqrdFh, xsqrdFwbh, kfsRwbh})
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
let cancelSalesConfirmation = function (xsqrdId,xsqrdZxyy) {
  return requests.get("data-presale-license/salesConfirmation/cancel", {xsqrdId,xsqrdZxyy})
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
  return requests.get("data-presale-license/houseOwner/selectListByContractNr", {htbh:fwsyqrHtbh})
}

/**
 * 完善合同后上报合同
 */
let submitContract = function (htId) {
  return requests.get("data-presale-license/contract/submit", {htId})
}

/**
 * 合同列表查询
 * htBazt 0新建 1上报 2通过 3撤回
 */
let getAllContract = function ({htMsrxm, htBazt},current=1,size=20,htXslx=0) {
  return requests.get("data-presale-license/contract/selectPage", {htMsrxm, htBazt, current, size, htXslx})
}

/**
 * 撤销备案申请
 */
let revokeContract = function (htId, htCxyy) {
  return requests.get("data-presale-license/contract/revoke", {htId, htCxyy})
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
  revokeContract
}





