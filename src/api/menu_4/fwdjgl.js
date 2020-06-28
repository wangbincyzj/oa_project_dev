//1049906948

/*房屋定金管理*/
import { requests } from "@/api";
import { requests8083 } from "../jianguan"

/**
 *资金监账户
 */
let getzjzh = function () {
  return requests8083.get('data-presale-funds/supervisedAccount/selectPage')
}



// 定金缴存##############################
/**
 * 定金缴存 分页查询
 * @param {*} current  
 * @param {*} size 
 * @param {*} djDjglzt 
 * @param {*} djJkzt 
 * @param {*} djDjtkzt 
 * @param {*} zjjgzhYhzh 
 */

let getlist = function (current, size, djDjglzt, djJkzt, djDjtkzt, djJkyhzh) {
  return requests8083.get("data-presale-funds/deposit/selectPage", {
    current, size, djDjglzt, djJkzt, djDjtkzt, djJkyhzh
  })
}


/**
 * 根据缴款状态判断 
 * 定金id  
 * @param {*} id 
 */

let reporinfo = function (id) {
  return requests8083.get("data-presale-funds/deposit/submit", { id })
}


/**
 * 新增記錄
 */
let addDeposit = function (_form) {
  return requests8083.post("data-presale-funds/deposit/save", _form)
}


/**
 * 主键查询
 * 根据定金id 查询查看按钮
 */
let getProjectById = function (id) {
  return requests8083.get("data-presale-funds/deposit/selectOne", { id })
}


/**
 * 修改记录
 */
let updateDeposit = function (_form) {
  return requests8083.post("data-presale-funds/deposit/update", _form)
}


/**
 * 删除接口
 */
let delDeposit = function (id) {
  return requests8083.get("data-presale-funds/deposit/delete", { id })
}


/**
 * 定金关联
 */

/**
 * 定金关联
 * 分页查询
 * @param {*} current 
 * @param {*} size 
 */

let relationlist = function (current, size, djDjglzt, djJkzt, djDjtkzt, djJkyhzh) {
  return requests8083.get("data-presale-funds/deposit/selectPage", {
    current, size, djDjglzt, djJkzt, djDjtkzt, djJkyhzh
  })
}


/**
 * 合同列表查询
 * 合同编号  开发商入网编号
 * @param {*} kfsRwbh 
 * 买受人姓名
 * @param {*} jiaocunMsrxm 
 * 证件号
 * @param {*} jiaocunMsrzjhm 
 * 合同备案
 * @param {*} jiaocunHtbh 
 */
let getdata = function (kfsRwbh, htShzt) {
  return requests8083.get("data-presale-funds/jiaocun/selectPage", { kfsRwbh, htShzt })
}

/**
 * 关联合同
 * @param {*} djId   定金id
 * @param {*} htBh   合同编号
 */
let relationData = function (djId,htBh) {
  return requests8083.get("data-presale-funds/deposit/relation", {djId,htBh})
}





/**
* 房屋定金管理
*/
export const fwdjglApi ={
  getlist,
  reporinfo,
  addDeposit,
  getProjectById,
  updateDeposit,
  delDeposit,
  relationlist,
  getdata,
  relationData,
  getzjzh
};

