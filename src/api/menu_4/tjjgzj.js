
<<<<<<< HEAD


//添加监管资金  1049906948

=======
>>>>>>> temp_dev
/*添加监管资金*/  
 import {requests} from "@/api";
import { requests8083 } from "../jianguan";


 /**
  * 合同列表查询
  * @param {*} kfsRwbh  开发商入网编号
  * @param {*} jiaocunMsrxm   买受人姓名
  * @param {*} jiaocunMsrzjhm   证件号
  * @param {*} jiaocunHtbh   合同备案
  */
<<<<<<< HEAD
let getlist = function(kfsRwbh){
  return requests8083.get("data-presale-funds/jiaocun/selectPage", {kfsRwbh})
}

/**
  * 查询合同详情
  * @param {*} kfsRwbh  开发商入网编号
  * @param {*} jiaocunMsrxm   买受人姓名
  * @param {*} jiaocunMsrzjhm   证件号
  * @param {*} jiaocunHtbh   合同备案
  */
 let getDetail = function(kfsRwbh,htBh){
  return requests8083.get("data-presale-funds/jiaocun/selectPage", {kfsRwbh,htBh})
=======
let getContract = function({kfsRwbh,jiaocunMsrxm=null,jiaocunMsrzjhm=null,jiaocunHtbh=null}){
  return requests8083.get("data-presale-funds/jiaocun/selectPage", {kfsRwbh,jiaocunMsrxm,jiaocunMsrzjhm,jiaocunHtbh})
>>>>>>> temp_dev
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
<<<<<<< HEAD
let fetchlist = function(jiaocunHtbh){
  return requests8083.get("data-presale-funds/jiaocun/selectByCondition", {jiaocunHtbh})
=======
let getContractByCondition = function(kfsRwbh,jiaocunMsrxm=null,jiaocunMsrzjhm=null,jiaocunHtbh=null){
  return requests8083.get("data-presale-funds/jiaocun/selectPage", {kfsRwbh,jiaocunMsrxm,jiaocunMsrzjhm,jiaocunHtbh})
>>>>>>> temp_dev
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
<<<<<<< HEAD
    getlist,
    fetchlist,
    getDetail,
=======
    getContract,
    getContractByCondition,
    getListByHtbh,
>>>>>>> temp_dev
}
