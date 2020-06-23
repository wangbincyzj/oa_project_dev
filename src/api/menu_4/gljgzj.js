
//管理监管资金  1049906948
/*添加三方协议*/
// import {requests} from "@/api";
import { requests8083 } from "../jianguan";


/**
 * 根据缴存姓名编号    预售资金缴存使用 - 根据条件查询      分页查询
 * 
 * @param {*} current  当前页数
 * @param {*} size    每页显示条目个数
 * @param {*} jiaocunXmbh   缴存项目编号
 */

let getProjectById = function(current,size,jiaocunXmbh){
    return requests8083.get("data-presale-funds/jiaocun/selectByCondition", {
        current,size,jiaocunXmbh
    })
  }

/**
 * 状态上报
 * @param {*} _form 
 */
let addDeposit = function (_form) {
    // console.log(requests8083)
    return requests8083.post("data-presale-funds/jiaocun/report", _form)
}

/**
 * 根据合同编号查询缴存记录 预售资金缴存使用 - 根据条件查询
 * @param {*} current 
 * @param {*} size 
 * @param {*} jiaocunXmbh   缴存项目编号
 * @param {*} jiaocunJkzt   缴存状态
 */
let apaymentlist = function (current,size,jiaocunXmbh,jiaocunJkzt) {
    // console.log(requests8083)
    return requests8083.get("data-presale-funds/jiaocun/selectByCondition", {current,size,jiaocunXmbh,jiaocunJkzt})
}


/**
 * 管理监管资金  打印交款名单 
 */
export const gljgzjApi = {
    addDeposit,
    getProjectById,
    apaymentlist
}
