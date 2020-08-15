/*房屋定金管理*/
import { requests } from "@/api";
import { requests8083 } from "../jianguan"


/**
 *资金监账户
 */
let getAccount = function (xmxxXmbh) {   //,zjjgzhShzt=3
  return requests8083.get("data-presale-funds/supervisedAccount/list", {
     xmxxXmbh
  })
}


/**
 * 分页查询
 * @param page
 * @param size
 * 
 * @returns {Promise<AxiosResponse<any>>}
 */
let getDepositByAccount = function (page, size = 20,djJkyhzh,djDjglzt=0,djJkzt=2,djDjtkzt=0) {
  return requests8083.get("data-presale-funds/deposit/selectPage", {
    current: page, size,djJkyhzh,djDjglzt,djJkzt,djDjtkzt
  })
}

/**
  * 合同列表查询
  * @param {*} kfsRwbh  开发商入网编号
  * @param {*} jiaocunMsrxm   买受人姓名
  * @param {*} jiaocunMsrzjhm   证件号
  * @param {*} jiaocunHtbh   合同备案
  */
 let getContract = function(kfsRwbh,htShzt ){
  return requests8083.get("data-presale-funds/jiaocun/selectPage", {kfsRwbh,htBazt})
}

/**
 * 关联合同
 */
let relateContract = function ({djId,htBh,kfsRwbh}) {
  return requests8083.get("data-presale-funds/deposit/relation", {djId,htBh,kfsRwbh})
}

export const djglApi ={
  getAccount,
  getDepositByAccount,
  getContract,
  relateContract,

};

