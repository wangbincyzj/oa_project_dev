/*根据楼栋添加房间相关api*/

import {requests} from "@/api";


/**
 * 通过楼栋ID批量生成房间
 */
let addRoom = function (_form) {
  return requests.post("room/addBatch", _form, {timeout: 30000})
}

/**
 * 通过楼栋ID手动生成房间
 */
let addRoom2 = function (_form) {
  return requests.post("room/save", _form)
}




export const tjhsfjApi = {
  addRoom,addRoom2,
}