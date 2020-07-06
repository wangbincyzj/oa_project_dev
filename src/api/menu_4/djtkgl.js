

/*房屋定金管理  定金退款 */
import { requests } from "@/api";
import { requests8083 } from "../jianguan";


/**
 * 定金缴存 分页查询
 * @param {*} current   页数
 * @param {*} size   每页条数
 * @param {*} djsyXmbh 项目编号
 */
let getfundUse = function (current, size, djsyXmbh) {
  return requests8083.get("data-presale-funds/fundUse/selectPage", {
    current, size,djsyXmbh
  })
}

/**
 *定金明细
 */
let getfundUseDetail = function (id) {   //,zjjgzhShzt=3
  return requests8083.get("data-presale-funds/fundUse/selectOne", {
     id
  })
}

/**
 * 退款
 * 
 * @param {*} id   定金id
 */
let addfundUse = function (_form) {
  return requests8083.post("data-presale-funds/fundUse/save", _form)
}





/**
 * 定金退款主键查询
 * @param {*} id  定金退款id
 */
let getAccountInfoById = function (id) {
  return requests8083.get("data-presale-funds/fundUse/selectOne", {id})
}



/**
 * 定金退款管理修改
 * @param {*} _form 
 */
let geteditData = function (_form) {
  return requests8083.post("data-presale-funds/fundUse/update",_form)
}


/**
 * 上报
 * @param {*} id  定金退款id
 */
let getReportData = function (id) {
  return requests8083.get("data-presale-funds/fundUse/submit",{id})
}


/**
 * 删除
 * @param {*} id  定金退款id
 */
let getDeleteData = function (id) {
  return requests8083.get("data-presale-funds/fundUse/delete",{id})
}




let getstatisticsData = function (jgzh) {
  return requests8083.get("data-presale-funds/deposit/selectCount",{jgzh})
}


export const djtkglApi = {
  getfundUse,
  getfundUseDetail,
  addfundUse,
  // tkData,
  // getAllSysb,
  // getAccountInfoById,
  // geteditData,
  // getReportData,
  // getDeleteData,
  // getstatisticsData
};
