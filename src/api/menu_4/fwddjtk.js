
//1049906948  退款 统计
/*房屋定金管理  定金退款 */
import { requests } from "@/api";
import { requests8083 } from "../jianguan";



/**
 * 定金缴存 分页查询
 * @param {*} current   页数
 * @param {*} size   每页条数
 * @param {*} djsyXmbh 项目编号
 */
let getlist = function (current, size,djDjglzt,djJkzt,djDjtkzt,zjjgzhYhzh) {
    return requests8083.get("data-presale-funds/deposit/selectPage", {
      current, size,djDjglzt,djJkzt,djDjtkzt,zjjgzhYhzh 
    })
  }


/**
 * 退款
 * 
 * @param {*} id   定金id
 */
  let tkData = function (_form) {
    return requests8083.post("data-presale-funds/fundUse/save", _form)
  }


 /**
* 房屋定金退款
* 房屋顶金
*/
export const fwddjtklApi ={
    getlist,
    tkData
  };
