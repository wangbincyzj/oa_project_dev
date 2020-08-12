/*账户资金信息*/
import {requests} from "@/api";
import { requests8083 } from "../jianguan";


/**
 * 根据楼栋查询信息
 * 
 */
let getInfo = function(xmbh){
    return requests8083.get("data-presale-funds/jiaocun/accountFundCount",{xmbh} )
  }

/**
 * 根据条件查询缴存信息
 * 
 */
let getJcInfo = function(ldbh,JKstartTime,JKendTime){
    return requests8083.get("data-presale-funds/jiaocun/buildingFundCount", {ldbh,JKstartTime,JKendTime})
  }

/**
 * 根据条件查询使用信息
 * 
 */
let getSyInfo = function(ldbh){
    return requests8083.get("data-presale-funds/jiaocun/buildingFundCount", {ldbh,FFstartTime,FFendTime})
  }



export const zhzjxxApi = {
    getInfo,
    

}