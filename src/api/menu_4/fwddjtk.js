
//4564
/*房屋定金管理  定金退款*/
import { requests } from "@/api";
import { requests8093 } from "../jianguan";



/**
 * 定金缴存 分页查询
 * @param {*} current  
 * @param {*} size 
 * @param {*} djsyXmbh 银行账户
 */
let getlist = function (current, size) {
    return requests8093.get("data-presale-funds/fundUse/selectPage", {
      current, size
    })
  }
  
 
 /**
* 房屋定金退款
*/
export const fwddjtklApi ={
    getlist,
  };


   