/*业务收件相关*/
import {requests} from "@/api";

let getBusinessType = function () {
  return requests.get("data_center/businessReceive/getBusinessType")
}


export const businessApi = {
  getBusinessType
}