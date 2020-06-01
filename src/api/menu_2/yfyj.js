/*一房一价*/
import {requests} from "@/api";


/**
 * 设置一房一价
 * @param roomIds
 * @param yfyjGpdj
 * @returns {Promise<AxiosResponse<any>>}
 */
let setHousePrice = function (roomIds, yfyjGpdj) {
  return requests.post("data_center/housePrice/batchSave", {roomIds, yfyjGpdj})
}


/**
 * 一房一价上报审核
 * @param id  楼栋Id
 * @returns {Promise<AxiosResponse<any>>}
 */
let housePriceSubmit = function (id) {
  return requests.get("data_center/housePrice/submit", {id})
}


export const yfyjApi = {
  setHousePrice,
  housePriceSubmit
}