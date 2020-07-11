


//添加监管资金  1049906948

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
}


  /**
 * 新增缴存
 */
let addDeposit = function (_form) {
    return requests8083.post("data-presale-funds/jiaocun/save", _form)
  }


/**
 * 下拉列表信息
 * 根据合同编号查询  
 * @param {*} kfsRwbh 
 */
let fetchlist = function(htbh){
  return requests8083.get("data-presale-funds/jiaocun/getListByHtbh", {htbh})
}



/**
 * 添加监管资金
 */
  export const tjjgzjApi = {
    addDeposit,
    getlist,
    fetchlist,
    getDetail,
}
