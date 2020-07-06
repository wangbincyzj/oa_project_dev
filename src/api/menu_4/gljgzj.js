

//管理监管资金  

import {requests} from "@/api";
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
 * @param {*} 
 */
let informDeposit = function ({jiaocunId,jiaocunJkzt=1}) {
    return requests8083.post("data-presale-funds/jiaocun/report", {jiaocunId,jiaocunJkzt})
}

/**
 * 删除
 * @param {*} 
 */
let deleteDeposit = function (jiaocunId) {
    return requests8083.get("data-presale-funds/jiaocun/del", {jiaocunId})
}

/**
 * 根据合同编号查询缴存记录 预售资金缴存使用 - 根据条件查询
 * @param {*} current 
 * @param {*} size 
 * @param {*} jiaocunXmbh   缴存项目编号
 * @param {*} jiaocunJkzt   缴存状态
 */
let apaymentlist = function (current,size,jiaocunXmbh,jiaocunJkzt) {
    return requests8083.get("data-presale-funds/jiaocun/selectByCondition", {current,size,jiaocunXmbh,jiaocunJkzt})
}
/**
 * 修改缴存
 */
let updateDeposit = function (_form) {
    return requests8083.post("data-presale-funds/jiaocun/update", _form)
  }

/**
 * 查询缴存明细
 * @param {*} _form 
 */
let getDepositDetail = function (id) {
    return requests8083.get("data-presale-funds/jiaocun/selectOne", {id})
}


export const gljgzjApi = {
    informDeposit,
    deleteDeposit,
    updateDeposit,
    getProjectById,
    getDepositDetail,
    apaymentlist
}
