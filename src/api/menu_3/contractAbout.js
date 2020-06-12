import {requests} from "@/api";



let getRwqyBaseInfo = function (id) {
  return requests.get("data_center/accessEnterprises/selectById", {id})
}


export const contractAbout = {
  getRwqyBaseInfo
}