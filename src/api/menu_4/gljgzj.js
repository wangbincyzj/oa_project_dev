
//1231
/*添加三方协议*/
// import {requests} from "@/api";
import { requests8093 } from "../jianguan";


/**
 * 根据缴存姓名编号    预售资金缴存使用 - 根据条件查询      分页查询
 * current  当前页数
 * size  每页显示条目个数
 *  jiaocunXmbh  缴存项目编号
 */
let getProjectById = function(current,size,jiaocunXmbh){
    return requests8093.get("data-presale-funds/jiaocun/selectByCondition", {
        current,size,jiaocunXmbh
    })
  }

/**
*  确认上报 post    状态上报 
*/
let addDeposit = function (_form) {
    // console.log(requests8093)
    return requests8093.post("data-presale-funds/jiaocun/report", _form)
}


let apaymentlist = function (current,size,jiaocunXmbh,jiaocunJkzt) {
    // console.log(requests8093)
    return requests8093.get("data-presale-funds/jiaocun/selectByCondition", {current,size,jiaocunXmbh,jiaocunJkzt})
}


/**
 * 管理监管资金  打印交款名单 
 */
export const gljgzjApi = {
    addDeposit,
    getProjectById,
    apaymentlist
}
