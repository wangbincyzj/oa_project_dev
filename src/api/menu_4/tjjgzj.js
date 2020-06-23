
//123

/*添加三方协议*/  
// import {requests} from "@/api";
import { requests8093 } from "../jianguan";


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
let getlist = function(kfsRwbh){
  return requests8093.get("data-presale-funds/jiaocun/selectPage", {kfsRwbh})
}


  /**
 * 新增缴存
 */
let addDeposit = function (_form) {
    // console.log(requests8093)
    return requests8093.post("data-presale-funds/jiaocun/save", _form)
  }


/**
 * 下拉列表信息
 * 根据合同编号查询  
 * @param {*} kfsRwbh 
 */
let fetchlist = function(jiaocunHtbh){
  return requests8093.get("data-presale-funds/jiaocun/selectByCondition", {jiaocunHtbh})
}



/**
 * 添加监管资金
 */
  export const tjjgzjApi = {
    addDeposit,
    getlist,
    fetchlist
}
