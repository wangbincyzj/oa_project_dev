
/*添加监管资金*/  
 import {requests} from "@/api";
import { requests8083 } from "../jianguan";


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
let getContract = function({kfsRwbh,jiaocunMsrxm=null,jiaocunMsrzjhm=null,jiaocunHtbh=null}){
  return requests8083.get("data-presale-funds/jiaocun/selectPage", {kfsRwbh,jiaocunMsrxm,jiaocunMsrzjhm,jiaocunHtbh})
}


  /**
 * 新增缴存
 */
let addDeposit = function (_form) {
    return requests8083.post("data-presale-funds/jiaocun/save", _form)
  }


/**
 * 
 * 根据条件查询合同  
 * @param {*} kfsRwbh 
 */
let getContractByCondition = function(kfsRwbh,jiaocunMsrxm=null,jiaocunMsrzjhm=null,jiaocunHtbh=null){
  return requests8083.get("data-presale-funds/jiaocun/selectPage", {kfsRwbh,jiaocunMsrxm,jiaocunMsrzjhm,jiaocunHtbh})
}


/**
 * 
 * 根据合同编号查询缴款记录 
 * @param {*} 
 */
let getListByHtbh = function(htbh){
  return requests8083.get("data-presale-funds/jiaocun/getListByHtbh", {htbh})
}


  export const tjjgzjApi = {
    addDeposit,
    getContract,
    getContractByCondition,
    getListByHtbh,
}
