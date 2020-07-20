import {requests} from "@/api";


let getRooms = function (ldId) {
  return requests.get("data_center/room/selectList", {ldId})
}


export const buildingsApi = {
  getRooms
}